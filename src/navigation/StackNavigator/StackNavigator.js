<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens import
import DrawerNavigator from "../DrawerNavigator/DrawerNavigator";
import SplashScreen from "../../screens/SplashScreen";
import LoginScreen from "../../screens/Login";
import SignupScreen from "../../screens/Signup";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 4000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*  */}
        {showSplashScreen ? (
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
        ) : null}

        {/*  */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          //   options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          //   options={{headerShown: false}}
        />
        {/*  */}
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
=======
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const StackNavigator = () => {
  return (
    <View>
      <Text>StackNavigator</Text>
    </View>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
>>>>>>> 607e1e34dec4e9b9e88f752d69b2a0f2bb6bae95
