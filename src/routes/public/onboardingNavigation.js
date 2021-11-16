import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../../screens/user/Login';
import Register from '../../screens/user/Register';

export default function OnboardingNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
