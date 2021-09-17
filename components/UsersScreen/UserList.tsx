import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native';
import users from '../../data/UsersList'
import { user } from '../../redux/reducers/user';
function UserList() {
    return (
        <View style={styles.container}>

            <UserListItem />

            {/* <FlatList style={{width: '100%'}}
            data={users}
            renderItem={({item}) => <UserListItem user={item} />}
            keyExtractor={(item) => item.id}
            /> */}
            <Text>Yonela Jhjkkhjkkhohannes</Text>
        </View>
    )
}

export default UserList

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });