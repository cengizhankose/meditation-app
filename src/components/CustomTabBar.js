import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ifIphoneX } from "react-native-iphone-x-helper";

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#253334",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            key={index}
          >
            {index === 0 ? (
              <Image
                style={{ marginBottom: 20 }}
                source={require(`../../assets/Home.png`)}
              />
            ) : index === 1 ? (
              <Image
                style={{ marginBottom: 20 }}
                source={require(`../../assets/Profile.png`)}
              />
            ) : index === 2 ? (
              <Image
                style={{ marginBottom: 20 }}
                source={require(`../../assets/Sounds.png`)}
              />
            ) : (
              <></>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default MyTabBar;
