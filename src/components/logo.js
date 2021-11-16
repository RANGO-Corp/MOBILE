import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Qwigley_400Regular } from '@expo-google-fonts/qwigley';
import AppLoading from 'expo-app-loading';

export default function Logo({ style }) {
  const [fontsLoaded] = useFonts({
    Qwigley_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View>
      <Text style={[styles.textLogo, style]}>Alere</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textLogo: {
    fontFamily: 'Qwigley_400Regular',
    fontSize: 96,
    color: '#FF9900',
    textAlign: 'center',
  },

});
