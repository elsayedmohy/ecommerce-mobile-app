import React from 'react';
import { Image, SafeAreaView, View, StyleSheet, } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; ;

function ViewImageScreen(props) {
    return(
        <SafeAreaView style={styles.Container}>
            <View style={styles.Back}>
                <MaterialCommunityIcons name="close-circle" size={30} />
            </View>
            <View style={styles.trash}>
                <MaterialCommunityIcons name="trash-can-outline" size={30} />
            </View>
            <Image style={styles.image}
            source={require('../assets/layout2.jpg')}
            resizeMode={'contain'}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Container:{
        flex:1
    },
    Back:{
        top:50,
        left:30,
        position:'absolute'
    },
    trash:{
        top:50,
        right:30,
        position:'absolute'
    },
    image:{
        width:'100%',
        height:"100%"
    }
})

export default ViewImageScreen;