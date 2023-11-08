import React from "react";
import { View, SafeAreaView, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { usePomodoroTimer } from "../../hooks/usePomodoroTimer";
import TextAtom from "../atoms/text";
import Header from "../molecules/header";
import Timer from "../atoms/timer";


const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];

export default function TimerApp() {
  const { handleSetTime, time, isActive,setCurrentTime, handleStartStop,currentTimeAsNumber } = usePomodoroTimer();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors[currentTimeAsNumber] }]}>
      <View style={{ flex: 1, paddingHorizontal: 15, paddingTop: Platform.OS === "android" ? 30 : 0 }}>
        <TextAtom style={{ fontSize: 32, fontWeight: "bold", color: "#000000" }}>Pomodoro</TextAtom>
        <Header
          currentTime={currentTimeAsNumber}
          setCurrentTime={(index: number) => {
            const newTime = index === 0 ? "POMO" : index === 1 ? "SHORT" : "BREAK";
            setCurrentTime(newTime);
          }}
          setTime={handleSetTime}
        />
        <Timer time={time} />
        <TouchableOpacity style={styles.button} onPress={handleStartStop}>
          <TextAtom style={{ color: "white", fontWeight: "bold" }}>
            {isActive ? "STOP" : "START"}
          </TextAtom>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#333333",
    padding: 15,
    borderRadius: 15,
    marginTop: 15,
  },
});