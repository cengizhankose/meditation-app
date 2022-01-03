import React from "react";
import { Text, View } from "react-native";
import CustomStatusBar from "../../components/CustomStatusBar";

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#253334",
      }}
    >
      <CustomStatusBar />
      <Text>Home!</Text>
    </View>
  );
}

export default HomeScreen;
