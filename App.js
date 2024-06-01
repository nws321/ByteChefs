// import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./ByteChefs/app/screens/Login";
import Authenticated from "./ByteChefs/app/screens/Authenticated";
import Map from "./ByteChefs/app/screens/Map";
// import * as Font from 'expo-font';
// import AppLoading from 'expo-app-loading';

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
import { initializeApp } from "@firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "@firebase/auth";

const Stack = createNativeStackNavigator();
const firebaseConfig = {
  apiKey: "AIzaSyCuYdRrWgznVm51pN52vXHc9qOXfZBAM64",
  authDomain: "bytechefs-57e7c.firebaseapp.com",
  projectId: "bytechefs-57e7c",
  storageBucket: "bytechefs-57e7c.appspot.com",
  messagingSenderId: "491892496315",
  appId: "1:491892496315:ios:4642dc60afa7fd45aa169e",
};

const app = initializeApp(firebaseConfig);

export default App = () => {
  const [setFontsLoaded] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null); // Track user authentication state
  const [isLogin, setIsLogin] = useState(true);

  let [fontsLoaded] = useFonts({
    EaseOfUse: require("./assets/fonts/EaseOfUse.ttf"),
    EaseOfUseOutline: require("./assets/fonts/EaseOfUseOutline.ttf"),
    EaseOfUseShadow: require("./assets/fonts/EaseOfUseShadow.ttf"),
  });

  const auth = getAuth(app);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleAuthentication = async () => {
    try {
      if (user) {
        // If user is already authenticated, log out
        console.log("User logged out successfully!");
        await signOut(auth);
      } else {
        // Sign in or sign up
        if (isLogin) {
          // Sign in
          await signInWithEmailAndPassword(auth, email, password);
          console.log("User signed in successfully!");
        } else {
          // Sign up
          await createUserWithEmailAndPassword(auth, email, password);
          console.log("User created successfully!");
        }
      }
    } catch (error) {
      console.error("Authentication error:", error.message);
    }
  };

  return (
    <NavigationContainer>
      <ScrollView contentContainerStyle={styles.container}>
        {user ? (
          // Show user's email if user is authenticated
          <Authenticated
            user={user}
            handleAuthentication={handleAuthentication}
          />
        ) : (
          // Show sign-in or sign-up form if user is not authenticated
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            isLogin={isLogin}
            r
            setIsLogin={setIsLogin}
            handleAuthentication={handleAuthentication}
          />
        )}
      </ScrollView>
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Authenticated} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator> */}
    </NavigationContainer>
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
