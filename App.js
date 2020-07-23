import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from 'react-native';

import Loading from "./js/Loading";
import * as Location from "expo-location";
import Weather from './js/Weather';


export default class extends React.Component {
  state = {
    isLoading: true
  };

  getLocation = async () => { //'async' needs 'await'
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude } //from json data
      } = await Location.getCurrentPositionAsync();
      this.setState({
        isLoading: false,
        lat: latitude,
        long: longitude
      });//stop sending loading screen
    } catch (error) { //If user didn't allow location permision
      Alert.alert("Set on your location permission on this app");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, lat, long } = this.state; //should set variable to use
    return isLoading ? (
    <Loading /> 
    ): (
    <Weather lat={lat} long={long} />
    );
  }
}
