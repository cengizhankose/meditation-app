import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const CategoryCard = ({ title, index }) => {
  return (
    <View style={styles.categoryContainer}>
      <View style={styles.iconStyle}>
        {index === 0 ? (
          <Image source={require("../../assets/CalmIcon.png")} />
        ) : index === 1 ? (
          <Image source={require("../../assets/Relax.png")} />
        ) : index === 2 ? (
          <Image source={require("../../assets/Focus.png")} />
        ) : index === 3 ? (
          <Entypo name="air" size={32} color="#253334" />
        ) : (
          <></>
        )}
      </View>
      <Text style={styles.categoryTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    alignItems: "center",
    width: 62,
    height: 65,
    borderRadius: 20,
    backgroundColor: "white",
  },
  iconStyle: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryTitle: {
    marginTop: 5,
    fontFamily: "Alegreya_400Regular",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 14.5,
    color: "white",
  },
});

export default CategoryCard;
