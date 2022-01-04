import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import CustomStatusBar from "../../components/CustomStatusBar";
import StartNowButton from "../../components/StartNowButton";

const MeditationScreen = () => {
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <Text style={styles.meditationTitle}>Meditation</Text>
      <Text style={styles.meditationSubtitle}>
        Guided by a short introductory course, start trying meditation.
      </Text>
      <Image
        style={{ marginTop: 25 }}
        source={require("../../../assets/meditating.png")}
      />
      <Text style={styles.timeTitle}>45:00</Text>
      <StartNowButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#253334",
  },
  meditationTitle: {
    fontFamily: "Alegreya_500Medium",
    fontWeight: "500",
    fontSize: 35,
    lineHeight: 47,
    color: "white",
    marginTop: 50,
  },
  meditationSubtitle: {
    fontFamily: "Alegreya_400Regular",
    fontWeight: "400",
    fontSize: 20,
    lineHeight: 24,
    color: "white",
    marginTop: 5,
    marginHorizontal: 20,
    textAlign: "center",
    color: "white",
    opacity: 0.5,
  },
  timeTitle: {
    fontFamily: "Alegreya_400Regular",
    fontWeight: "400",
    fontSize: 38,
    lineHeight: 45,
    marginTop: 20,
    color: "white",
  },
});

export default MeditationScreen;
