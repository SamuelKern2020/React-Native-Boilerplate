import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2


export default class AuthLoadingScreen extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {

    setTimeout(() => {
      this.props.navigation.navigate('Auth');
    }, 1000);


  }

  render() {
    return (
      <View style={styles.container}>
        <Text>The LOADING screen </Text>
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
