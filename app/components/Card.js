import React from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

function Card({ title, subTitle, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.productname}>{title}</AppText>
          <AppText style={styles.price}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: "100%",
    width: "100%",
    borderRadius: 25,
    overflow: "hidden",
    backgroundColor: colors.white,
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  productname: {
    fontWeight: "400",
  },
  price: {
    marginTop: 15,
    fontWeight: "bold",
    color: colors.secondary,
  },
});

export default Card;
