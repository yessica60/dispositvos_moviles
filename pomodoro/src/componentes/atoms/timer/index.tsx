import React from "react";
import { TextStyle, View, ViewStyle } from "react-native";
import TextAtom from "../text";

interface TimerProps {
  time: number;
}

export default function Timer({ time }: TimerProps) {
  const formattedTime = `${Math.floor(time / 60)
    .toString()
    .padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`;
  return (
    <View style={styles.container}>
      <TextAtom style={styles.time}>{formattedTime}</TextAtom>
    </View>
  );
}

const styles = {
    container: {
        flex: 0.3,
        justifyContent: "center" as ViewStyle["justifyContent"],
        backgroundColor: "#F2F2F2",
        padding: 15,
        borderRadius: 15,
    },
    time: {
        textAlign: "center" as TextStyle["textAlign"],
        fontSize: 80,
        fontWeight: "bold" as TextStyle["fontWeight"],
        color: "#333333",
    },
};