import Colors from "@/util/colors";
import { Text, StyleSheet, Platform } from "react-native";

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
    // borderWidth: Platform.OS==='android' ? 2 : 0,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    padding: 12,
    borderColor: Colors.pinkColor,
    maxWidth: "80%",
    width: 300,
  },
});
