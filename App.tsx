import Amplify from 'aws-amplify'
import config from './src/aws-exports'
import React from 'react';
import { View } from 'react-native'
import RoomChatScreen from './Screens/RoomChatScreen';
import LocalAreaRoomChatScreen from './Screens/LocalAreaRoomChatScreen';
import LoginScreen from './Screens/LoginScreen';
import ChatScreen from './Screens/ChatScreen'
import ContactScreen from "./Screens/ContactScreen"
import LocalAreaRankings from './components/LocalAreaRankings/LocalAreaRankings';
import ChatScreenCreatedRoom from './Screens/ChatScreenCreatedRoom';
import VideoDetailsScreen from './Screens/VideoDetailsScreen'
import SignUpScreen from './Screens/SignUpScreen';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import MainTabNavigator from './navigation/MainTabNavigator';
import VideoScreen from './Screens/VideoScreen'
import MusicScreen from './Screens/MusicScreen'
import UserProfileScreen from './Screens/UserProfileScreen'
import { withAuthenticator } from'aws-amplify-react-native'
import AlbumScreen from './Screens/AlbumScreen'
import FeedRoomScreen from './Screens/FeedRoomScreen';
import ChamberScreen from './Screens/ChamberScreens';
import UsersScreen from './Screens/UsersScreen';
import RoomScreen from './Screens/RoomScreens';
import { Auth } from 'aws-amplify'
import MainScreen from './Screens/MainScreen';
import VideoCategory from './components/VideoCategory/VideoCategory';


const Stack = createStackNavigator();
 Amplify.configure(config)
function App() {

  
  const signOut = () => {
    Auth.signOut();
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={LoginScreen} options={{title: "ReaKt", headerTitleStyle: { color: '#367f86'}}} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{title: "ReaKt", headerTitleStyle: { color: '#367f86'}}}/>
        <Stack.Screen name='ChatRoom' component={ChatScreen}  options={({ route }) => ({
          headerTitle: route.params.name
        })} /> */}

        <Stack.Screen name="navigator" component={MainTabNavigator} options={{  title: "ReaKt",
  headerTitleStyle: {color: '#367f86', fontSize: 15},
  headerRight: () => (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 70, marginRight: 10}}>
        <TouchableOpacity>
          <AntDesign name="questioncircle" size={18} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="user-circle-o" size={18} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={signOut}>
          <AntDesign name="login" size={18} color="black" />
        </TouchableOpacity>
    </View>
  )}}/>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="Music" component={MusicScreen} />
        <Stack.Screen name="Chats" component={ChatScreen} />
        <Stack.Screen name="FeedRoom" component={FeedRoomScreen} />
        <Stack.Screen name="Chambers" component={ChamberScreen} />
        <Stack.Screen name="User" component={UsersScreen} />
        <Stack.Screen name="VideoScreen" component={VideoScreen} />
        <Stack.Screen name="VideoDetailsScreen" component={VideoDetailsScreen}   options={{headerTitle: 'Misic Video'}} />
        <Stack.Screen name="VideoCategory" component={VideoCategory} />
        <Stack.Screen name="Room" component={RoomChatScreen} />
        <Stack.Screen name="Rooms" component={RoomScreen} />
        <Stack.Screen name="ContactScreen" component={ContactScreen}  options={{headerTitle: 'Peeps!'}} />
        <Stack.Screen name="AlbumScreen" component={AlbumScreen} />
        <Stack.Screen name="ProfileScreen" component={UserProfileScreen}  options={{headerTitle: 'My Profile'}}  />
        <Stack.Screen name="LocalAreaRoom" component={LocalAreaRoomChatScreen} options={({ route }) => ({
          headerTitle: route.params.name
        })}  />
        <Stack.Screen name="createdChatRoom" component={ChatScreenCreatedRoom} options={({ route }) => ({
          headerTitle: route.params.name
        })} />
        {/* <Stack.Screen name="InformationScreen" component={InfomartionScreen} /> */}
        <Stack.Screen name="LocalRankings" component={LocalAreaRankings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export default App;
export default withAuthenticator(App);