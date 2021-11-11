import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../../screens/user/Login';
import Register from '../../screens/user/Register';

export default function OnboardingNavigation() {
  const Stack = createStackNavigator();

  return (
      <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
