
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import UsersScreen from '../Screens/UsersScreen'
import RoomScreens from '../Screens/RoomScreens'
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatScreen from '../Screens/ChatScreen';
import { MainTabParamList } from '../types';
import { FontAwesome, FontAwesome5, MaterialCommunityIcons, Entypo, MaterialIcons } from '@expo/vector-icons'
import ChamberScreen from '../Screens/ChamberScreens';
import FeedRoomScreen from '../Screens/FeedRoomScreen';
import MusicScreen from '../Screens/MusicScreen'



const mainTab = createBottomTabNavigator<MainTabParamList>();


export default function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <mainTab.Navigator
      initialRouteName="Chambers"
      tabBarOptions={{
         activeTintColor: Colors[colorScheme].background,
         style: {
          // backgroundColor: Colors[colorScheme].tint,
         },
         labelStyle: {
           fontWeight: 'bold',
         },         
         }}
         >
      <mainTab.Screen
        name="Chats"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ color: string }) => 
              <Entypo name="chat" size={22} color="#367f86" />,
          tabBarLabel: () => null
        }}
        />
      {/* <mainTab.Screen
        name="FeedRoom"
        component={FeedRoomScreen}
        options={{
          tabBarIcon: ({ color: string }) => <FontAwesome5 name="globe-africa" color="#367f86" size={19} />,
          tabBarLabel: () => null
        }}
      /> */}
      <mainTab.Screen
        name="Chambers"
        component={ChamberScreen}
        options={{
          tabBarIcon: ({ color: string }) => 
          <MaterialCommunityIcons name="webhook" color="#367f86" size={25} />,
          tabBarLabel: () => null
        }}
        />
      <mainTab.Screen
        name="Rooms"
        component={RoomScreens}
        options={{
          tabBarIcon: ({ color: string }) => <MaterialIcons name="video-collection" size={23} color="#367f86" />,
          tabBarLabel: () => null
        }}
      />
      <mainTab.Screen
        name="Music"
        component={MusicScreen}
        options={{
          tabBarIcon: ({ color: string }) => <Entypo name="folder-music" size={21} color="#367f86" />,
          tabBarLabel: () => null
        }}
      />
      <mainTab.Screen
        name="Users"
        component={UsersScreen}
        options={{
          tabBarIcon: ({ color: string }) => <FontAwesome name="users" color="#367f86" size={18} />,
          tabBarLabel: () => null
        }}
      />
    </mainTab.Navigator>
  );
}

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
