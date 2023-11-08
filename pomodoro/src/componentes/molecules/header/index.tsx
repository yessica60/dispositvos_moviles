import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import TextAtom from "../../atoms/text";

interface HeaderProps {
  currentTime: number;
  setCurrentTime: (index: number) => void;
  setTime: (time: number) => void;
}

const options = ["Pomodoro", "Short Break", "Long Break"];

export default function Header({ currentTime, setCurrentTime, setTime }: HeaderProps) {
  function handlePress(index: number) {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
  }

  return (
    <View style={{ flexDirection: "row" }}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(index)}
          style={[
            styles.itemStyle,
            currentTime !== index && { borderColor: "transparent" },
          ]}
        >
          <TextAtom style={{ fontWeight: "bold" }}>{option}</TextAtom>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  itemStyle: {
    width: "33%",
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 10,
    padding: 5,
    borderColor: "white",
    marginVertical: 20,
  }
});