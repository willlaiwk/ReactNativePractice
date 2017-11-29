import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';

const RouterComponent = () => (
  <Router>
    <Stack>
      <Scene
        key="login"
        component={LoginScreen}
        hideNavBar
      />
      <Scene hideNavBar>
        <Scene
          key="home"
          component={HomeScreen}
          title="home"
        />
      </Scene>
    </Stack>
  </Router>
);

export default RouterComponent;
