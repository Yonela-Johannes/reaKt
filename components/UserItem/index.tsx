import React, {useState, useEffect} from 'react'
import { Auth, DataStore } from 'aws-amplify'
import { ChatRoom, User, ChatRoomUser } from '../../src/models'

import styles from './style';
import { Text, 
    View, 
    Image, 
    TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function UserItem({ user }){
    const navigation = useNavigation();
    const onPress = async () => {
          
        // navigation.navigate('ChatRoom', { id: newChatRoom.id })
        const newChatRoom = await DataStore.save(new ChatRoom({newMessage: 0}))
        const authUser = await Auth.currentAuthenticatedUser();
        const dbUser = await DataStore.query(User, authUser.attributes.sub);
            await DataStore.save(new ChatRoomUser({
            user: dbUser,
            chatRoom: newChatRoom
        }))

        // connect clicked user with the chatroom
        await DataStore.save(new ChatRoomUser({
            user,
            chatroom: newChatRoom
        }));
        navigation.navigate('ChatRoom', { id: newChatRoom.id })
       
    }

    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
            <View style={styles.leftContainer}>
            <Image source={{ uri: user.imageUri }} style={styles.avatar} />           
                <View style={styles.midContainer}>
                <Text style={styles.username}>{user.name}</Text>
                <Text style={styles.occupation}>{user.occupation}</Text>
                <Text numberOfLines={1}
                 ellipsizeMode={"tail"}
                  style={styles.status}>{user.status}</Text>
                </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
    ) 
};
