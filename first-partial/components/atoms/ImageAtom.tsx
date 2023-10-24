import React from "react";
import { Image, View } from "react-native";

type Props = {
  src: string;
};

const ImageAtom = ({ src }: Props) => {
  return (
    <View>
      <Image source={{ uri: src }} className="w-10 h-10 rounded-full" />
    </View>
  );
};

export default ImageAtom;