import React, { useState, useLayoutEffect } from 'react';
import { Text, Input} from 'react-native-elements';
import { Button, KeyboardAvoidingView, View, ImageBackground } from 'react-native';
import styles from './styles';
import { StatusBar } from 'expo-status-bar';
import background__image from '../assets/images/SigmaLogo.png';

function SignUpScreen({ navigation }) {

    const [name, setName] = useState('');
    const [chatName, setChatName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useLayoutEffect(() => {

    }, [navigation]);

    const signUp = () => {

    };


    return (
        <ImageBackground style={{width:'100%', height: '100%'}} source={background__image}>
             <KeyboardAvoidingView behavior="padding" style={styles.signup__container} >
             <StatusBar style="light" />       
             <Text style={styles.header__text}>
                Welcome to reaKt
            </Text>
            <View style={styles.signup__input__container}>
                <Input
                placeholder="name"
                value={name}
                onChangeText={(text) => setName(text)}
                />
                <Input
                placeholder="username"
                value={chatName}
                onChangeText={(text) => setChatName(text)}
                />
                <Input
                placeholder="Email" type='email'
                value={email}
                onChangeText={(text) => setEmail(text)}
                />
                <Input
                placeholder="Password" type='password'
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
                />
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', margin: 20}}>
              
            </View>
            <Button containerStyle={styles.button}
            raised 
            onPress={signUp} 
            title="Sign up" />
            <View style={{ height: 15}} />
            <View>
            </View>
             </KeyboardAvoidingView>
        </ImageBackground>
    )
}

export default SignUpScreen
