import React from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons} from "@expo/vector-icons"

import AppText from '../AppText';
import defaultStyles from '../../config/defaultStyles';

function ListItem({title, subTitle, image,IconComponent , onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={defaultStyles.colors.light} onPress={onPress}>
            <View style={styles.Container}>
                {IconComponent}
                {image && <Image style={styles.image} source={image}/>}
                <View style={styles.InfoContainer}>
                    <AppText numberOfLines={1} style={styles.title}>{title}</AppText>
                    {subTitle && <AppText numberOfLines={2} style={styles.subTitle}>{subTitle}</AppText>}
                </View>
                <MaterialCommunityIcons name="chevron-right" size={25} color={defaultStyles.colors.mediumgray}/>
            </View>
        </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    Container:{
        flexDirection:'row',
        padding:10,
        alignItems:'center'
    },
    image:{
        width:70,
        height:70,
        borderRadius:35
    },
    InfoContainer:{
        marginLeft:15,
        padding:5,
        justifyContent:"center",
        flex:1
    },
    title:{
        fontWeight:"500"
    },

    subTitle:{
        marginVertical:3,
        color:defaultStyles.colors.mediumgray
    },

})

export default ListItem;