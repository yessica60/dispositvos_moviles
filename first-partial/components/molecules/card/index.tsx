import React from "react";
import { View } from "react-native";
import TextAtom from "../../atoms/text";

type CardProps = {
  number: string | number;
  text: string;
} & { [key: string]: any };

const Card = ({ number, text, ...other }: CardProps) => {
  return (
    <View
      className="flex justify-center items-center rounded-md w-36 h-36"
      {...other}>
      <View>
        <TextAtom text={number} position="center" />
        <TextAtom text={text} />
      </View>
    </View>
  );
};

export default Card;