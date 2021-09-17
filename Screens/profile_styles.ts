import {StyleSheet } from 'react-native'

const profile_styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    userPersonalInfoSection: {
        flexDirection: 'column',
        // paddingHorizontal: 30,
        marginTop: 30,
        marginBottom: 25,
        padding: 10
    },
    userInfoSection: {
        flexDirection: 'column',
        paddingHorizontal: 30,
        marginTop: 5,
        marginBottom: 25,
        backgroundColor: "#e5e5e5",
        padding: 10
    },
    top: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        padding: 5,
    },
    middle_content: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    middle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    name:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    username:{
        fontSize: 13,
        color: '#41748d',
        marginLeft: 10,
        marginTop: 5
    },
    avatarName:{
        fontSize: 13,
        marginLeft: 20,
        color: '#41748d',
        marginTop: 5
    },
    occupation: {
        fontSize: 16,
        color: "black",
        justifyContent: "center",
        alignItems: "center",
    },
    gender: {
        fontSize: 14,
        color: "grey",
        justifyContent: "center",
        alignItems: "center",
    },
    age: {
        marginTop: 5,
        fontSize: 12,
        color: "grey",
        justifyContent: "center",
        alignItems: "center",
    },
    initial__age: {
        marginTop: 5,
        fontSize: 12,
        color: "grey",
        justifyContent: "center",
        alignItems: "center",
    },
    description: {
        color: "gray",
        // marginTop: 40,
        fontSize: 15,
        fontWeight: 'bold'
    },
    row:{
        flexDirection: 'row',
        marginBottom: 10
    },
    infoWrapper: {
        borderBottomColor: "#dddddd",
        borderBottomWidth: 1,
        borderTopColor: "#dddddd",
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
        alignItems: 'center',
        padding: 10,
        justifyContent: "space-between"
    },
    detailsWrapper: {
        borderTopColor: "#dddddd",
        borderTopWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        justifyContent: "space-around"
    },
    InfoBox: {
        // width: "50%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    menuWrapper: {
        marginTop: 10
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30
    },
    menuItemText: {
        color: "#777777",
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26 
    },
    edit__button: {
        position: 'absolute',
        right: 10,
        borderRadius: 20,
        backgroundColor: "#41748d",
        padding: 10,
        top: 20,
    }
})

export default profile_styles;