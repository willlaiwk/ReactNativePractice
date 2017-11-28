import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ onPress, children }) => (
  <TouchableOpacity onPress={onPress}>
    <Text>
      {children}
    </Text>
  </TouchableOpacity>
);

export default Button;
