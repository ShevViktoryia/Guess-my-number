import Colors from "@/util/colors";
import { Text, StyleSheet } from "react-native";

interface TitleProps {
  children: string;
}

export default function Title({ children }: TitleProps) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "space-mono",
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.pinkColor,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.pinkColor,
    padding: 12,
  },
});
