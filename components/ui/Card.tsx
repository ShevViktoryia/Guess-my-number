import Colors from "@/util/colors";
import { ReactNode } from "react";
import { View, StyleSheet, Dimensions } from "react-native";

type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  return <View style={styles.card}></View>;
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginTop: deviceWidth < 450 ? 18 : 35,
    marginHorizontal: 25,
    backgroundColor: Colors.primaryColor,
    borderRadius: 8,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
});
