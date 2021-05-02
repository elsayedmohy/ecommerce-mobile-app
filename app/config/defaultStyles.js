import colors from "./colors";
import { Platform } from 'react-native';

export default {
    colors,
    text: {
        color:colors.darkgray,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
      }
}