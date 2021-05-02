import React ,{useState} from 'react';
import { StyleSheet,TouchableWithoutFeedback, View ,Modal, Button, FlatList  } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Screen from './Screen';
import AppText from './AppText';
import colors from "../config/colors"
import defaultStyles from "../config/defaultStyles"
import PickerItems from './PickerItems';


function AppPicker({
    selectedItem, 
    onSelectItem,
    PickerIconComponent = PickerItems ,
    iconname,
    items ,
    size=25,
    placeholder,
    width="100%" ,
    numberOfColomns=1,
    ...props}) {
    const [openModal , setOpenModal] = useState(false)
    return (
    <>
        <TouchableWithoutFeedback onPress={()=> setOpenModal(true)}>
            <View style={[styles.container, {width}]}>
                {iconname&&<MaterialCommunityIcons name={iconname} size={size} style={styles.icon}/>}
                {selectedItem ? <AppText style={styles.text}>{selectedItem.label}</AppText> :
                <AppText style={styles.placeholder} >{placeholder}</AppText>}
                
                <MaterialCommunityIcons name="chevron-down" size={size}/>
            </View>
        </TouchableWithoutFeedback>
        <Modal visible={openModal}
                animationType="slide"
        >
            <Screen>
                <Button title="Close" onPress={()=> setOpenModal(false)}></Button>
                <FlatList
                data={items}
                 numColumns={numberOfColomns}
                keyExtractor={(item)=> item.value.toString()}
                renderItem={({item}) => <PickerIconComponent
                item={item}
                label={item.label}
                onPress={()=> {setOpenModal(false)
                    onSelectItem(item)
                }
                    
                }
                />}
                />
            </Screen>
        </Modal>
        </>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:colors.light,
        borderRadius:25,
        padding:15,
        marginVertical:10
    },
    icon:{
        marginRight:10,
        color:colors.mediumgray,
    },
    text:{
        flex:1,
    },
    placeholder:{
        flex:1,
        color:defaultStyles.colors.mediumgray
    }
    
})
export default AppPicker;