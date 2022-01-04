import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const SoundListItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Image style={styles.icon} source={props.icon} />
        <View>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.listeningCount}>
            {props.listeningCount} Listening
          </Text>
        </View>
      </View>
      <Text style={styles.duration}>{props.duration} Min</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    width: Dimensions.get("window").width - 76,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 20,
  },
  title: {
    fontFamily: "Alegreya_500Medium",
    color: "#FFFFFF",
    fontSize: 20,
  },
  listeningCount: {
    fontFamily: "Alegreya_500Medium",
    color: "#FFFFFFB3",
    fontSize: 12,
  },
  duration: {
    fontFamily: "Alegreya_500Medium",
    color: "#FFFFFFB3",
    fontSize: 15,
  },
});
export default SoundListItem;
