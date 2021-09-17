import React from 'react'
import {Text, Image, StyleSheet, View, TouchableWithoutFeedback} from 'react-native'
import { AlbumSingle } from '../../types'
import { useNavigation } from '@react-navigation/native'


export type AlbumProps = {
    album: AlbumSingle,
}
const Album = (props: AlbumProps) => {
    const navigation = useNavigation();

    const onPress = () => { 
        navigation.navigate('AlbumScreen', {id: props.album.id})
    }


    return (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
            <Image style={styles.album__image} source={{uri: props.album.imageUri}} />
            <Text style={styles.headline}>{props.album.artistsHeadline}</Text>
        </View>
    </TouchableWithoutFeedback>
    )
}

export default Album

const styles = StyleSheet.create({
    container: {
        width: 130,
        padding: 5
    },
    album__image : {
        width: '100%',
        height: 120,
    },
    headline: {
        color: 'black',
        fontSize: 12,
        paddingTop: 10,
    }
})