import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        padding: 10,
        paddingTop: 10,
        overflow: 'hidden',
    },
    midContainer: {
        justifyContent: 'space-between',
    },
    leftContainer: {
        flexDirection: 'row',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 15,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 14,
        color: "#49274b",
    },
    status: {
        fontSize: 12,
        color: 'gray'
    },
    occupation: {
        fontSize: 12,
    }
});

export default styles;