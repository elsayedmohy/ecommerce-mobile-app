import React from 'react';
import { View , StyleSheet } from 'react-native';
import AppText from './AppText';
import Icon from "./Icon"

function CategoryPickerItem({onPress , item}) {
    return (
        <View style={styles.container} >
            <Icon name="lock" backgroundColor={item.backgroundColor} name={item.icon} size={70} />
            <AppText onPress={onPress} style={styles.label} >{item.label}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:30,
        paddingVertical:15,
        width:"33%",
        alignItems:"center"
    },
    label:{
        marginTop:7,
        textAlign:"center"
    }
})

export default CategoryPickerItem;