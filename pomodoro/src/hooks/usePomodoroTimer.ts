import { useEffect, useState } from "react";
import { Audio } from "expo-av";

type CurrentTime = "POMO" | "SHORT" | "BREAK";

export function usePomodoroTimer() {
  const [isWorking, setIsWorking] = useState<boolean>(true);
  const [time, setTime] = useState<number>(60 * 25);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<CurrentTime>("POMO");
  const currentTimeAsNumber = currentTime === "POMO" ? 0 : currentTime === "SHORT" ? 1 : 2;

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
  const handleSetTime = (newTime: number) => {
    setTime(newTime);
  };
  return {
    isWorking,
    time,
    isActive,
    setCurrentTime,
    handleStartStop,
    handleSetTime,
    currentTimeAsNumber
  };
}