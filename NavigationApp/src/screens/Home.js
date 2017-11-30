import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from '../components/common';

const Home = () => (
  <View style={styles.container}>
    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Navgation Demo</Text>
    <Button
      onPress={() => Actions.tabbar()}
    >
      <Text style={styles.buttonText}>TabView</Text>
    </Button>
  </View>
);

const styles = {
  container: {
    padding: 16
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16
  }
};

export default Home;
