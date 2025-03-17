import { SafeAreaView, StyleSheet, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "@/util/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>();

  const pickedNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
  };

  let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler} />;
  if (userNumber) screen = <GameScreen userNumber={userNumber} />;

  return <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>;
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: Colors.lightBlue,
    flex: 1,
  },
});
