import React from "react";
import { StyleSheet, View, Text } from "react-native";

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

export default class Time extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    render(){
        return(
            <View style={styles.textContainer}>
            <Text style = {styles.datestyle}>
                {this.state.date.getMonth()}월 {this.state.date.getDate()}일 {this.state.date.getHours()}:{this.state.date.getMinutes()}
            </Text>
            </View>
        );
    }

}