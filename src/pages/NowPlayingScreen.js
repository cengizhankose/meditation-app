import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import CustomStatusBar from "../components/CustomStatusBar";

const NowPlayingScreen = (props) => {
  const data = props.route.params.data;
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#253334",
      }}
    >
      <CustomStatusBar />
      <Image style={styles.icon} source={data.icon} />
      <Text style={styles.title}>{data.title}</Text>

      <Text style={styles.subtitle}>By: Painting with Passion</Text>
      <Image
        style={styles.soundPlayer}
        source={require("../assets/images/sound-player.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 250,
    height: 250,
    borderRadius: 125,
    marginTop: 47,
  },
  title: {
    fontFamily: "Alegreya_500Medium",
    color: "#FFFFFF",
    fontSize: 35,
    marginTop: 28,
  },
  subtitle: {
    fontFamily: "Alegreya_500Medium",
    color: "#FFFFFFB3",
    fontSize: 25,
  },
  soundPlayer: {
    marginTop: 51,
  },
});
export default NowPlayingScreen;
