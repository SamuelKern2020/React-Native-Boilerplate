import React from 'react';
import { createDrawerNavigator } from 'react-navigation'; // 1.0.0-beta.14
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2

import HomeContainer from './components/container/HomeContainer'
import SettingsContainer from './components/container/SettingsContainer'


const RootDrawer = createDrawerNavigator({
  Home: {
    screen: HomeContainer,
    navigationOptions: {
      drawerLabel: 'Cash Finder',
      drawerIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },

  Settings: {
    screen: SettingsContainer,
    navigationOptions: {
      drawerLabel: 'Settings',
      drawerIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
});


export default RootDrawer
