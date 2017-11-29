import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const Spinner = ({ Size, color }) => (
  <View>
    <ActivityIndicator Size={Size || 'large'} color={color || '#fff'} />
  </View>
);

export default Spinner;
