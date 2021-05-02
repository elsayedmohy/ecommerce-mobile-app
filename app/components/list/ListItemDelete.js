import React from 'react';
import { View , StyleSheet, TouchableWithoutFeedback } from 'react-native';
import colors from "../../config/colors"
import {MaterialCommunityIcons} from '@expo/vector-icons'

function ListItemDelete({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
       <View style={styles.container}>
           <MaterialCommunityIcons 
            name="trash-can"
            size={35}
            color={colors.white} />
       </View>
       </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container:{
        width:60,
        backgroundColor:colors.danger,
        justifyContent:"center",
        alignItems:"center"

    },
})

export default ListItemDelete;