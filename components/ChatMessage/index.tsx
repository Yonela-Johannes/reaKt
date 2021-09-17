import React from 'react'
import { Text, View, StyleSheet  } from 'react-native'
import { Message } from '../../types'
// import moment from 'moment'

export type ChatMessageProps = {
    message: Message;
}

const ChatMessage = (props: ChatMessageProps) => {
    const { message } = props;

    const isMyMessage = () => {
        return message.user.id === "u1";
    }    

    return (
        <View style={styles.container}>
            <View style={[styles.messageBox, {
                backgroundColor: isMyMessage() ? '#eedefd' : '#bec3c8',
                marginLeft: isMyMessage() ? 80 : 0,
                marginRight: isMyMessage() ? 0 : 70,
            }
            ]}>
                {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
                {/* <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>    */}
                <Text style={styles.message}>{message.content}</Text>
            </View>
        </View>
    )
}

export default ChatMessage;

const styles = StyleSheet.create({
    container: {
        padding: 8,
    },
    name: {
        fontWeight: 'bold',
        padding: 2,
        marginLeft: 20,
        color: "#49274b"
    },
    message: {

    },
    messageBox: {
        borderRadius: 8,
        padding: 5,
    }
});