import React from 'react';
import { TouchableOpacity , StyleSheet, Text} from 'react-native';

import colors from '../config/colors'

function AppButton({title, onPress, style}) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.Button , style]} >
       <Text style={styles.text} >{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    Button:{
        backgroundColor:colors.primary,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        padding:10,
        borderRadius:25,
        marginVertical:10,
    },
    text:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:20,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    }
})

export default AppButton;