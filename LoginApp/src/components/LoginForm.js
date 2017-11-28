import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import { Input, Button } from './common';

const LoginForm = () => (
  <View>
    <Image
      style={{ width: 50, height: 50 }}
      source={{ uri: 'https://facebook.github.io/react-native/img/favicon.png' }}
    />
    <Input
      label="Account"
    />
    <Input
      secureTextEntry={true}
      label="Password"
    />
    <Button>Login</Button>
  </View>
);

export default LoginForm;
