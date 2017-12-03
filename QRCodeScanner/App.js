
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  NavigatorIOS,
  TouchableOpacity,
  Linking,
  Dimensions,
  StatusBar
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

export default class App extends Component {
  onSuccess(e) {
    // Linking.openURL(e.data).catch(err => console.error('An error occured', err));
    alert(e.data);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
        />
        <View style={{ justifyContent: 'center', backgroundColor: '#0089d1', paddingTop: 20, height: 64 }}>
          <Text style={{ fontSize: 18, textAlign: 'center', color: '#fff' }}>QRCode Scanner Demo</Text>
        </View>
        <QRCodeScanner
          onRead={this.onSuccess.bind(this)}
          cameraStyle={{ height: Dimensions.get('window').height - 64, backgroundColor: 'rgba(0,0,0,0.5)' }}
          reactivate
          reactivateTimeout={2000}
          showMarker
          customMarker={
            <View style={styles.rectangleContainer}>
              <View style={styles.rectangle} />
            </View>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },

  textBold: {
    fontWeight: '500',
    color: '#000',
  },

  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },

  buttonTouchable: {
    padding: 16,
  },
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  rectangle: {
    height: 200,
    width: 200,
    borderWidth: 2,
    borderColor: '#00FF00',
    // borderColor: 'red',
    backgroundColor: 'transparent',
  },
});
