import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    card : {
        width: '95%',
        height: '90%',
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
    },
    image : {
        width: '100%',
        height: '100%',
        borderRadius: 15,
        overflow: 'hidden',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    bottom__container: {
        paddingBottom: 20
    },
    name: {
        marginRight: 20,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#49274b',
        paddingBottom: 10
    },
    bio: {
        fontSize: 12,
        padding: 10,
        marginRight: 20,
        backgroundColor: 'white',
        borderRadius: 15,
        color: 'gray'
    },
    rank: {
        color: '#367f86',
        fontWeight: 'bold',
        marginRight: 20,
        
    },
    rating: {
        color: '#367f86',
        fontWeight: 'bold',
        marginRight: 20,

    }

})

export default styles