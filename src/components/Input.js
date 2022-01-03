import React from "react";
import { Text, TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  return (
    <TextInput
      style={[styles.input, props.style]}
      onChangeText={props.onChangeText}
      value={props.value}
      placeholder={props.placeholder}
      placeholderTextColor={"#BEC2C2"}
    />
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: "#BEC2C2",
    color: "#BEC2C2",
    paddingHorizontal: 10,
    fontFamily: "Alegreya_500Medium",
    fontSize: 18,
  },
});
export default Input;
