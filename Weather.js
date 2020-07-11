import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";
import { Feather } from '@expo/vector-icons' //icons
import {LinearGradient} from 'expo-linear-gradient' //gradient
import { StatusBar } from "expo-status-bar"; //statusbar

const weatherOptions = {
    Thunderstorm: {
      iconName: "cloud-lightning",
      gradient: ["#373B44", "#4286f4"],
      title: "Thunderstorm in the house",
      subtitle: ""
    },
    Drizzle: {
      iconName: "cloud-drizzle",
      gradient: ["#89F7FE", "#66A6FF"],
      title: "Drizzle",
      subtitle: ""
    },
    Rain: {
      iconName: "cloud-rain",
      gradient: ["#00C6FB", "#005BEA"],
      title: "Raining",
      subtitle: ""
    },
    Snow: {
      iconName: "cloud-snow",
      gradient: ["#7DE2FC", "#B9B6E5"],
      title: "Cold",
      subtitle: ""
    },
    Clear: {
      iconName: "sun",
      gradient: ["#FF7300", "#FEF253"],
      title: "Sunny",
      subtitle: ""
    },
    Clouds: {
      iconName: "cloud",
      gradient: ["#D7D2CC", "#304352"],
      title: "구름 낀 하늘",
      subtitle: "짙은 회색에 차분해지는 듯 해요."
    },
    Mist: {
      iconName: "cloud-drizzle",
      gradient: ["#4DA0B0", "#D39D38"],
      title: "Mist!",
      subtitle: ""
    },
    Dust: {
      iconName: "cloud-drizzle",
      gradient: ["#4DA0B0", "#D39D38"],
      title: "Dusty",
      subtitle: ""
    },
    Haze: {
      iconName: "cloud-drizzle",
      gradient: ["#4DA0B0", "#D39D38"],
      title: "Haze",
      subtitle: ""
    }
  };
  


export default function Weather({ temp, condition }) { //{temp}
    return (
        <LinearGradient 
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <Feather name={weatherOptions[condition].iconName} style={styles.icon}/>
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.textContainer}> 
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
            
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstom",
        "Drizzle",
        "Rain",
        "Snow",
        "Clear",
        "Clouds",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Dust",
        "Ash",
        "Squall",
        "Tornado"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp:{
        fontSize: 36,
        color: "white"
    },
    icon:{
        fontSize: 92,
        color: "white"
    },
    title:{
        color:"white",
        fontSize: 32,
        fontWeight: "300",
        marginBottom: 20,
    },
    subtitle:{
        color:"white",
        fontSize: 20,
    },
    textContainer: {
        alignItems: "flex-start",
        justifyContent: "center",
        paddingHorizontal: 40,
        flex: 1
      }
})

