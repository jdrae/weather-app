import React from "react";
import { StyleSheet, View, Text } from "react-native";

let date = new Date();

export default function Time(){
    return (
        <View style={styles.textContainer}>
            <Text style = {styles.datestyle}>{date.getMonth()}월 {date.getDate()}일 {date.getHours()}:{date.getMinutes()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    datestyle:{
        color:"white",
        fontSize: 23
    },
    textContainer:{
        alignItems: "flex-start",
        justifyContent: "center",
        paddingHorizontal: 40,
        flex: 1
    }
})