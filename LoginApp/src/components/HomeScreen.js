import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Button } from './common';

const HomeScreen = () => (
  <View style={{ padding: 20 }}>
    <Text>Home</Text>
    <Button
      onPress={() => { Actions.login() }}
    >
      <Text style={{ color: '#fff', textAlign: 'center' }}>Logout</Text>
    </Button>
  </View>
);

export default HomeScreen;
