import { createNavigationContainerRef } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const CustomStatusBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/Hamburger.png")} />
      <TouchableOpacity onPress={() => navigation.navigate("Meditation")}>
        <Image
          style={{ marginLeft: 10, width: 45, height: 50 }}
          source={require("../../assets/Home.png")}
        />
      </TouchableOpacity>
      <View style={styles.profileImageContainer}>
        <Image
          style={{ width: 45, height: 45, borderRadius: 30 }}
          source={require("../../assets/cengo.jpeg")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    width: Dimensions.get("window").width - 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileImageContainer: {
    width: 45,
    height: 45,
  },
});
export default CustomStatusBar;
