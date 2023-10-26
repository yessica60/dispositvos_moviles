import React, { useState } from "react";
import { View } from "react-native";
import Button from "../../atoms/buttons";
import TextInputAtom from "../../atoms/text-input";

type Props = {
  onSearch: Function;
};

const SearchBox = ({ onSearch }: Props) => {
  const [username, setUsername] = useState<string>("");

  const handleSearch = () => {
    onSearch(username);
  };

  return (
    <View className="flex flex-row items-center space-x-4 mx-auto mt-5">
      <TextInputAtom
        placeholder="Enter your username here..."
        onChangeText={(text: string) => setUsername(text)}
      />
      <Button text="Search" onPress={handleSearch} />
    </View>
  );
};

export default SearchBox;