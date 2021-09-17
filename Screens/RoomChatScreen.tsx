import React from 'react';
import { useRoute } from '@react-navigation/native';
import chatRoomData from '../data/Chats';
import { FlatList, View, StyleSheet} from 'react-native';
import ChatMessage from '../components/ChatMessage';
import InputBox from '../components/InputBox/Index';

const RoomChatScreen = ()=> {

    return (
        <View style={styles.container} >
            <FlatList data={chatRoomData.messages}
            renderItem={({ item }) => <ChatMessage message={item} />}
            />
            <InputBox/>
        </View>
    );
}
export default RoomChatScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})