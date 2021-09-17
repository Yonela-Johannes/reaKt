import React from 'react'
import {Text, Image, StyleSheet, View, FlatList} from 'react-native'
import { AlbumCard } from '../../types'
import Album from './Album'
export type AlbumCategoryProps = {
    title: string;
    albums: [AlbumCard]
}
function AlbumCategory(props: AlbumCategoryProps) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList 
            data={props.albums}
            renderItem={({ item }) => <Album album={item} />}
            keyExtractor={(item) => item.id}
            horizontal
            showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default AlbumCategory

const styles = StyleSheet.create({

    title:{
        color: "#41748d",
        fontSize: 13,
        padding: 10,
    }

})