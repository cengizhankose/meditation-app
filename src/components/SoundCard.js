import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import WatchButton from "./WatchButton";

const SoundCard = ({ title, subtitle, style }) => {
  return (
    <View style={[styles.videoContainer, style]}>
      <Image
        style={styles.backgroundImage}
        source={require("../assets/images/relax-sounds.png")}
      />
      <View style={styles.videoRowContainer}>
        <View style={styles.videCardTextContainer}>
          <Text style={styles.headerTitle}>{title}</Text>
          <Text style={styles.subtitleText}>{subtitle}</Text>
          <WatchButton isPlay />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    width: Dimensions.get("window").width - 49,
    height: 195,
    borderRadius: 20,
  },
  backgroundImage: {
    position: "relative",
  },
  videoRowContainer: {
    position: "absolute",
    flexDirection: "row",
    paddingHorizontal: 37,
    paddingVertical: 32,
  },
  headerTitle: {
    fontFamily: "Alegreya_500Medium",
    fontWeight: "500",
    fontStyle: "normal",
    fontSize: 27,
    lineHeight: 34,
    color: "#F7F3F0",
  },
  subtitleText: {
    maxWidth: 205,
    fontFamily: "Alegreya_500Medium",
    fontWeight: "500",
    fontStyle: "normal",
    fontSize: 15,
    lineHeight: 18,
    color: "#F7F3F0",
  },
});
export default SoundCard;
