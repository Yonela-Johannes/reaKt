import React, { useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import {useRoute} from '@react-navigation/native'
import albumDetails from '../data/AlbumDetails'
import SongListItem from '../components/SongListItem/index'
import AlbumHeader from '../components/AlbumHeader/AlbumHeader'

function AlbumScreen() {
    const route = useRoute();

    useEffect(() => {
        console.log(route)
    },[])

    return (
        <View>
            <FlatList
                data={albumDetails.songs}
                renderItem={({item}) => <SongListItem song={item} />}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={() => <AlbumHeader album={albumDetails}/>}
            />
        </View>
    )
}

export default AlbumScreen
