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
  const [guessRounds, setGuessRounds] = useState<number>(0);

  if (!fontsLoaded) return <AppLoading />;

  const pickedNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = (numberOfRounds: number) => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  };

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler} />;
  if (userNumber)
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  if (gameIsOver && userNumber)
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );

  return <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>;
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: Colors.lightBlue,
    flex: 1,
  },
});
