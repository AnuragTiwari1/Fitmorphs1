import { Header } from "@rneui/base";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AppIntro from "./src/screens/AppIntro";
import Splash from "./src/screens/Splash";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import Profile from "./src/screens/Profile";
import BFP from "./src/screens/BFP";
import BMR from "./src/screens/BMR";
import BuyPlan from "./src/screens/BuyPlan";
import CalorieCalculator from "./src/screens/CalorieCalculator";
import Diet from "./src/screens/Diet";
import BottomNavigator from "./src/BottomNavigator/BottomNavigator";

export default function App() {
  const Stack = createNativeStackNavigator();

  const [screenName, setScreenName] = useState();

  useEffect(() => {
    setTimeout(async () => {
      // navigation.dispatch(StackActions.replace('Login'));
      const isUserLogin = await AsyncStorage.getItem("isUserLogin"); // Taken from Login file after User is Successfully Login
      console.log(isUserLogin);

      if (isUserLogin) {
        setScreenName("BottomNavigator");
      } else {
        setScreenName("Login");
      }
    }, 4000);
  }, []);

  return screenName ? (
    <NavigationContainer>
      {/* <StatusBar backgroundColor="#febe29" /> */}
      <Stack.Navigator initialRouteName={Splash}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AppIntro"
          component={AppIntro}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="Profile" component={Profile} /> */}
        <Stack.Screen
          name="BottomNavigator"
          component={BottomNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="BuyPlan"
          component={BuyPlan}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />

        {/* <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>

     <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
     
     <Stack.Screen name="Home" component={BottomNavigator} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={"large"} color={"red"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
