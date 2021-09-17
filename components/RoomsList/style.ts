import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        paddingTop: 10,
        overflow: 'hidden',
        cursor: 'pointer',
    },
    midContainer: {
        justifyContent: 'space-between',
        overflow: 'hidden',
    },
    leftContainer: {
        flexDirection: 'row',
        borderRadius: '2px #000',

    },
    avatar: {
        width: 40,
        height: 40,
        marginRight: 15,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 17,
    },
    lastMessage: {
        fontSize: 16,
        color: 'grey',
        flexWrap: 'wrap',
    },
    time: {
        fontSize: 11,
        color: 'grey',
    },
    searchContainer: {
        backgroundColor: 'grey',
        width: '80%',
    },
    lastContainer: {
        flex: 1,
        alignItems: 'center',
 }
});

export default styles;