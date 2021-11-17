import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ListDonates from '../../screens/donate/listDonates';
import NewDonate from '../../screens/donate/newDonate';
import Donate from '../../screens/donate/donate';

const Stack = createStackNavigator();

export function DonateStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="donateList" component={ListDonates} options={{ headerShown: false }} />
      <Stack.Screen name="donateDetails" component={Donate} options={{ headerShown: false }} />
      <Stack.Screen name="donateCreate" component={NewDonate} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
