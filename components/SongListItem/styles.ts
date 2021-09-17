import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 8,
    },
    mid__container: {
        marginLeft: 10,
        justifyContent: 'space-evenly'
    },

    image: {
        width: 50,
        height: 50,
        borderRadius: 4
    },

    title: {
        color: '#3d1f48',
        fontSize: 16
    },
    artist: {
        color: "gray",
        fontWeight: "bold",
        fontSize: 12
    }
})

export default styles;