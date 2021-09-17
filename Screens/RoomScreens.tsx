import React,{ useState, useLayoutEffect, useEffect} from 'react';
import {View,FlatList, StyleSheet, Text } from 'react-native';
import VideoScreen from './VideoScreen'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';

export default function RoomScreen({ navigation }) {
  const [rooms, setRooms] = useState([]);

  return (
    <View>
      <VideoScreen />
    </View>

  );
};


const styles = StyleSheet.create({
  container: {
    // width: '100%',
    // height: "100%"
  },
});