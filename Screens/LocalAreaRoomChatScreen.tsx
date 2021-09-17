import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import chatRoomData from '../data/Chats';
import { FlatList, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import ChatRoomMessage from '../components/ChatRoomMessage';
import InputBox from '../components/InputBox/Index';
import { Jokes } from '../data/Jokes'
import { Feather } from '@expo/vector-icons';



const LocalAreaRoomChatScreen = ({ navigation })=> {
    const route = useRoute();
    const [joke, setJoke] = useState(Jokes);
    let randomize = Math.floor(Math.random() * joke.length)
    const [status, setStatus] = useState('');
    const stateHandler = () => {
        // navigation.navigate('LocalRankings')
    }

    const rankings = () => {
        navigation.navigate('LocalRankings')
    }
    return (        
        <View style={styles.container} >
            <View style={styles.header}>
                <Text style={styles.header__subtitle}>{joke[randomize].quote}</Text>
                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center"}}>

                </View>
            </View>
            <FlatList data={chatRoomData.messages}
            renderItem={({ item }) => <ChatRoomMessage message={item} />}
            />
            <TouchableOpacity  style={styles.local__town__rankings} onPress={rankings}>         
                <Text style={{fontSize: 20}}>👑</Text>
            </TouchableOpacity>
            <InputBox  style={styles.bottom__container} />
        </View>
    );
}
export default LocalAreaRoomChatScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        // alignItems: 'center',
        padding: 5
    },
    bottom__container: {
        position: "absolute",
        bottom: 0,
    },
    header: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        // borderRadius: 15,
    },
    header__title: {        
        fontWeight: 'bold',
        fontSize: 12,
        color: "#49274b"
    },
    header__subtitle: {
        color: "#367f86",
        fontWeight: 'bold',
        fontSize: 13,
        marginRight: 30,
        padding: 5,
        backgroundColor: 'white'
    },
    header__status: {
        fontSize: 14,
        color: "black"
    },
    local__town__rankings: {
        position: "absolute",
        top: 10,
        right: 15,
        backgroundColor: '#352d3e',
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        borderRadius: 50
    }
})