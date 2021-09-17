import React from 'react';
import {View, StyleSheet, FlatList, Text } from 'react-native'
import AlbumCategory from '../components/MusicPlayer/AlbumCategory'
import albumCategories from '../data/AlbumCategories'
import PlayerWidget from '../components/PlayerWidget/index'
function MusicScreen() {
    

    return (
        <View style={styles.container}>

            <FlatList
                data={albumCategories}
                renderItem={({ item }) =>
                 <AlbumCategory
                  title={item.title}
                  albums={item.albums}
                  keyExtractor={(item) => item.id}
                  showsHorizontalScrollIndicator={false}
            />}
            />
            
            <PlayerWidget />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#e2e2e2'
    }
})
export default MusicScreen

