import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = (props) => {
  return (
    <TouchableOpacity
      style={[styles.button, props.style]}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#7C9A92",
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 70,
  },
  text: {
    fontFamily: "Alegreya_500Medium",
    fontSize: 25,
    color: "white",
  },
});
export default Button;
