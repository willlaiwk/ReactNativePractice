import React from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, editable }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      value={value}
      editable={editable}
    />
  </View>
);

const styles = {
  container: {
    marginBottom: 15
  },
  label: {
    fontSize: 16,
    color: '#777'
  },
  input: {
    fontSize: 14,
    color: '#333'
  }
};

export default Input;
