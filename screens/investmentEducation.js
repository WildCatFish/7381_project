import React from "react";
import {
  Image, StyleSheet, Text, View, Button, TouchableOpacity, ColorPropType, ScrollView,
  SafeAreaView, TouchableWithoutFeedback, } from "react-native";
import { render } from "react-dom";
import { createAppContainer } from 'react-navigation'


class InvestmentEducation extends React.Component {
    render() {
        return (
        <SafeAreaView style={{flex: 1,}}>
            <ScrollView>
                <View style={styles.video_play}>
                    <Text>Video!</Text>
                </View>
                <View style={styles.courese_list}>
                    <Text>Course List</Text>
                </View>
                <View style={styles.courese_list}>
                    <Text>Course List</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    video_play: {
        fontSize: 100,
        flex: 1,
    },
    courese_list: {
        fontSize: 100,
        flex: 1,
        backgroundColor: "red"
    },
})
export default InvestmentEducation;