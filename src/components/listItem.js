import React from 'react';
import {
  StyleSheet, Text, SafeAreaView, FlatList,
} from 'react-native';
import CardItem from './cardItem';

export default function ListItem({ route, navigation, data }) {
  const itemList = ({ item, index }) => (
    <CardItem />
  );

  return (
    <SafeAreaView>
      {/* <FlatList /> */}

      <CardItem navigation onPress={() => navigation.navigate('donateDetails')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
