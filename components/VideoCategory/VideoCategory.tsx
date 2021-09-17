import React from 'react';
import { View, Text, Image, FlatList, Pressable } from 'react-native';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';

interface VideoCategoryProps {
  category: {
    id: string,
    title: string,
    songs: {
      id: string,
      poster: string,
      userImage: string,
      title: string,
    }[]
  }
}

export default function VideoCategory(props: VideoCategoryProps) {
  const navigation = useNavigation();
  const { category } = props;

  const onPress = () =>{
    navigation.navigate('VideoDetailsScreen')
    console.warn("You pressed me")
  }
  return (
    <>
      <View style={styles.container}>
            <Text style={styles.title}>{category.title}</Text>
            <FlatList
            data={category.songs}
            renderItem={({item}) => (
              <View style={styles.videoContainer}>
                  <Pressable onPress={onPress}>
                    <Image style={styles.display} source={{uri: item.poster}} />
                  </Pressable>               
                  <Image style={styles.userImage} source={{uri: item.userImage}}/>
                  <Text style={styles.subtitle}>{item.title}</Text>
              </View>               
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            />
        </View>      
     </>
  );
}
