import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import { MapView } from 'expo';
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2

export default class HomeContainer extends React.Component {

  constructor(props) {
    super(props)

    this.mapRef = null;


    const initialRegion = {
      latitude: 18.796099,
      longitude: 98.98979,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }

    this.state = {
      region: initialRegion,
      markers: markers,
      followsUserLocation: true
    };

  }

  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }

  componentDidMount() {
     this.mapRef.fitToSuppliedMarkers(
       markers,
       false, // not animated
     );
   }

  onRegionChange(region) {
    this.setState({ region });
  }


  render() {
    return (
      <View style={styles.container}>
          <MapView
           ref={(map) => { this.mapRef = map }}
           style={{ flex: 1 }}
           initialRegion={this.state.region}
           onRegionChange={this.onRegionChange.bind(this)}
           showsUserLocation={true}
           followsUserLocation={this.state.followsUserLocation}
           onMapReady={() => this.setState({followsUserLocation: false})}
           showsMyLocationButton={true}
           showsCompass={true}
           >

           { /*render markers*/ }

           {this.state.markers.map((marker, index) => {
            return (
              <MapView.Marker key={index} coordinate={marker.coordinate}>
                <Animated.View style={[styles.markerWrap]}>
                  <Animated.View style={[styles.ring]} />
                  <View style={styles.marker} />
                </Animated.View>
              </MapView.Marker>
            );
          })}
          </MapView>

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
  },


  // Marker styles
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },

});


const markers = [
      {
        coordinate: {
          latitude: 18.7958,
          longitude: 98.9866615,
        },
        title: "Best Place",
        description: "This is the best place in Portland",
      },
      {
        coordinate: {
          latitude: 18.79231,
          longitude: 98.9877,
        },
        title: "Second Best Place",
        description: "This is the second best place in Portland",
      },
      {
        coordinate: {
          latitude: 18.79133,
          longitude: 98.98979,
        },
        title: "Third Best Place",
        description: "This is the third best place in Portland",
      },
      {
        coordinate: {
          latitude: 18.794099,
          longitude: 98.9979,
        },
        title: "Fourth Best Place",
        description: "This is the fourth best place in Portland",
      },
    ]
