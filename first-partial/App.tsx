import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import SearchBox from "./components/molecules/SearchBox";
import CardList from "./components/organisms/CardList";
import User from "./components/molecules/User";

export default function App() {
  const data = {
    public_repos: 1,
    followers: 1,
    following: 1,
  };
  return (
    <SafeAreaView className="container bg-blue-900  flex-1 mx-auto ">
      <SearchBox onSearch={() => {}} />
            <User src="test.png" username="Edwardb11" />
      <CardList data={data} />
      <View>
        <Text className="text-gray-50 text-center">Hello!</Text>
      </View>
    </SafeAreaView>
  );
}
