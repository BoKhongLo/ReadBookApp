import { StyleSheet } from "react-native";

const theme = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    darkBackground:{
        backgroundColor:'black'
    },
    whiteBackground:{
        backgroundColor:'white'
    },
    whiteText:{
        color:'white'
    },
    blackText:{
        color:"black"
    }
})

export default theme;