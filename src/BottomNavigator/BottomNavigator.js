import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

//import screens
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import GetCoach from "../screens/GetCoach";
import Responsive from "../screens/Responsive";

const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => <BottomIconsContainer name="home" />,
        }}
      />

      <Tab.Screen
        name="Get A Coach"
        component={GetCoach}
        options={{
          headerShown: false,
          tabBarIcon: () => <BottomIconsContainer name="happy" />,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: () => <BottomIconsContainer name="person" />,
        }}
      />

      <Tab.Screen
        name="Responsive"
        component={Responsive}
        options={{
          tabBarIcon: () => <BottomIconsContainer name="settings" />,
        }}
      />
    </Tab.Navigator>
  );
};

const BottomIconsContainer = (props) => {
  return (
    <Ionicons
      name={props.name}
      size={24}
      // color="#02C38E"
    />
  );
};

const styles = StyleSheet.create({});

export default BottomNavigator;
