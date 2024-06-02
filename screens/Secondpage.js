import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from "react-native";

// import ByteChefs from "../../../assets/images/ByteChefs.png";

export default class Homepage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>this is another page you can use</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        justifyContent: 'center',
        flex: 1,
    },
});