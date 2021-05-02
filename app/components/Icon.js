import React from 'react';
import { View , StyleSheet, SafeAreaView } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function Icon({name , size=40 , backgroundColor="#000", color="#fff"}) {
    return (
        <SafeAreaView>
        <View style={{width:size,
            height:size,
            backgroundColor,
            borderRadius:size / 2,
            justifyContent:"center",
            alignItems:"center"}}>
            <MaterialCommunityIcons name={name} size={size/2} backgroundColor={backgroundColor} color={color} />
        </View>
        </SafeAreaView>
    );
}

export default Icon;