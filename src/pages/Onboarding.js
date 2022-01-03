import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Logo from "../assets/icons/Logo";
import Button from "../components/Button";

const Onboarding = () => {
  const onLogin = () => {
    console.log("on navigate to login press");
  };
  return (
    <View>
      <Image
        style={styles.bgImage}
        source={require("../assets/images/bg.png")}
      />
      <View style={styles.container}>
        <Logo />
        <Text style={styles.header}>WELCOME</Text>
        <Text style={styles.desc}>
          Do meditation. Stay focused. Live a healthy life.
        </Text>
        <Button
          style={styles.button}
          text="Login With Email"
          onPress={onLogin}
        />
        <Text style={styles.paragraph}>
          Don’t have an account? <Text style={styles.bold}>Sign Up</Text>
        </Text>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  bgImage: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    alignItems: "center",
    marginTop: 180,
  },
  header: {
    fontFamily: "Alegreya_700Bold",
    fontSize: 34,
    color: "white",
    marginTop: 32,
  },
  desc: {
    fontFamily: "Alegreya_500Medium",
    fontSize: 20,
    color: "white",
    textAlign: "center",
    width: 250,
  },
  button: {
    marginTop: 120,
  },
  paragraph: {
    fontFamily: "Alegreya_500Medium",
    fontSize: 20,
    color: "white",
    marginTop: 18,
  },
  bold: {
    fontFamily: "Alegreya_700Bold",
  },
});
