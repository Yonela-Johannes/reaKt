import React, {useState, useEffect} from 'react'
import { DataStore } from 'aws-amplify'
import Auth from '@aws-amplify/auth'
import styles from './style';
import { User, ChatRoomUser } from '../../src/models'
import { Text, 
    View, 
    Image, 
    TouchableWithoutFeedback, 
    ActivityIndicator} from 'react-native';
import { ChatRoom } from "../../types";
import { useNavigation } from '@react-navigation/native';


export type ChatListItemProps = {
    chatRoom : ChatRoom;
}
const ChatListItem = ({ chatRoom }) => {


    const [users, setUsers] = useState<User[]>([]);
    const [user, setUser] = useState<User|null>(null);

    const navigation = useNavigation();

    useEffect(() => {
        const fetchUsers = async () => {
            const fetchedUsers = (await DataStore.query(ChatRoomUser)).filter(chatRoomUser => chatRoomUser.chatroom.id === chatRoom.id).map(chatRoomUser => chatRoomUser.user);
                console.log("I am feched User my nigga", fetchedUsers)
            // const authUser = await Auth.currentAuthenticatedUser();
            // console.log(authUser)
            // setUser(fetchedUsers.find(user => user.id !== authUser.attributes.sub) || null);
        }
        fetchUsers();
    }, [])

    const onPress = () => {
        console.warn("pressed on", user.name)
        navigation.navigate('Room', {
        id: chatRoom.id,
        })
    }    

    if (!user){
        return<ActivityIndicator />
    }    

    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
            <View style={styles.leftContainer}>
            <Image source={{uri: user.imageUri}} style={styles.avatar} />
            {!!chatRoom.notification &&
                <View style={styles.badge__container}>
                    <Text style={styles.badge__text}>{chatRoom.notification}</Text>
                </View>}
                <View style={styles.midContainer}>
                <Text style={styles.username}>{user.name}</Text>
                <Text numberOfLines={2}
                 ellipsizeMode={"tail"}
                  style={styles.lastMessage}>{chatRoom.lastMessage?.content}</Text>
                </View>
            </View>
            <Text style={styles.time}>{chatRoom.lastMessage?.createdAt}</Text>
        </View>
        </TouchableWithoutFeedback>
    ) 
};

export default ChatListItem;