import React from 'react';
import { TouchableOpacity, Text, Platform } from 'react-native';

const Button = ({ onPress, children, disabled, style }) => (
  <TouchableOpacity
    style={style ? { ...styles.button, ...style } : styles.button}
    onPress={onPress}
    disabled={disabled}
  >
    {children}
  </TouchableOpacity>
);

const styles = {
  button: {
    backgroundColor: '#0089d1',
    borderRadius: 2,
    padding: 16,
    // ...Platform.select({
    //   ios: {
    //     shadowRadius: 2,
    //     shadowColor: 'rgba(0, 0, 0, 1)',
    //     shadowOpacity: 0.54,
    //     shadowOffset: { width: 0, height: 2 },
    //   },
    //   android: {
    //     elevation: 2,
    //   },
    // }),
  }
};

export default Button;
