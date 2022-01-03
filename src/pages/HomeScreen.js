import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import CustomStatusBar from "../components/CustomStatusBar";
import CategoryCard from "../components/CategoryCard";
import VideoCard from "../components/VideoCard";

function HomeScreen() {
  const categories = ["Calm", "Relax", "Focus", "Anxious"];
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <View style={styles.textContainer}>
        <Text style={styles.welcomeBackText}>Welcome back, Cengo!</Text>
        <Text style={styles.howAreYouText}>How are you feeling today?</Text>
      </View>
      <View style={styles.categoriesRow}>
        {categories.map((cat, index) => {
          return <CategoryCard title={cat} index={index} />;
        })}
      </View>
      <VideoCard
        title={"Meditation 101"}
        subtitle={"Techniques, Benefits, and a Beginner’s How-To"}
        index={0}
      />
      <VideoCard
        title={"Cardio Meditation"}
        subtitle={"Basics of Yoga for Beginners or Experienced Professionals"}
        index={1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#253334",
  },
  categoriesRow: {
    width: Dimensions.get("window").width,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 27,
  },
  textContainer: {
    width: Dimensions.get("window").width,
    marginLeft: 60,
  },
  welcomeBackText: {
    fontFamily: "Alegreya_500Medium",
    fontWeight: "500",
    fontStyle: "normal",
    fontSize: 30,
    lineHeight: 41,
    color: "white",
    marginTop: 30,
  },
  howAreYouText: {
    fontFamily: "Alegreya_400Regular",
    fontSize: 22,
    color: "#FFFFFFB3",
    marginTop: 4,
    marginBottom: 15,
  },
});

export default HomeScreen;
