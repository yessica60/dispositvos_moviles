import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import SearchBox from "./components/molecules/SearchBox";
import User from "./components/molecules/User";

export default function App() {

  return (
    <SafeAreaView className="container bg-blue-900  flex-1 mx-auto ">
      <SearchBox onSearch={() => {}} />
      <User src="test.png" username="Edwardb11" />

    <View>
      <Text className="text-gray-50 text-center">Hello!</Text>
    </View>
  </SafeAreaView>
  );
}
