import  React from 'react';
import styles from './style';
import { Text, 
    View, 
    Image, 
    TouchableWithoutFeedback } from 'react-native';
import { LocalArea } from "../../types";
// import moment from 'moment';
import { useNavigation } from '@react-navigation/native';


export type AreaListItemProps = {
    localArea : LocalArea;
}
const AreaListItem = (props: AreaListItemProps) => {
    const { localArea } = props;

    const navigation = useNavigation();
    const onClick = () => {
        navigation.navigate('Room', {
        name: localArea.name,
        // name: user.name,
        })
    }
    const user = localArea.users[1];

    return (
        <View>
            <Text> I am The List</Text>
        </View>
        // <TouchableWithoutFeedback onPress={onClick}>
        // <View style={styles.container}>
        //     <View style={styles.leftContainer}>
        //     <Image source={{ uri: user.imageUri }} style={styles.avatar} />           
        //         <View style={styles.midContainer}>
        //         <Text style={styles.username}>{user.name}</Text>
        //         <Text numberOfLines={2}
        //          ellipsizeMode={"tail"}
        //           style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
        //         </View>
        //     </View>
        //     {/* <Text style={styles.time}>{moment(chatRoom.lastMessage.createdAt).subtract(6, 'days').calendar()}</Text> */}
        // </View>
        // </TouchableWithoutFeedback>
    ) 
};

export default AreaListItem;