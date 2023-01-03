import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

//import screens
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import GetCoach from "../screens/GetCoach";
import Responsive from "../screens/Responsive";
import Plan from "../screens/Plan";
import Diet from "../screens/Diet";
import BuyPlan from "../screens/BuyPlan";
<<<<<<< HEAD
import BFP from "../screens/BFP";
import Tools from "../screens/Tools";
import Test from "../screens/Test";

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#7F5DF0",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,

        backgroundColor: "black",
      }}
    >
      {children}
      <Text
        style={{
          fontSize: 12,

          textAlign: "center",
          margin: 5,
          color: "white",
        }}
      >
        Plans
      </Text>
    </View>

    {/* <Text style={{ fontSize: 12, fontWeight: "bold" }}>{"\n"}Plans</Text> */}
  </TouchableOpacity>
);

=======
>>>>>>> 607e1e34dec4e9b9e88f752d69b2a0f2bb6bae95
const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 5,
          left: 5,
          right: 5,
          elevation: 0,
          backgroundColor: "white",
          borderRadius: 15,
          height: 90,

          shadowColor: "#7F5DF0",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialCommunityIcons
                name="home-outline"
                size={30}
                color={focused ? "orangered" : "black"}
              />
              <Text
                style={{
                  color: focused ? "orangered" : "black",
                  fontSize: 10,
                  textAlign: "center",
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Get A Coach"
        component={GetCoach}
        options={{
          headerShown: false,
<<<<<<< HEAD
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialCommunityIcons
                name="arm-flex-outline"
                size={30}
                color={focused ? "orangered" : "black"}
                style={{ textAlign: "center" }}
              />
              <Text
                style={{
                  color: focused ? "orangered" : "black",
                  fontSize: 10,
                  textAlign: "justify",
                }}
              >
                Get A Coach
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="My Plan"
        component={Plan}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialCommunityIcons
                name="clipboard-arrow-up"
                size={35}
                color={focused ? "#F6BB0A" : "white"}
                style={{ textAlign: "center" }}
              />
            </View>
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />

      <Tab.Screen
        name="Tools"
        component={Tools}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialCommunityIcons
                name="calculator-variant-outline"
                size={30}
                color={focused ? "orangered" : "black"}
              />
              <Text
                style={{
                  color: focused ? "orangered" : "black",
                  fontSize: 10,
                  textAlign: "center",
                }}
              >
                Tools
              </Text>
            </View>
=======
          tabBarIcon: () => (
            <MaterialCommunityIcons name="dumbbell" size={25} />
>>>>>>> 607e1e34dec4e9b9e88f752d69b2a0f2bb6bae95
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,

<<<<<<< HEAD
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialCommunityIcons
                name="account-circle-outline"
                size={30}
                color={focused ? "orangered" : "black"}
              />
              <Text
                style={{
                  color: focused ? "orangered" : "black",
                  fontSize: 10,
                  textAlign: "center",
                }}
              >
                Profile
              </Text>
            </View>
=======
      <Tab.Screen
        name="My Plan"
        component={Plan}
        options={{
          headerShown: false,
          tabBarIcon: () => <BottomIconsContainer name="eye" />,
        }}
      />

      <Tab.Screen
        name="Diet"
        component={Diet}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons name="food-apple" size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="BuyPlan"
        component={BuyPlan}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons name="food-apple" size={25} />
>>>>>>> 607e1e34dec4e9b9e88f752d69b2a0f2bb6bae95
          ),
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
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default BottomNavigator;
