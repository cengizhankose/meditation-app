import { StatusBar } from "expo-status-bar";
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

const firebaseConfig = {
  apiKey: "AIzaSyCgkag3WWCA_S4X8iF-ZNgjhVKZv-cDK1M",
  authDomain: "meditation-app-9925c.firebaseapp.com",
  projectId: "meditation-app-9925c",
  storageBucket: "meditation-app-9925c.appspot.com",
  messagingSenderId: "128123729819",
  appId: "1:128123729819:web:4c8d0c193bf03b8a23933e",
  measurementId: "G-HCWV8F5W8P",
};

export default function App() {
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
        {/* App Component Goes Here */}
        <SignUpScreen />
        {/* App Component Goes Here */}

        <StatusBar style="hidden" />
      </>
    );
  }
}
