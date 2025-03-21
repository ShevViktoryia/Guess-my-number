import Colors from "@/util/colors";
import { Text, StyleSheet, TextStyle } from "react-native";

type InstructionTextProps = {
  children: string;
  style?: TextStyle;
};

export default function InstructionText({
  children,
  style,
}: InstructionTextProps) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.blueColor,
    fontSize: 25,
    fontFamily: "space-mono",
  },
});
