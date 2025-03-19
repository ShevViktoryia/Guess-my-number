import Colors from "@/util/colors";
import { Text, StyleSheet } from "react-native";

type InstructionTextProps = {
  children: string;
};

export default function InstructionText({ children }: InstructionTextProps) {
  return <Text style={styles.instructionText}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.blueColor,
    fontSize: 25,
  },
});
