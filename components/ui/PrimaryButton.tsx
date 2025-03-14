import { View, StyleSheet, Text } from "react-native";

interface PrimaryButtonProps {
  children: string;
}

export default function PrimaryButton({ children }: PrimaryButtonProps) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
