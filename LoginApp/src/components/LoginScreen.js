import React from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import { Input, Button, Spinner } from './common';
import * as AuthActions from '../actions/AuthActions';

const LoginScreen = props => {
  console.log('this.props:', props);

  const handleOnPress = () => {
    const { account, password } = props;
    props.userLogin({ account, password });
  }

  const renderButton = () => (
    <Button onPress={handleOnPress}
      style={{ marginBottom: 20 }}
    >
      <Text style={{ fontSize: 15, textAlign: 'center', color: '#fff' }}>Login</Text>
    </Button>
  );

  const renderDisabledButton = () => (
    <Button
      style={{ marginBottom: 20, backgroundColor: 'rgba(0, 137, 209, 0.2)' }}
      disabled
    >
      <Spinner color="#0089d1" />
    </Button>
  );

  return (
    <View style={styles.container}>
      <Image
        style={styles.brand}
        source={{ uri: 'https://facebook.github.io/react-native/img/favicon.png' }}
      />
      <Input
        label="帳號"
        onChangeText={text => props.accountChanged(text)}
        value={props.account}
        editable={!props.loading}
      />
      <Input
        secureTextEntry
        label="密碼"
        onChangeText={text => props.passwordChanged(text)}
        value={props.password}
        editable={!props.loading}
      />
      {props.loading ? renderDisabledButton() : renderButton()}
      <Text style={styles.errorMessage}>{props.error}</Text>
    </View>
  );
}

const styles = {
  container: {
    padding: 16
  },
  brand: {
    width: 64,
    height: 64,
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 50
  },
  errorMessage: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 15
  }
};

const mapStateToProps = ({ auth }) => {
  const { account, password, error, loading } = auth;

  return { account, password, error, loading };
};

export default connect(mapStateToProps, AuthActions)(LoginScreen);
