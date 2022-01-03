import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Logo from "../../assets/icons/Logo";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Onboarding = () => {
  const onLogin = () => {
    console.log("on register press");
  };
  return (
    <View>
      <Image
        style={styles.bgImage}
        source={require("../../assets/images/login-bg.png")}
      />
      <View style={styles.container}>
        <Logo width={55} height={60} />
        <Text style={styles.header}>Sign Up</Text>
        <Text style={styles.desc}>
          Sign up now for free and start meditating, and explore Medic.
        </Text>
        <Input style={styles.input} placeholder="Name" />
        <Input style={styles.input} placeholder="Email Address" />
        <Input style={styles.input} placeholder="Password" />
        <Button style={styles.button} text="SIGNUP" onPress={onLogin} />
        <Text style={styles.paragraph}>
          Already have an account? <Text style={styles.bold}>Sign In</Text>
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
    paddingHorizontal: 27,
    marginTop: 101,
  },
  header: {
    fontFamily: "Alegreya_500Medium",
    fontSize: 32,
    color: "white",
    marginTop: 30,
  },
  desc: {
    fontFamily: "Alegreya_400Regular",
    fontSize: 22,
    color: "#FFFFFFB3",
    marginTop: 4,
    marginBottom: 15,
  },
  input: {
    marginTop: 40,
  },
  button: {
    fontFamily: "system font",
    marginTop: 30,
  },
  paragraph: {
    fontFamily: "Alegreya_400Regular",
    fontSize: 20,
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 20,
  },
  bold: {
    fontFamily: "Alegreya_700Bold",
  },
});
