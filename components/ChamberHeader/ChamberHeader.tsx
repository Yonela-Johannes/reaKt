import  React, { useState }from "react";
// import Kasi from './Kasi';
import { Avatar } from 'react-native-elements';
// import CustomListItem from "../components/CustomList/CustomListItem"
import { StyleSheet, View, Text } from 'react-native'
import { Input } from 'react-native-elements'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ChamberHeader(){
    const [search, setSearch] = useState('')
    return (
      <View style={styles.container}>
          <View>
              <Text style={{fontSize: 12, color: '#542f5a', fontWeight: 'bold', paddingTop: 5}}>Search your Chambers and start chatting</Text>
          </View>
          <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", width: 180}}>
              <Input style={styles.input} value={search} placeholder="Local Area" onChangeText={(text) => setSearch(text)}/>
              <MaterialCommunityIcons styles={{cursor: "pointer"}} name="account-search" size={18} color="#542f5a" />
          </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
      width: "100%",
      alignItems: "center",
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundColor: '#e9e9e9'        
  },
  input: {
      fontSize: 12,
      textAlign: 'center',
  }
});