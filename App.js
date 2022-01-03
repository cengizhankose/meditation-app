import { StyleSheet, Text, View } from "react-native";
import { initializeApp } from "firebase/app";
import AppLoading from "expo-app-loading";

//Screens
import OnboardingScreen from "./src/pages/Onboarding";
import SignInScreen from "./src/pages/Auth/SignIn";
import SignUpScreen from "./src/pages/Auth/SignUp";

import {
  useFonts,
  Alegreya_400Regular,
  Alegreya_500Medium,
  Alegreya_600SemiBold,
  Alegreya_700Bold,
  Alegreya_800ExtraBold,
  Alegreya_900Black,
} from "@expo-google-fonts/alegreya";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyTabBar from "./src/components/CustomTabBar";
import { useNavigationContainerRef } from "@react-navigation/native";
import HomeScreen from "./src/components/HomeScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyCgkag3WWCA_S4X8iF-ZNgjhVKZv-cDK1M",
  authDomain: "meditation-app-9925c.firebaseapp.com",
  projectId: "meditation-app-9925c",
  storageBucket: "meditation-app-9925c.appspot.com",
  messagingSenderId: "128123729819",
  appId: "1:128123729819:web:4c8d0c193bf03b8a23933e",
  measurementId: "G-HCWV8F5W8P",
};

function ProfileScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#253334",
      }}
    >
      <Text>Profile!</Text>
    </View>
  );
}
function SoundsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#253334",
      }}
    >
      <Text>Sounds!</Text>
    </View>
  );
}
export default function App() {
  const navigation = useNavigationContainerRef();

  let [fontsLoaded] = useFonts({
    Alegreya_400Regular,
    Alegreya_500Medium,
    Alegreya_600SemiBold,
    Alegreya_700Bold,
    Alegreya_800ExtraBold,
    Alegreya_900Black,
  });

  const app = initializeApp(firebaseConfig);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <NavigationContainer ref={navigation}>
          <Tab.Navigator
            screenOptions={{ headerShown: false }}
            tabBar={(props) => <MyTabBar {...props} />}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Sounds" component={ProfileScreen} />
            <Tab.Screen name="Profile" component={SoundsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
