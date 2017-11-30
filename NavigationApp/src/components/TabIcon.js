import React from 'react';
import { Text } from 'react-native';

const TabIcon = ({ focused, icon }) => {
  const iconText = String.fromCharCode(parseInt(icon.replace(/\\u+/g, ''), 16));
  return (
    <Text style={{
      color: focused ? 'red' : '#0089d1',
      fontSize: 24
    }}>
      {iconText}
    </Text>
  );
}

export default TabIcon;
