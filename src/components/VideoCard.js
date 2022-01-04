import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import WatchButton from "./WatchButton";

const VideoCard = ({ title, subtitle, index }) => {
  return (
    <View style={styles.videoContainer}>
      <View style={styles.videoRowContainer}>
        <View style={styles.videCardTextContainer}>
          <Text style={styles.headerTitle}>{title}</Text>
          <Text style={styles.subtitleText}>{subtitle}</Text>
          <WatchButton />
        </View>
        {index === 0 ? (
          <Image source={require("../../assets/videoCardOneImage.png")} />
        ) : index === 1 ? (
          <Image source={require("../../assets/VideoCardTwo.png")} />
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  videCardTextContainer: {
    width: 190,
  },
  videoContainer: {
    marginTop: 40,
    width: Dimensions.get("window").width - 35,
    height: 180,
    borderRadius: 20,
    backgroundColor: "#F7F3F0",
  },
  videoRowContainer: {
    flexDirection: "row",
    padding: 20,
    marginLeft: 5,
  },
  headerTitle: {
    fontFamily: "Alegreya_500Medium",
    fontWeight: "500",
    fontStyle: "normal",
    fontSize: 25,
    lineHeight: 34,
    color: "#253334",
  },
  subtitleText: {
    fontFamily: "Alegreya_500Medium",
    fontWeight: "500",
    fontStyle: "normal",
    fontSize: 15,
    lineHeight: 18,
    color: "#253334",
  },
});
export default VideoCard;
