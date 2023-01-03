import { Header } from "@rneui/base";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

<<<<<<< HEAD
import Splash from "./src/screens/Splash";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import Profile from "./src/screens/Profile";
import BFP from "./src/screens/BFP";
import BMR from "./src/screens/BMR";
import BuyPlan from "./src/screens/BuyPlan";
import CalorieCalculator from "./src/screens/CalorieCalculator";
import Diet from "./src/screens/Diet";
=======
import Login from "./src/screens/Login";
import Profile from "./src/screens/Profile";
>>>>>>> 607e1e34dec4e9b9e88f752d69b2a0f2bb6bae95
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
      <StatusBar backgroundColor="red" />
<<<<<<< HEAD
      <Stack.Navigator initialRouteName={Splash}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
=======
      <Stack.Navigator initialRouteName={screenName}>
>>>>>>> 607e1e34dec4e9b9e88f752d69b2a0f2bb6bae95
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
<<<<<<< HEAD

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

=======
>>>>>>> 607e1e34dec4e9b9e88f752d69b2a0f2bb6bae95
        {/* <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>

     <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
     
     <Stack.Screen name="Home" component={BottomNavigator} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
<<<<<<< HEAD
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
=======
    <View style={{ flex: 1 }}>
>>>>>>> 607e1e34dec4e9b9e88f752d69b2a0f2bb6bae95
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
