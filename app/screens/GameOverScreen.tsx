import PrimaryButton from "@/components/ui/PrimaryButton";
import Title from "@/components/ui/Title";
import Colors from "@/util/colors";
import { Image, Text, View, StyleSheet } from "react-native";

interface GameOverScreenProps {
  roundsNumber: number;
  userNumber: number;
  onStartNewGame: () => void;
}

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}: GameOverScreenProps) {
  return (
    <View style={styles.screenContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/success.png")}
        />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    borderRadius: 200,
    width: 400,
    height: 400,
    borderWidth: 3,
    borderColor: Colors.primaryColor,
    overflow: "hidden",
    margin: 35,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "space-mono",
    fontSize: 25,
    textAlign: "center",
    marginBottom: 25,
  },
  highlight: {
    color: Colors.primaryColor,
  },
});
