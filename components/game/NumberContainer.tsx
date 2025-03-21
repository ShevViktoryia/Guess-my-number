import Colors from "@/util/colors";
import { Text, View, StyleSheet } from "react-native";

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

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.primaryColor,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.primaryColor,
    fontSize: 36,
    fontWeight: "bold",
    fontFamily: "space-mono",
  },
});
