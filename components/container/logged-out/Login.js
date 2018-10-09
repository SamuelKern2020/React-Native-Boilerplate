import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
  Notifications,
} from 'expo';

// This refers to the function defined earlier in this guide
import { registerForPushNotificationsAsync } from '../../../utils/pushNotifications';


export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notification: {},
    }
  }

  componentDidMount() {
    registerForPushNotificationsAsync()

    // Handle notifications that are received or selected while the app
      // is open. If the app was closed and then opened by tapping the
      // notification (rather than just tapping the app icon to open it),
      // this function will fire on the next tick after the app starts
      // with the notification data.

  this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = (notification) => {
   this.setState({notification: notification});
 };


render() {
    return (
      <View style={styles.container}>
        <Text>LOG IN</Text>
        <Text>Origin: {this.state.notification.origin}</Text>
        <Text>Data: {JSON.stringify(this.state.notification.data)}</Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
