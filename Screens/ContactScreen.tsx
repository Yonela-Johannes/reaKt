import React, {useState, useEffect} from 'react'
import { DataStore } from 'aws-amplify'
import { User } from '../src/models'
import {View} from 'react-native'
import { FlatList, StyleSheet } from 'react-native';
import UserItem from '../components/UserItem/index';
import { useRoute } from '@react-navigation/native';




function ContactScreen({ navigation }) {
    const [users, setUsers] = useState<User[]>([])
    const route = useRoute();

    const contactLink = () => {
        navigation.navigate('contactScreen')
    }

    useEffect(() => {
        const fetchUsers = async () => {
            const fetchedUsers = await DataStore.query(User);
              setUsers(fetchedUsers);
        };
        fetchUsers();

    }, [])


    return (
        <View style={styles.container}>
        <FlatList style={{width: '100%'}}
         data={users}
        renderItem={({ item }) => <UserItem user={item} /> }
        keyExtractor={(item) => item.id}
        />
        </View>
    )
}

export default ContactScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    contact__link: {
        position: 'absolute',
        right: 5,
        top: 25,
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#352d3e',
    }

})