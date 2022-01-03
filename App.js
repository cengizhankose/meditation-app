import AppLoading from "expo-app-loading";

import {
  useFonts,
  Alegreya_400Regular,
  Alegreya_500Medium,
  Alegreya_600SemiBold,
  Alegreya_700Bold,
  Alegreya_800ExtraBold,
  Alegreya_900Black,
} from "@expo-google-fonts/alegreya";

import Router from "./src/Router";

export default function App() {
  let [fontsLoaded] = useFonts({
    Alegreya_400Regular,
    Alegreya_500Medium,
    Alegreya_600SemiBold,
    Alegreya_700Bold,
    Alegreya_800ExtraBold,
    Alegreya_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <Router />
      </>
    );
  }
}
