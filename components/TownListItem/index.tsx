import  React from 'react';
import styles from './style';
import { Text, View, TouchableWithoutFeedback, Image  } from 'react-native';
import { TownRoom } from "../../types";
import { useNavigation } from '@react-navigation/native';

export type TownListItemProps = {
    name : TownRoom;
}
const TownListItem = (props: TownListItemProps) => {
    const { name } = props;
    const navigation = useNavigation();

    const onClick = () => { 
        // Navigate to chat room with this townroom 
        navigation.navigate('LocalAreaRoom', {
            id: name.id,
            name: name.name,
            })

        }    

    return (
        <View>
 
            <TouchableWithoutFeedback onPress={onClick}>
                <View style={styles.container}>
                    <View style={styles.leftContainer}>
                        <View style={styles.townsContainer}>
                            <View style={styles.nameContainer}>
                                <Text style={styles.name}>{name.name}</Text>
                                {name.notification &&
                                        <View style={styles.badge__container}>
                                        <Text style={styles.badge__text}>{name.notification}</Text>
                                        </View>}
                            </View>
                            <Text style={styles.bio}>{name?.bio}</Text>
                        </View>
                        <View>
                            <Image style={styles.thumbnail} source={{uri: name.imageUri}} />
                        </View>
                    </View>
                </View> 
            </TouchableWithoutFeedback>
        </View>
    ) 
};

export default TownListItem;