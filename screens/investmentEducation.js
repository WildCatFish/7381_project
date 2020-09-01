import React from "react";
import {
  Image, StyleSheet, Text, View, Button, TouchableOpacity, ColorPropType, ScrollView,
  SafeAreaView, TouchableWithoutFeedback, } from "react-native";
import { render } from "react-dom";
import { createAppContainer } from 'react-navigation'


class InvestmentEducation extends React.Component {
    render() {
        return (
        <SafeAreaView>
            <ScrollView>
                <Text style={styles.text}>investment education.</Text>
                <Text style={styles.text}>investment education.</Text>
                <Text style={styles.text}>investment education.</Text>
                <Text style={styles.text}>investment education.</Text>
                <Text style={styles.text}>investment education.</Text>
                <Text style={styles.text}>investment education.</Text>
                <Text style={styles.text}>investment education.</Text>
                <Text style={styles.text}>investment education.</Text>
                <Text style={styles.text}>investment education.</Text>
            </ScrollView>
        </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create(
    {
        text: {
            fontSize: 50,
        },
    }
)
export default InvestmentEducation;