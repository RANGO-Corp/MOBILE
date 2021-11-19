import React from 'react';
import {
  StyleSheet, TextInput, View, Text, Keyboard, TouchableWithoutFeedback,
} from 'react-native';

export default function OnboardingInput({
  tittle, value, background, borderRadius, onChangeText, containerStyle, style,
  secureTextEntry, dataDetectorTypes, keyboardType, maxLength, placeholder,

}) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={[styles.container, containerStyle]}>
        <Text style={styles.tittle}>{tittle}</Text>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={[styles.input, style]}
          secureTextEntry={secureTextEntry}
          dataDetectorTypes={dataDetectorTypes}
          keyboardType={keyboardType}
          maxLength={maxLength}
          placeholder={placeholder}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  tittle: {
    textAlign: 'left',
    color: '#F99900',
  },
  input: {
    borderRadius: 6,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    backfaceVisibility: 'hidden',
    borderColor: '#F99900',
    borderWidth: 1,
    height: 25,
    paddingHorizontal: 7,
  },
});
