import { StyleSheet, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>();

  const pickedNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
  };

  let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler} />;
  if (userNumber) screen = <GameScreen />;

  return <View style={styles.rootScreen}>{screen}</View>;
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: "#9B4F0F",
    flex: 1,
  },
});
