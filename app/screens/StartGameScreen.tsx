import Card from "@/components/ui/Card";
import InstructionText from "@/components/ui/InstructionText";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Title from "@/components/ui/Title";
import Colors from "@/util/colors";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  useWindowDimensions,
  KeyboardAvoidingView,
} from "react-native";

interface StartGameScreenProps {
  onConfirmNumber: (n: number) => void;
}

export default function StartGameScreen({
  onConfirmNumber,
}: StartGameScreenProps) {
  const [enteredNumber, setEnteredNumber] = useState<string>("");

  const { width, height } = useWindowDimensions();

  const numberInputHandler = (enteredText: string) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onConfirmNumber(chosenNumber);
  };

  const marginTop = height < 400 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.screenContainer, { marginTop: marginTop }]}>
          <Title>Guess my number</Title>
          <Card>
            <InstructionText>Enter a number</InstructionText>
            <TextInput
              style={styles.textInputContainer}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={enteredNumber}
              onChangeText={numberInputHandler}
            />
            <View style={styles.btnsContainer}>
              <View style={styles.btnContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.btnContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

// const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    // marginTop: deviceHeight < 400 ? 30 : 100,
    alignItems: "center",
  },
  screen: {
    flex: 1,
  },
  textInputContainer: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 28,
    borderBottomColor: Colors.pinkColor,
    borderBottomWidth: 2,
    color: Colors.pinkColor,
    marginVertical: 10,
    fontWeight: "bold",
  },
  btnsContainer: {
    flexDirection: "row",
  },
  btnContainer: {
    flex: 1,
  },
});
