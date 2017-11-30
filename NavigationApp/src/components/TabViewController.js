import React, { Component } from 'react';
import { View, Text, Button, BackHandler } from 'react-native';
import { Actions } from 'react-native-router-flux';

class TabViewController extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => this.backAndroid()) // Listen for the hardware back button on Android to be pressed
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', () => this.backAndroid()) // Remove listener
  }

  backAndroid = () => {
    Actions.home() // Return to previous screen
    return true // Needed so BackHandler knows that you are overriding the default action and that it should not close the app
  }

  render() {
    return (
      <View style={{ padding: 16 }}>
        {this.props.children}
      </View>
    );
  }
}

export default TabViewController;
