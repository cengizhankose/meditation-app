import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import CustomStatusBar from "../../components/CustomStatusBar";
import ToolsCard from "../../components/ToolsCard";

const ToolsScreen = () => {
  const tools = [
    {
      backgroundColor: "#3E8469",
      imageColor: "#2B5B54",
      iconName: "newspaper",
      title: "Mood Journal",
    },
    {
      backgroundColor: "#69B09C",
      imageColor: "#498A78",
      iconName: "rocket",
      title: "Mood Booster",
    },
    {
      backgroundColor: "#6AAE72",
      imageColor: "#3E8469",
      iconName: "ios-headset",
      title: "Positive Notes",
    },
    {
      backgroundColor: "#A9D571",
      imageColor: "#6AAE72",
      iconName: "checkmark-circle",
      title: "Trigger Plan",
    },
    {
      backgroundColor: "#B1B1B1",
      imageColor: "#9A9A9A",
      iconName: "flag",
      title: "Goal Trainer",
    },
  ];
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <View
        style={{
          alignItems: "flex-start",
          width: Dimensions.get("window").width,
          marginLeft: 50,
          marginTop: 40,
        }}
      >
        <Text style={styles.toolsTitle}>Tools</Text>
      </View>
      <View style={styles.toolsRow}>
        {tools.map((tools, index) => {
          return (
            <ToolsCard
              key={index}
              backgroundColor={tools.backgroundColor}
              imageColor={tools.imageColor}
              iconName={tools.iconName}
              title={tools.title}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#253334",
  },
  toolsTitle: {
    fontFamily: "Alegreya_500Medium",
    fontWeight: "500",
    fontSize: 35,
    lineHeight: 47,
    color: "white",
    marginTop: 5,
  },
  toolsRow: {
    width: Dimensions.get("window").width,
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
});

export default ToolsScreen;
