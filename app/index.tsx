import { SafeAreaView, StyleSheet, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "@/util/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [fontsLoaded] = useFonts({
    "space-mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!fontsLoaded) return <AppLoading />;

  const pickedNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler} />;
  if (userNumber)
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  if (gameIsOver && userNumber) screen = <GameOverScreen />;

  return <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>;
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: Colors.lightBlue,
    flex: 1,
  },
});
