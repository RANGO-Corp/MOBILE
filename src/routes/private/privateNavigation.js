import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from '../../screens/user/Profile';
import { DonateStack } from './stackNavigate';

const Tab = createBottomTabNavigator();

export default function PrivateNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        backgroundColor: '#e38800',
        paddingBottom: 3,

      },
      headerShown: false,
      headerTintColor: 'black',
      headerTitleContainerStyle: {
        color: 'black',
        textAlign: 'left',
        alignItems: 'flex-start',
      },
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: '#995e05',
    }}
    >
      <Tab.Screen
        name="Donates"
        component={DonateStack}
        options={
          {
            title: 'Doações',
            tabBarIcon: ({ size, focused }) => (
              <MaterialCommunityIcons
                name="heart-multiple-outline"
                color={focused ? 'white' : '#995e05'}
                size={size}
              />
            ),
          }
        }
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={
        {
          title: 'Perfil',
          tabBarIcon: ({ size, focused }) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={focused ? 'white' : '#995e05'}
              size={size}
            />
          ),
        }
      }
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 50,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    marginTop: -10,
  },
});
