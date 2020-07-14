import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";
import { Feather } from '@expo/vector-icons' //icons
import {LinearGradient} from 'expo-linear-gradient' //gradient
import { StatusBar } from "expo-status-bar"; //statusbar
import {weatherOptions} from './Options'

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

