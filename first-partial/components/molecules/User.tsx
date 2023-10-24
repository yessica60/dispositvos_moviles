import React from "react";
import { View } from "react-native";
import TextAtom from "../atoms/Text";
import ImageAtom from "../atoms/ImageAtom";

type Props = {
  src: string;
  username: string;
};

const User = ({ src, username }: Props) => {
  return (
    <View className="flex flex-row item-center space-x-3 mt-5 mx-auto w-11/12">
      <ImageAtom src={src} />
      <TextAtom text={username} />
    </View>
  );
};

export default User;