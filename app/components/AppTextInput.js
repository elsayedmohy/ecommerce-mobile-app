import React , {useState} from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Screen from './Screen';
import colors from "../config/colors"
import defaultStyles from "../config/defaultStyles"



function AppTextInput({iconname , size=25, width="100%" ,...props}) {
    const [input , setInput] = useState("")
    return (

            <View style={[styles.container, {width}]}>
                {iconname&&<MaterialCommunityIcons name={iconname} size={size} style={styles.icon}/>}
                <TextInput
                style={defaultStyles.text}
                onChangeText={(text)=> setInput(text)}
                {...props}
                />
            </View>

    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:colors.light,
        borderRadius:25,
        padding:15,
        marginVertical:10,
        overflow:"hidden"
    },
    icon:{
        marginRight:10,
        color:colors.mediumgray,
    },
    
})
export default AppTextInput;