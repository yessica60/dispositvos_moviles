import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

type Props = {
  text: string;
    onPress: () => void;
};

const Button = ({ text, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        className={
          text === "Search"
            ? "bg-sky-600 px-4 py-2 rounded"
            : "bg-blue-500 px-4 py-2 rounded"
        }>
        <Text className="text-gray-50">{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;