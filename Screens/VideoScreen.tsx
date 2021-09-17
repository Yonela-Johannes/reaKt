import React,{useState} from 'react'
import { Quotes } from '../data/Quotes'
import { View, StyleSheet, FlatList } from 'react-native'
import Categories from '../data/Catergories'
import VideoCategory from '../components/VideoCategory/VideoCategory'
function VideoScreen() {
    const [quote, setQuote] = useState(Quotes);
    let randomize = Math.floor(Math.random() * quote.length)

    return (
        <View style={styles.container}>
            {/* <View  style={{width: '90%', alignItems: 'center', justifyContent: 'center',padding: 5, backgroundColor: 'white', borderRadius: 5}}>
                <Text style={{color: '#367f86', fontSize: 12, fontWeight: 'bold'}}>{quote[randomize].author}</Text>
                <Text style={{color: 'gray', fontSize: 14, padding: 10, marginRight: 25}}>{quote[randomize].quote}</Text>        
            </View> */}
            <FlatList
                data={Categories.items}
                renderItem={({ item }) => <VideoCategory category={item} />}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
})
export default VideoScreen
