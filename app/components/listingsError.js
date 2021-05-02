import React from "react";
import AppText from "./AppText";
import AppButton from "./AppButton";
import { View, StyleSheet } from "react-native";

function ListingsError({ onPress }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>Couldn't retrieve the items</AppText>
      <AppButton onPress={onPress} title="Retry" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  text: {
    marginVertical: 15,
  },
});

export default ListingsError;
