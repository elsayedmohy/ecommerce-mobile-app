import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native'
import AppButton from '../components/AppButton';
import colors from '../config/colors';
import routes from "../navigation/routes"

function WelcomeScreen({navigation}) {
    return (
        <ImageBackground
        blurRadius={5}
         style={styles.background} 
         source={require('../assets/layout2.jpg')}
        >
             
             <View style={styles.LogoContainer} >
                 <Image style={styles.Logo} source={require('../assets/logo-red.png')}/>
                 <Text style={styles.tagLine}>Sell What You Don't Need</Text>
             </View>
             <View style={styles.ButtonContainer}>
                <AppButton onPress={()=> navigation.navigate(routes.LOGIN)} title="Login" color='primary'/>
                <AppButton onPress={()=> navigation.navigate(routes.REGISTER)} title="Register" style={{backgroundColor : colors.secondary}}/>
             </View>
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    LogoContainer:{
        position:"absolute",
        top:50,
        alignItems:'center',
    }
    ,
    Logo:{
        width:100,
        height:100,
        position:"absolute",
        top:30,
    },
    tagLine:{
        fontWeight:"500",
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        fontSize:20,
        top:145,
        color:"#333"
    },
    ButtonContainer:{
        width:"100%",
        padding:25,
    },
})

export default WelcomeScreen;