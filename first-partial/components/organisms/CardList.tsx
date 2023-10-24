import React from 'react';
import { View } from 'react-native';
import { Data } from '../../App';
import Card from '../molecules/Card';

type CardListProps = {
  data: Data;
};

const CardList = ({ data }: CardListProps) => {
  return (
    <View className="flex flex-row gap-5 flex-wrap my-5 mx-auto">
      <Card text="Public repos" number={data.public_repos} className="bg-blue-500" />
      <Card text="Followers" number={data.followers} className="bg-green-500" />
      <Card text="Following" number={data.following} className="bg-orange-500" />
    </View>
  );
}

export default CardList;