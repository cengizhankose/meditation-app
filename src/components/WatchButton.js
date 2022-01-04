import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const WatchButton = ({ isPlay }) => {
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
      backgroundColor: isPlay ? "white" : "#253334",
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
      color: isPlay ? "black" : "white",
    },
  });
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.buttonRow}>
        <Text style={styles.watchTitle}>
          {isPlay ? "play now" : "Watch Now"}
        </Text>
        <AntDesign
          style={{ marginLeft: 8 }}
          name="play"
          size={13}
          color={isPlay ? "black" : "white"}
        />
      </View>
    </View>
  );
};

export default WatchButton;
