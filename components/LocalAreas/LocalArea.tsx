import React from 'react'
import {View, FlatList, Text, StyleSheet} from 'react-native';
import town from '../../data/LocalArea';
import TownListItem from '../../components/TownListItem'

const LocalArea = () => {
    return (        
        <View style={styles.container}>            
            <FlatList 
                data={town}
                renderItem={({ item }) => 
                <TownListItem name={item} />}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.name}
            />
            
        </View>            
    )
}

export default LocalArea;


const styles = StyleSheet.create({
    container: {

    }
})