import React from 'react';
import { View, Text } from 'react-native';
import TabViewController from '../components/TabViewController';


const TabView1 = () => (
  <TabViewController>
    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>TabView 1</Text>
  </TabViewController>
);

export default TabView1;
