import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import axios from 'axios'

import { AntDesign, FontAwesome } from '@expo/vector-icons';
function GeneratedUser() {
    const [userData, setUserData] = useState([])
    const [loading, setLoading] = useState(false)
    const [activeUser, setActiveUser] = useState(false)
    const [activeLink, setActiveLink] = useState(0)

    const onClickHandler = () => {
        setLoading(true);
        axios.get('https://randomuser.me/api/')
        .then((response) => {
            console.log(response.data.results)
            setUserData(response.data.result)
        }).catch((error) => { console.log(error)
            setLoading(true)
        }).finally(() => {
            setLoading(false)
            setActiveUser(true)
        })

    }
    const onClick = () => {

    }
    return (
        <View style={styles.container}>
            <View style={styles.mid__container}>
                <View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 15, justifyContent: 'space-between'}}>
                    <TouchableOpacity onPress={onClick}>
                        <Image style={{width: 50, height: 50, borderRadius: 50, marginHorizontal: 25}} source={{uri: 'https://tvline.com/wp-content/uploads/2018/01/grownish-recap.jpg?w=620'}} />
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity style={styles.bottom__container} onPress={onClickHandler}>
                            <FontAwesome name="random" size={20} color="black" />
                        </TouchableOpacity>
                        <Text style={{ color: '#367f86', fontWeight: 'bold'}}>Yonela Johannes</Text>
                        <Text style={{color: '#367f86', fontSize: 10}}>Rank</Text>
                        <Text style={{color: '#367f86', fontSize: 10}}>Ratings</Text>
                        <Text style={{color: '#367f86', fontSize: 10}}>Views</Text>
                    </View>
                </View>
                <Text style={{ color: 'gray', fontSize: 15, padding: 2}}>This is my favourite quote</Text>
            </View>
            {/* {
                loading ? (
                    <Text>...Loading</Text>
                ): (

                )
            } */}
        </View>
    )
}

export default GeneratedUser

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',
    },
    mid__container: {
        flexDirection: 'column',
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
    },
    bottom__container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        padding: 5
        
    }
})