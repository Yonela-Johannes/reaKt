import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import MainTabNavigator from '../navigation/MainTabNavigator'

const MainScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
             <MainTabNavigator/>
        </View>
    )
}
export default MainScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})