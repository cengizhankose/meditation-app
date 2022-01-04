import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ToolsCard = ({ backgroundColor, imageColor, iconName, title }) => {
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        paddingTop: 15,
        borderRadius: 30,
        margin: 10,
      }}
    >
      <Image
        style={{ tintColor: imageColor }}
        source={require("../../assets/wave.png")}
      />
      <View
        style={{
          position: "absolute",
          bottom: 15,
          left: 15,
        }}
      >
        <Ionicons name={iconName} color="white" size={20} />
        <Text style={styles.toolsTitle}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  toolsTitle: {
    fontFamily: "Alegreya_500Medium",
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 21,
    color: "white",
    marginTop: 5,
  },
});

export default ToolsCard;
