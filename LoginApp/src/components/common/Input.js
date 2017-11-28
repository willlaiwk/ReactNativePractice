import React from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => (
  <View>
    <Text>{label}</Text>
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      value={value}
    />
  </View>
);

export default Input;
