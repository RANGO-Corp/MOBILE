import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';

export default function OnboardingButton({
  fontStyle, style, text, onPress, transparency,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={!style ? [
        styles.containerStyle,
        transparency ? { backgroundColor: 'rgba(255,255,255,0)' } : null] : [style, {
        justifyContent: 'center',
        borderRadius: 6,
        paddingVertical: 3,

      }]}
    >
      <Text style={!fontStyle ? [styles.textStyle] : [fontStyle, { textAlign: 'center' }]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'orange',
    borderWidth: 1,
    borderColor: '#FF9900',
    borderRadius: 6,
    paddingVertical: 3,
    paddingHorizontal: 30,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 15,
    color: '#FF9900',
  },
});
