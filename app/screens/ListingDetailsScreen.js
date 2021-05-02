import React from "react";
import { Image, SafeAreaView, Text, View, StyleSheet } from "react-native";

import ListItem from "../components/list/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View style={styles.card}>
      <Image style={styles.productimage} source={listing.images} />
      <View style={styles.infoContainer}>
        <Text style={styles.productname}>{listing.title}</Text>
        <Text style={styles.price}>${listing.price}</Text>
      </View>
      <ListItem
        title="alex craft"
        subTitle="5 listings"
        image={require("../assets/seller.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
  productimage: {
    width: "100%",
    height: 300,
  },
  infoContainer: {
    marginVertical: 20,
    padding: 20,
  },
  productname: {
    fontSize: 22,
    fontWeight: "300",
  },
  price: {
    marginVertical: 20,
    fontWeight: "bold",
    fontSize: 17,
    color: colors.secondary,
  },
});

export default ListingDetailsScreen;
