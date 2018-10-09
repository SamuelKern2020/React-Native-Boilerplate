import React from 'react';
import { createDrawerNavigator, createSwitchNavigator, createStackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2

import HomeContainer from './components/container/logged-in/HomeContainer'
import SettingsContainer from './components/container/logged-in/SettingsContainer'
import TestModal from './components/container/logged-in/TestModal'

import AuthLoadingScreen from './components/container/AuthLoadingScreen'

import Login from './components/container/logged-out/Login'



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


// Seperates modals from the rest of the app. List all modals below AppContainer
const AppStack = createStackNavigator(
  {
    RootDrawer: { screen: RootDrawer}, //this container is the only one that is not a modal
    TestModal: { screen: TestModal },
  },
  {
    mode: 'modal', // This is how you define modal behavior
    headerMode: 'none',
  }
)

// All screens for which user is NOT logged in
const AuthStack = createStackNavigator(
  {
    Login: { screen: Login },
  },
  {
    initialRouteName: 'Login',
  }
)


/* We use a SwitchNavigator to completely seperate the sign-on flow screens
(when a user is NOT logged in) from the rest of the app (when user is logged in)
The AuthNavigation screen is the very first to load. It determines if the user is
logged in, and navigates to either the AuthStack (not logged in) or the GodStack (logged in)
*/
const AuthNavigation = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);


export default AuthNavigation
