import React, { Component } from 'react'
import { Button, Text, ToastAndroid, View } from 'react-native'
// import Geolocation from '@react-native-community/geolocation';
// import Geocoder from "react-native-geocoder"
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAdress: '',
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    }
  }
//   componentDidMount() {
//     this.get_Lat_Long()
//   }
//   get_Lat_Long = () => {
//     Geolocation.getCurrentPosition((response) => {
//       // console.log(response)
//       this.setState({
//         region: {
//           latitude: response.coords.latitude,
//           longitude: response.coords.longitude,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         },
//       })
//       const NY = { lat: response.coords.latitude, lng: response.coords.longitude }

//       Geocoder.geocodePosition(NY).then((response) => {
//         // console.log(response)
//         this.setState({ currentAdress: response[0].formattedAddress })
//         ToastAndroid.show(JSON.stringify(this.state.currentAdress), ToastAndroid.SHORT)
//         console.log(this.state.currentAdress)
//       })
//         .catch(err => console.log(err))

//     });

//   }

//   onMarkerDragEndViewAdress =  (coords) => {
//     const lat = coords.lat;
//     const lng = coords.lng;
//    console.log(coords)
//   }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={this.state.region}
        ><Marker
            draggable
            coordinate={{ latitude: this.state.region.latitude, longitude: this.state.region.longitude }}
            // onDragEnd={(coords)=> this.onMarkerDragEndViewAdress(coords)}
          /></MapView>

      </View>
    )
  }
}
