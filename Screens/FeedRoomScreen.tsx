import React, {useEffect, useState} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, useWindowDimensions, Image} from 'react-native'
import { FontAwesome5, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { Quotes } from '../data/Quotes'
import BackgroundImage from '../components/BackGroundImage/BackgroundImage';
import users from '../data/User';
import Animated, {useSharedValue, useAnimatedStyle, useDerivedValue, useAnimatedGestureHandler, interpolate,withSpring, runOnJS  } from 'react-native-reanimated'
import { FontAwesome } from '@expo/vector-icons';
import { PanGestureHandler } from 'react-native-gesture-handler';
import love from '../assets/images/love.png'
import like from '../assets/images/like.png'
const ROTATION = 60;
const SWIPE_VELOCITY = 1000;

function FeedRoomScreen({ navigation }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [nextIndex, setNextIndex] = useState(currentIndex + 1)

    const currentProfile = users[currentIndex]
    const nextProfile = users[nextIndex]

    const { width : screenWidth } = useWindowDimensions();

    const hiddenTranslateX = 2 * screenWidth;
    const translateX = useSharedValue(0)

    const rotate = useDerivedValue(() => interpolate(translateX.value, [0, hiddenTranslateX], [0, ROTATION]) + 'deg');

    const cardStyle = useAnimatedStyle(() => ({
        transform: [{
            translateX: translateX.value,
        },{
            rotate: rotate.value
        }
    ]
    }));

    const nextCardStyle = useAnimatedStyle(() => ({
        transform: [
            {
            scale: interpolate(
                translateX.value, 
                [-hiddenTranslateX, 0, hiddenTranslateX], 
                [1, 0.8, 1],
                ),
            },
        ],
        opacity: interpolate(
            translateX.value, 
            [-hiddenTranslateX, 0, hiddenTranslateX], 
            [1, 0.8, 1],
            ),
    }));

    const likeStyle = useAnimatedStyle (()  => ({
        opacity: interpolate(
            translateX.value, 
            [0, hiddenTranslateX / 4], 
            [0, 1],
            ),
    }));

    const loveStyle = useAnimatedStyle (()  => ({
         opacity: interpolate(
            translateX.value, 
            [0, -hiddenTranslateX / 4], 
            [0, 1],
            ),
    }));

    const gestureHandler = useAnimatedGestureHandler ({
        onStart: (_, context) => {
            context.startX = translateX.value;
        },
        onActive: (event, context) => {
            translateX.value = context.startX + event.translationX;
        },
        onEnd: event => {
            if(Math.abs(event.velocityX) < SWIPE_VELOCITY) {
                translateX.value = withSpring(0);
                return;
            }
            translateX.value = withSpring(hiddenTranslateX * Math.sign(event.velocityX),
            {},
            () => runOnJS(setCurrentIndex)(currentIndex + 1),
            );
        },
    });

    useEffect(() => {
        translateX.value = 0;
        setNextIndex(currentIndex + 1);
    }, [currentIndex, translateX])

    const enterGlobalRooms = () => {
        navigation.navigate('globalRooms')
    }

    const [quote, setQuote] = useState(Quotes);
    let randomize = Math.floor(Math.random() * quote.length)
    return (
        <View style={styles.container}>            
            <View  style={{width: '100%', alignItems: 'center', justifyContent: 'center',padding: 10, backgroundColor: 'white'}}>
                <Text style={{color: '#367f86', fontSize: 12, fontWeight: 'bold'}}>{quote[randomize].author}</Text>
                <Text style={{color: 'gray', fontSize: 14, padding: 10, marginRight: 25}}>{quote[randomize].quote}</Text>        
            </View>

            <View style={styles.page__container}>
                {nextProfile && (<View style={styles.next__card__container}>
                    <Animated.View style={[styles.animated__card, nextCardStyle]}>
                        <BackgroundImage user={nextProfile}/>
                    </Animated.View>
                </View>
                )}
                {currentProfile && (
                    <PanGestureHandler onGestureEvent={gestureHandler}>
                        <Animated.View style={[styles.animated__card, cardStyle]}>
                            <Animated.Image style={[styles.like, likeStyle]} source={like} resizeMode='contain'/> 
                            <Animated.Image style={[styles.love, loveStyle]} source={love} resizeMode='contain'/>
                            <BackgroundImage user={currentProfile}/>
                        </Animated.View>
                    </PanGestureHandler>
                )}
            </View>
        </View>
    )
}

// const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUser}, dispatch);

export default FeedRoomScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    page__container: {
        justifyContent: 'center',
        flex: 1,

    },
    
    enter__feed__global__room: {
        position: "absolute",
        right: 20,
        top: 15,
        backgroundColor: '#41748d',
        borderRadius: 50,
        padding: 5
    },
    post: {
        position: "absolute",
        bottom: 15,
        backgroundColor: '#41748d',
        borderRadius: 50,
        padding: 5
    },
    animated__card: {
        width: '100%',
        height: '100%',
        justifyContent: "center",
        flex: 1,
    },
    next__card__container: {
        ...StyleSheet.absoluteFillObject,
        alignItems: "center",
        justifyContent: "center",
    },
    like: {
        width: 50,
        height: 50,
        position: 'absolute',
        bottom: 200,
        left: 5,
        zIndex: 20,
        elevation: 20,
        padding: 5,
    },
    love: {
        width: 50,
        height: 50,
        position: 'absolute',
        bottom: 200,
        right: 5,
        zIndex: 20,
        elevation: 20,
        padding: 5,
    }
})