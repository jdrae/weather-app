import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from 'react-native';

import Loading from "./js/Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from './js/Weather';

const API_KEY = ""

export default class extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async (latitude, longitude) => {
    const { data: { //check ES6
        main: { temp },
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp // temp: data.main.temp
    }); 
  }
  getLocation = async () => { //'async' needs 'await'
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude } //from json data
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);//stop sending loading screen
    } catch (error) { //If user didn't allow location permision
      Alert.alert("Set on your location permission on this app");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp,condition } = this.state; //should set variable to use
    return isLoading ? (
    <Loading /> 
    ): (
    <Weather temp={temp} condition={condition} />
    );
  }
}
