import React, {useState} from 'react'
import {Modal, View, SafeAreaView, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { Button } from 'react-native-elements'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import { MaterialCommunityIcons, Feather, Entypo, MaterialIcons, FontAwesome, FontAwesome5, AntDesign, EvilIcons } from '@expo/vector-icons';
import profile_styles from './profile_styles'

function UserProfileScreen() {
    const [name, setName] = useState('Yonela')
    const [username, setUsername] = useState('Niello')
    const [avatarName, setAvatarname] = useState('Prince Niello')
    const [occupation, setOccupation] = useState('Web Developer')
    const [gender, setGender] = useState('male')
    const [age, setAge] = useState('27')
    const [initialAge, setInitialAge] = useState('25')
    const [area, setArea] = useState('Wolseley')
    const [currentArea, setCurrentarea] = useState('Mfuleni')
    const [preffedArea, setPreffedArea] = useState('Crawford')
    const [description, setDescription] = useState('Treat everyone you meet like God in drag.')
    const [rate, setRate] = useState(1250)
    const [rank, setRank] = useState("King")
    const [status, setStatus] = useState('')
    const [peeps, setPeeps] = useState('5000')
    const [reaktors, setReacktors] = useState(1500)
    const [views, setViews] = useState(500)

    return (
        <SafeAreaView style={profile_styles.container}>
            <View style={profile_styles.userPersonalInfoSection}>
                <View>
                    <View style={profile_styles.top}>
                        <Image style={{width: 50, height: 50, borderRadius: 50}} source={require('../assets/images/displaycreatorpic.jpg')} />
                        <Text style={profile_styles.name}>{name}</Text>
                    </View>
                </View>
            </View>

                    <View style={profile_styles.middle_content}>
                        <View style={profile_styles.middle}>
                            <Image style={{width: 50, height: 50, borderRadius: 50}} source={require('../assets/images/new.png')} />
                            <Text style={profile_styles.username}>{username}</Text>
                        </View>
                        <View style={profile_styles.middle}>
                            <Image style={{width: 50, height: 50, borderRadius: 50}} source={require('../assets/images/dp.jpg')} />
                            <Text style={profile_styles.avatarName}>{avatarName}</Text>
                        </View>
                    </View>
                    <View style={{alignItems: 'center',marginTop: 10, padding: 5}}>
                            <Text style={profile_styles.occupation}>{occupation}</Text>
                        <View style={{width: '100%', alignItems: 'center', marginTop: 10}}>
                            <Text style={profile_styles.gender}>{gender}</Text>
                            <Text style={profile_styles.age}>{age}</Text>                            
                            <Text style={profile_styles.initial__age}>You look: {initialAge} years</Text>
                            <View>
                                <Text style={{fontSize: 10, color: 'gray'}}>What I say:</Text>
                                <Text style={profile_styles.description}>{description}</Text>
                            </View>
                        </View>
                    </View>
            <View style={profile_styles.userInfoSection}>
                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "flex-end"}}>
                    <FontAwesome name="map-marker" size={18} color="gray" />
                    <Text style={{marginLeft: 5}}>{area}</Text>
                </View>
                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center"}}>               
                    <FontAwesome5 name="map-marker" size={15} color="green" />
                    <Text style={{marginLeft: 5}}>{currentArea}</Text>
                </View>
                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "flex-start"}}>
                    <FontAwesome name="map-marker" size={18} color="red" />
                    <Text style={{marginLeft: 5}}>{preffedArea}</Text>
                </View>
            </View>
            <View style={profile_styles.infoWrapper}>
                <View style={profile_styles.InfoBox}>
                    <Text>{peeps}</Text>
                    <AntDesign name="addusergroup" size={24} color="black" />
                </View>
                <TouchableOpacity style={profile_styles.InfoBox}>
                    <Text style={{color: 'black'}}>{reaktors}</Text>
                    <EvilIcons name="heart" size={22} color="red" />
                </TouchableOpacity>
                <View style={profile_styles.InfoBox}>
                    <Text>{rank}</Text>
                    <MaterialCommunityIcons name="crown-outline" size={24} color="black" />
                </View>
                <View style={profile_styles.InfoBox}>
                    <Text>{rate}</Text>
                    <Entypo name="star-outlined" size={24} color="black" />
                </View>
            </View>
            <View style={profile_styles.detailsWrapper}>
                <View style={profile_styles.InfoBox}>
                    <Text>{peeps}</Text>
                    <AntDesign name="addusergroup" size={24} color="black" />
                </View>
                <TouchableOpacity style={profile_styles.InfoBox}>
                    <Text style={{color: 'black'}}>{reaktors}</Text>
                    <EvilIcons name="heart" size={22} color="red" />
                </TouchableOpacity>
                <TouchableOpacity style={profile_styles.InfoBox}>
                    <Text>{views}</Text>
                    <FontAwesome name="eye" size={20} color="black" />
                </TouchableOpacity>
                <View style={profile_styles.InfoBox}>
                    <Text>{rate}</Text>
                    <Entypo name="star-outlined" size={24} color="black" />
                </View>
            </View>

            <TouchableOpacity style={profile_styles.edit__button}>
                <Feather name="edit" size={20} color="white"
                />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default UserProfileScreen

