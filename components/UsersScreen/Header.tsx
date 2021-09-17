import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Input } from 'react-native-elements'
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Header() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={{fontSize: 10, color: '#542f5a', fontWeight: 'bold', paddingTop: 1}}>Search User and start chating</Text>
            </View>
            <View style={{width: 150, flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 5}}>
                <Input style={styles.input} placeholder="enter username" />
                <MaterialCommunityIcons styles={{cursor: "pointer"}} name="account-search" size={18} color="#542f5a" />
            </View>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: 'column',
        paddingTop: 5, 
        backgroundColor: '#e9e9e9'        
    },
    input: {
        fontSize: 11,
        textAlign: 'center',
    }
});