import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";

// Screens
import OnboardingScreen from "./pages/Onboarding";
import SignInScreen from "./pages/Auth/SignIn";
import SignUpScreen from "./pages/Auth/SignUp";

import ProfileScreen from "./pages/BottomTabScreens/ProfileScreen";
import SoundsScreen from "./pages/BottomTabScreens/SoundsScreen";
import HomeScreen from "./pages/BottomTabScreens/HomeScreen";

//Components
import MyTabBar from "./components/CustomTabBar";

//Navigators
const BottomTab = createBottomTabNavigator();
const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

const Router = (props) => {
  const navigation = useNavigationContainerRef();

  const AuthStackScreens = (params) => {
    return (
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="Onboarding" component={OnboardingScreen} />
        <AuthStack.Screen name="SignIn" component={SignInScreen} />
        <AuthStack.Screen name="SignUp" component={SignUpScreen} />
      </AuthStack.Navigator>
    );
  };

  const BottomTabScreens = (params) => {
    return (
      <BottomTab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <MyTabBar {...props} />}
      >
        <BottomTab.Screen name="Home" component={HomeScreen} />
        <BottomTab.Screen name="Sounds" component={SoundsScreen} />
        <BottomTab.Screen name="Profile" component={ProfileScreen} />
      </BottomTab.Navigator>
    );
  };

  return (
    <NavigationContainer ref={navigation}>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Auth" component={AuthStackScreens} />
        <AppStack.Screen name="BottomTabScreens" component={BottomTabScreens} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
