import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Logo from "../../assets/icons/Logo";
import Button from "../../components/Button";
import Input from "../../components/Input";

const SignIn = ({ navigation }) => {
  const onLogin = () => {
    console.log("on login press");
    navigation.navigate("SignUp");
  };
  return (
    <View>
      <Image
        style={styles.bgImage}
        source={require("../../assets/images/login-bg.png")}
      />
      <View style={styles.container}>
        <Logo width={55} height={60} />
        <Text style={styles.header}>Sign In</Text>
        <Text style={styles.desc}>
          Sign in now to acces your excercises and saved music.
        </Text>
        <Input style={styles.input} placeholder="Email Address" />
        <Input style={styles.input} placeholder="Password" />
        <Text style={styles.forgotPass}>Forgot Password?</Text>
        <Button style={styles.button} text="LOGIN" onPress={onLogin} />
        <Text style={styles.paragraph}>
          Don’t have an account? <Text style={styles.bold}>Sign Up</Text>
        </Text>
      </View>
    </View>
  );
};

export default SignIn;

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
  forgotPass: {
    fontFamily: "Alegreya_400Regular",
    fontSize: 14,
    color: "#BEC2C2",
    textAlign: "right",
    marginTop: 10,
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
