import React from "react";
import { Text, TextProps } from "react-native";

export default function TextAtom({ style, children, ...props }: TextProps) {
    return <Text style={style} {...props}>{children}</Text>;
}