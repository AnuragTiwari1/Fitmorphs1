import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

//import screens
import Home1 from '../screens/Home1';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import Responsive from '../screens/Responsive';

const BottomNavigator = () => {
  return (
    <Tab.Navigator    

    >
    <Tab.Screen name="Home1" component={Home1}  
      options={{headerShown: false,
      tabBarIcon: () => <BottomIconsContainer name="home" />                                             
    }
    }/>

    <Tab.Screen name="Settings" component={Settings} 
    options={{
      tabBarIcon: () => <BottomIconsContainer name="settings" />                                             
    }}/>

    <Tab.Screen name="Profile" component={Profile} 
    options={{
      tabBarIcon: () => <BottomIconsContainer name="person" />                                             
    }
    
    }/>

    <Tab.Screen name="Responsive" component={Responsive} 
    options={{
      tabBarIcon: () => <BottomIconsContainer name="eye" />                                             
    }}/>

    
  </Tab.Navigator>
  );
}

const BottomIconsContainer = (props) => {
            return <Ionicons
                   name={props.name} 
                    size={24} 
                    // color="#02C38E" 
                    />
}


const styles = StyleSheet.create({})

export default BottomNavigator

