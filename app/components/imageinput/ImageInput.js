import React , {useEffect}  from 'react';
import { Image, View , StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native';
import * as ImagePicker from "expo-image-picker"
import { MaterialCommunityIcons} from "@expo/vector-icons"
import colors from '../../config/colors';

function ImageInput({imageUri , onChangeImage}) {
  
  useEffect(()=>{
    getPermission()
  },[])
    const getPermission = async () =>{
      const result = await ImagePicker.requestCameraPermissionsAsync();
      if(!result.granted) alert("please give permission")
    }
    
    const handlePress=()=>{
      if(!imageUri) selectImage();
      else Alert.alert("Delete" , "Are you sure you want to delete this ?",[
        {text:"Yes",onPress:()=> onChangeImage(null) },
        {text:"No"}
      ])
    }
      const selectImage = async () =>{
        try {
         const result = await ImagePicker.launchImageLibraryAsync({
           mediaTypes:ImagePicker.MediaTypeOptions.Images,
           quality:0.5,
         });
          if (!result.cancelled) onChangeImage(result.uri)
       } catch (error) {
         console.log(error)
       }
      }


return (

      <TouchableWithoutFeedback onPress={handlePress}>
          <View style={styles.container}>
                {!imageUri &&<MaterialCommunityIcons color={colors.mediumgray} name="camera" size={60}/>}
                {imageUri && <Image source={{ uri:imageUri }} style={{width:100 , height:100}} />}
            </View>
            </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
    container:{
        width:100,
        height:100,
        backgroundColor:colors.light,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:15,
        overflow:"hidden"
    },
    
})

export default ImageInput;