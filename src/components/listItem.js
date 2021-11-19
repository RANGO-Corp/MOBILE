import React from 'react';
import {
  SafeAreaView, FlatList,
} from 'react-native';
import CardItem from './cardItem';

export default function ListItem({
  navigation, data, style, route,
}) {
  const itemList = ({ item }) => (
    <CardItem
      description={item.description}
      units={item.units}
      tittle={item.tittle}
      creationDate={item.creationDate}
      onPress={() => navigation.navigate('donateDetails', { item })}
    />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={itemList}
        keyExtractor={(item) => item.id.toString()}
        style={style}
      />

    </SafeAreaView>
  );
}
