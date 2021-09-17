import React, {useState, useEffect} from 'react'
import { DataStore, Auth } from 'aws-amplify'
import {View} from 'react-native'
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import ChatListItem from '../components/ChatListItem/index';
import { useRoute } from '@react-navigation/native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { ChatRoom, ChatRoomUser } from '../src/models'


function ChatScreen({ navigation }) {
    const route = useRoute();
    const [chatRooms, setChatRooms] = useState<ChatRoom[]>([])

    const contactLink = () => {
        navigation.navigate('ContactScreen')
    }
    const profile = () => {
        navigation.navigate('ProfileScreen')
    }

    useEffect(()=> {
        const fetchChatRooms = async () => {
            const userData = await Auth.currentAuthenticatedUser();
            const chatRooms = (await DataStore.query(ChatRoomUser)).filter(chatRoomUser => chatRoomUser.user.id === userData.attributes.sub).map(chatRoomUser => chatRoomUser.chatroom);

            // setChatRooms(chatRooms);
        }
        fetchChatRooms();
    }, [])
    return (
        <View style={styles.container}>
        <FlatList style={{width: '100%'}}
         data={chatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} /> }
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        />

        <TouchableOpacity onPress={contactLink} style={styles.contact__link}>
            <FontAwesome5 name="link" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={profile} style={styles.user__profile}>
        <FontAwesome name="user-circle-o" size={20} color="white" />
        </TouchableOpacity>
        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    contact__link: {
        position: 'absolute',
        right: 5,
        top: 25,
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#352d3e',
    },
    user__profile: {
        position: 'absolute',
        right: 5,
        top: 80,
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#352d3e',
    },

})