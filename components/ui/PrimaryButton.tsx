import Colors from "@/util/colors";
import { View, StyleSheet, Text, Pressable } from "react-native";

interface PrimaryButtonProps {
  children: string;
  onPress: () => void;
}

export default function PrimaryButton({
  children,
  onPress,
}: PrimaryButtonProps) {
  const pressHandler = () => {
    onPress();
  };
  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.btnInnerContainer, styles.pressed]
            : styles.btnInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: Colors.lightBlue }}
      >
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btnOuterContainer: {
    borderRadius: 10,
    margin: 4,
    overflow: "hidden",
  },
  btnInnerContainer: {
    backgroundColor: Colors.blueColor,
    paddingVertical: 8,
    paddingHorizontal: 15,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  btnText: {
    color: Colors.primaryColor,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
