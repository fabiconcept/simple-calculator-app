import { useContext, useState } from "react";
import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";
import { TextStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import { AppContext } from "../(tabs)";

interface ButtonProps {
  value: string;
  style?: ViewStyle;
  flex?: number;
  textStyle?: TextStyle;
}

export default function Button({ value, style, flex = 1, textStyle = {} }: ButtonProps) {
  const [isPressed, setIsPressed] = useState(false);
  const { setScreen, screen, setError, setEquation } = useContext(AppContext);

  const isNumber = (str: string) => /^\d+$/.test(str);
  const lastChar = () => screen.slice(-1);
  const isLastCharNumber = () => isNumber(lastChar());
  
  const handleSumbit = () => {
    if (!isLastCharNumber() && lastChar() !== ')') return;
    
    try {
      const result = eval(screen);
      const prevScreen = screen;
      setEquation(String(prevScreen));
      setScreen(String(result));
    } catch (error) {
      setError("Invalid Equation!");
    }
  };

  const handleZero = () => {
    if (lastChar() === "0" && screen.length < 2) return;
    setScreen(`${screen}0`);
  };

  const handleParenthesis = () => {
    if (lastChar() !== "(" && !isLastCharNumber()) {
      setScreen(`${screen}(`);
    }
  };

  const handleKeyPress = () => {
    setError("");
    
    switch (value) {
      case "<":
        setScreen(screen.slice(0, -1));
        break;
      case "=":
        handleSumbit();
        break;
      case "0":
        handleZero();
        break;
      case "(":
        handleParenthesis();
        break;
      default:
        if (screen === "0" && isNumber(value)) {
          setScreen(value);
        } else if (!isNumber(value) && !isLastCharNumber()) {
          return;
        } else {
          setScreen(`${screen}${value}`);
        }
    }
  };

  return (
    <Pressable 
      style={[styles.pressable, { flex }]}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={handleKeyPress}
      onLongPress={() => value === "<" && setScreen("")}
    >
      <View style={[styles.button, style, isPressed && styles.pressed]}>
        <Text style={[styles.text, textStyle]}>{value}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    minWidth: 70,
  },
  button: {
    backgroundColor: '#ffffff1a',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#ffffff60",
  },
  pressed: {
    opacity: 0.5,
  },
  text: {
    fontSize: 46,
    color: '#ffffff',
    textAlign: "center",
  }
});