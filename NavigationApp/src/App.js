import React from 'react';
import { View, Text, Platform } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Launch from './screens/Launch';
import Home from './screens/Home';
import TabView1 from './screens/TabView1';
import TabView2 from './screens/TabView2';
import TabView3 from './screens/TabView3';
import TabView4 from './screens/TabView4';

import TabIcon from './components/TabIcon';

const TabIcon1 = ({ focused }) => <TabIcon focused={focused} icon="\u2302" />;
const TabIcon2 = ({ focused }) => <TabIcon focused={focused} icon="\u266B" />;
const TabIcon3 = ({ focused }) => <TabIcon focused={focused} icon="\u2605" />;
const TabIcon4 = ({ focused }) => <TabIcon focused={focused} icon="\u20BD" />;

const TabViewHideNavbar = Platform.select({
  ios: false,
  android: true
});

const App = () => (
  <Router>
    <Stack>
      <Scene key="launch" component={Launch} title="Launch" hideNavBar />
      <Scene key="home" component={Home} title="Home" hideNavBar initial />
      <Scene
        key="tabbar"
        activeTintColor="red"
        inactiveTintColor="#0089d1"
        tabs
      >
        <Scene key="tab1" component={TabView1} title="Tab1" tabBarLabel="Tab1" icon={TabIcon1} hideNavBar={TabViewHideNavbar} />
        <Scene key="tab2" component={TabView2} title="Tab2" tabBarLabel="Tab2" icon={TabIcon2} hideNavBar={TabViewHideNavbar} />
        <Scene key="tab3" component={TabView3} title="Tab3" tabBarLabel="Tab3" icon={TabIcon3} hideNavBar={TabViewHideNavbar} />
        <Scene key="tab4" component={TabView4} title="Tab4" tabBarLabel="Tab4" icon={TabIcon4} hideNavBar={TabViewHideNavbar} />
      </Scene>
    </Stack>
  </Router>
);


export default App;
