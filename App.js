import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { initializeApp } from "firebase/app";

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
  const app = initializeApp(firebaseConfig);
  return (
    <View style={styles.container}>
      <Text>Meditation App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
