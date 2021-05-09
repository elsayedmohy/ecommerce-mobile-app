import React from "react";
import { Modal, View, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";
import colors from "../config/colors";
import LottieView from "lottie-react-native";

function UploadScreen({ progress, visible, onDone }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            color={colors.primary}
            width={250}
          />
        ) : (
          <LottieView
            source={require("../assets/animations/done.json")}
            onAnimationFinish={onDone}
            loop={false}
            autoPlay
            style={{ width: 150 }}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default UploadScreen;
