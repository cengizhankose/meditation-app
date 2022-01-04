import React from "react";
import { View, Text } from "react-native";
import SoundCard from "../../components/SoundCard";
import CustomStatusBar from "../../components/CustomStatusBar";
import SoundListItem from "../../components/SoundListItem";
import { clearWarnings } from "react-native/Libraries/LogBox/Data/LogBoxData";

function SoundsScreen({ navigation }) {
  const soundCategories = [
    {
      icon: require("../../assets/images/sound-ic-1.png"),
      title: "Painting Forest",
      listeningCount: "59899",
      duration: "20",
    },
    {
      icon: require("../../assets/images/sound-ic-2.png"),
      title: "Mountaineers",
      listeningCount: "45697",
      duration: "15",
    },
    {
      icon: require("../../assets/images/sound-ic-3.png"),
      title: "Lovely Deserts",
      listeningCount: "9428",
      duration: "39",
    },
    {
      icon: require("../../assets/images/sound-ic-4.png"),
      title: "The Hill Sides",
      listeningCount: "52599",
      duration: "50",
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#253334",
      }}
    >
      <CustomStatusBar />
      <SoundCard
        style={{
          marginBottom: 20,
          marginTop: 34,
        }}
        title={"Relax Sounds"}
        subtitle={"Sometimes the most productive thing you can do is relax."}
        index={0}
      />
      {soundCategories.map((sound, index) => {
        return (
          <SoundListItem
            key={index}
            icon={sound.icon}
            title={sound.title}
            listeningCount={sound.listeningCount}
            duration={sound.duration}
            onPress={(index) => {
              navigation.navigate("NowPlaying", { data: sound });
            }}
          />
        );
      })}
    </View>
  );
}

export default SoundsScreen;
