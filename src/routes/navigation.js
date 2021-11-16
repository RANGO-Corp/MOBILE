import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import OnboardingNavigation from './public/onboardingNavigation';
import PrivateNavigation from './private/privateNavigation';

export default function Navigation() {
  const isLoggedIn = useSelector((state) => state.authState.isLoggedIn);
  return (
    <NavigationContainer>
      {
  isLoggedIn ? (
    <OnboardingNavigation />
  ) : (
    <PrivateNavigation />
  )
}
    </NavigationContainer>
  );
}
