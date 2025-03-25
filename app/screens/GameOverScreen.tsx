import PrimaryButton from "@/components/ui/PrimaryButton";
import Title from "@/components/ui/Title";
import Colors from "@/util/colors";
import {
  Image,
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";

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
  const { width, height } = useWindowDimensions();
  let imgSize = 300;

  if (width < 380) {
    imgSize = 150;
  }

  if (height < 400) {
    imgSize = 80;
  }

  const imgStyle = {
    width: imgSize,
    height: imgSize,
    borderRadius: imgSize / 2,
  };
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.screenContainer}>
        <Title>Game Over!</Title>
        <View style={styles.imageContainer}>
          <Image
            style={[styles.image, imgStyle]}
            source={require("../../assets/images/success.png")}
          />
        </View>
        <View>
          <Text style={styles.summaryText}>
            Your phone needed{" "}
            <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess
            the number <Text style={styles.highlight}>{userNumber}</Text>
          </Text>
          <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
        </View>
      </View>
    </ScrollView>
  );
}

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
    padding: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    // borderRadius: deviceWidth < 450 ? 75 : 150,
    // width: deviceWidth < 450 ? 150 : 300,
    // height: deviceWidth < 450 ? 150 : 300,
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
