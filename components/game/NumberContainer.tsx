import Colors from "@/util/colors";
import { Text, View, StyleSheet, Dimensions } from "react-native";

interface NumberContainerProps {
  children: number;
}

export default function NumberContainer({ children }: NumberContainerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.primaryColor,
    padding: deviceWidth < 450 ? 12 : 24,
    margin: deviceWidth < 450 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.primaryColor,
    fontSize: deviceWidth < 450 ? 28 : 36,
    fontWeight: "bold",
    fontFamily: "space-mono",
  },
});
