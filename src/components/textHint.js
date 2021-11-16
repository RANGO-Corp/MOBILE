import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';

export default function TextHint({
  style, onPress, text, textStyle,
}) {
  return (
        <TouchableOpacity onPress={onPress} style={style}>
            <Text style={[styles.textStyle, textStyle]}>{text}</Text>
        </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    color: '#FF9900',
  },

});
