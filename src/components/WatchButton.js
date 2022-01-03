import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const WatchButton = () => {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.buttonRow}>
        <Text style={styles.watchTitle}>Watch Now</Text>
        <AntDesign
          style={{ marginLeft: 8 }}
          name="play"
          size={13}
          color="white"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: 138,
    height: 39,
    borderRadius: 10,
    backgroundColor: "#253334",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 16,
  },
  watchTitle: {
    fontFamily: "Alegreya_500Medium",
    fontWeight: "500",
    fontStyle: "normal",
    fontSize: 15,
    lineHeight: 18,
    color: "white",
  },
});

export default WatchButton;
