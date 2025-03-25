import Colors from "@/util/colors";
import { Text, View, StyleSheet } from "react-native";

interface GuessLogItemProps {
  roundNumber: number;
  guess: number;
}

export default function GuessLogItem({
  roundNumber,
  guess,
}: GuessLogItemProps) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primaryColor,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.pinkColor,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "space-mono",
  },
});
