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
} from "react-native";
import ByteChefs from "../../../assets/images/ByteChefs.png";
import { useNavigation } from "@react-navigation/native";

const Authenticated = ({ user, handleAuthentication }) => {
  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.emailText}>{user.email}</Text>
      <Button title="Logout" onPress={handleAuthentication} color="#e74c3c" />
      {/* <Button
        title="Map"
        onPress={() => navigation.navigate("Map")}
        color="#e74c3c"
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#215e75",
  },
  authContainer: {
    width: "80%",
    maxWidth: 400,
    backgroundColor: "#215e75",
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
    fontFamily: "EaseOfUse",
    color: "#fcd157",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    left: 45,
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
    color: "#ffffff",
  },
  buttonContainer: {
    marginBottom: 0,
  },
  toggleText: {
    color: "#3498db",
    textAlign: "center",
  },
  bottomContainer: {
    marginTop: 16,
  },
  emailText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
});
export default Authenticated;
