import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MapView } from 'expo';
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2


export default class HomeContainer extends React.Component {
  render() {
    return (

      <View style={styles.container}>
          <MapView
           style={{ flex: 1 }}
           initialRegion={{
             latitude: 37.78825,
             longitude: -122.4324,
             latitudeDelta: 0.0922,
             longitudeDelta: 0.0421,
           }}
          />

          <View style={styles.navBar}>

          <TouchableOpacity
          onPress={() => this.props.navigation.toggleDrawer()}>
            <Ionicons
              name={'ios-menu'}
              size={26}
              style={{ color: 'white', marginLeft: 14 }}
            />
          </TouchableOpacity>





          </View>
      </View>




    );
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    position: "absolute",
    top: 20,
    left: 0,
    right: 0,
    height: 50,
    // backgroundColor: 'red',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
