import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../../screens/user/Profile';
import ListDonates from '../../screens/donate/listDonates';

const Tab = createBottomTabNavigator();

export default function PrivateNavigation() {
  return (
        <Tab.Navigator>
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Donates" component={ListDonates} />
        </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
