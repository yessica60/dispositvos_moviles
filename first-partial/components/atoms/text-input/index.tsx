import React, { useState } from 'react';
import { TextInput } from 'react-native';

type Props = {
  placeholder: string;
  onChangeText: (text: string) => void;
}

const TextInputAtom= ({ placeholder, onChangeText }: Props) => {
  const [text, setText] = useState("");

  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={(newText) => {
        setText(newText);
        onChangeText(newText);
      }}
      value={text}
      className="border p-2 mx-4 w-2/3 border-gray-100 rounded text-gray-100 focus:border-2 focus:border-purple-500"
      placeholderTextColor="#ffffff"
    />
  );
}

export default TextInputAtom;