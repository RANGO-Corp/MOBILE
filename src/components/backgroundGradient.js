import React from 'react';
import {
  SafeAreaView, StyleSheet, Text, View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function BackgroundGradient({
  children, colors, style, start, end, locations,
}) {
  return (
        <LinearGradient colors={colors} style={style}
        start={start}
        locations={locations}
        end={end}>
            {children}
        </LinearGradient>
  );
}
