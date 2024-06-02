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
import { useNavigation } from "@react-navigation/native";

export default class Homepage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Welcome this is the testing homepage for now</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        flex: 1,
    },
});