import React from 'react'
import {View, Text, ImageBackground } from 'react-native'
import styles from './styles'


function BackgroundImage(props) {
    const {name, image, bio, rank, rate} = props.user;

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <ImageBackground style={styles.image} source={{uri: image}}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.bio}>{bio}</Text>
                    <View style={styles.bottom__container}>
                        <View>
                            <Text style={styles.rank}>{rank}</Text>
                        </View>
                        <View>
                            <Text style={styles.rating}>{rate}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </View>
    )
}

export default BackgroundImage
