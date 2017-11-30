import React, { Component } from 'react';
import { Text, Animated, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Launch extends Component {
  state = {
    loading: false,
    fadeAnim: new Animated.Value(0),
    marginBottomAnim: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true
      }
    ).start(() => {
      setTimeout(() => {
        Animated.timing(
          this.state.marginBottomAnim,
          {
            toValue: 60,
            duration: 250,
          }
        ).start(() => {
          this.setState({ loading: true }, () => {
            setTimeout(() => {
              Actions.home();
            }, 5000);
          });
        });
      }, 1500);
    });
  }

  render() {
    return (
      <Animated.View
        style={{ ...styles.container, opacity: this.state.fadeAnim }}
      >
        <Animated.View
          style={{ alignItems: 'center', marginBottom: this.state.marginBottomAnim }}
        >
          <Text style={styles.text}>React Native</Text>
          <Text style={styles.text}>Navigation</Text>
        </Animated.View>
        {this.state.loading ? <ActivityIndicator size="large" color="#fff" /> : null}
      </Animated.View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#00d8ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 44
  }
};

export default Launch;
