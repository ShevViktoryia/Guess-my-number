import Title from "@/components/ui/Title";
import Colors from "@/util/colors";
import { Image, Text, View, StyleSheet } from "react-native";

type Props = {};

export default function GameOverScreen({}: Props) {
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
        <Text>Summary</Text>
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
});
