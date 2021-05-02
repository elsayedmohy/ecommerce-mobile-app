import React from 'react';
import { View , StyleSheet } from 'react-native';

import colors from '../../config/colors'

function ListItemsSeparator(props) {
    return (
        <View style={styles.separator}></View>
    );
}

const styles = StyleSheet.create({
    separator:{
        width:"100%",
        height:1.5,
        backgroundColor:colors.light
    }
})

export default ListItemsSeparator;