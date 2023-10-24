import React from "react";
import { Text } from "react-native";

type TextAtomProps = {
  text: string | number | undefined;
  position?: "left" | "center" | "right";
};

const TextAtom = ({ text, position = "left" }: TextAtomProps) => {
  const textStyle = {
    textAlign: position,
  };

  return (
    <Text style={textStyle} className="text-gray-50 mx-2 text-lg font-semibold">
      {text}
    </Text>
  );
};

export default TextAtom;