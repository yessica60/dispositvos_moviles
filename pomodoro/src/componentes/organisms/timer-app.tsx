import React, { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { Audio } from "expo-av";
import Timer from "../atoms/timer";
import TextAtom from "../atoms/text";
import Header from "../molecules/header";

const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];

type CurrentTime = "POMO" | "SHORT" | "BREAK";

export default function TimerApp() {
  const [isWorking, setIsWorking] = useState<boolean>(true);
  const [time, setTime] = useState<number>(60 * 25);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<CurrentTime>("POMO");
  const currentTimeAsNumber =
    currentTime === "POMO" ? 0 : currentTime === "SHORT" ? 1 : 2;

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      if (interval) clearInterval(interval);
    }

    if (time === 0) {
      setIsActive(false);
      setIsWorking((prevIsWorking) => !prevIsWorking);
      setTime(isWorking ? 300 : 1500);
      setCurrentTime(isWorking ? "SHORT" : "POMO");
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, time, isWorking]);

  const handleStartStop = () => {
    playSound();
    setIsActive((prevIsActive) => !prevIsActive);
  };

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/click.mp3")
    );
    await sound.playAsync();
  }

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: colors[colors.indexOf(currentTime)] },
      ]}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
          paddingTop: Platform.OS === "android" ? 30 : 0,
        }}>
        <TextAtom
          style={{ fontSize: 32, fontWeight: "bold", color: colors[0] }}>
          Pomodoro
        </TextAtom>
        <Header
          currentTime={currentTimeAsNumber}
          setCurrentTime={(index: number) => {
            const newTime =
              index === 0 ? "POMO" : index === 1 ? "SHORT" : "BREAK";
            setCurrentTime(newTime);
          }}
          setTime={setTime}
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
