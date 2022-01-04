import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const StartNowButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Tools")}
      style={styles.buttonContainer}
    >
      <Text style={styles.startNowTitle}>Start Now</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 190,
    height: 60,
    borderRadius: 10,
    backgroundColor: "#7C9A92",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  startNowTitle: {
    fontFamily: "Alegreya_500Medium",
    fontWeight: "500",
    fontStyle: "normal",
    fontSize: 25,
    lineHeight: 30,
    color: "white",
  },
});

export default StartNowButton;
