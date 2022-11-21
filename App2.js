import { Header } from '@rneui/base';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserData  from './src/screens/UserData';
import Home  from './src/screens/Home';

import BottomNavigator from './src/BottomNavigator/BottomNavigator';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
   
   
    <NavigationContainer>
       <StatusBar  backgroundColor = "red" />
      <Stack.Navigator >
      {/* <Stack.Screen name="BottomNavigator" component={BottomNavigator} options={{headerShown: false}}/> */}
        <Stack.Screen name="UserData" component={UserData} options={{headerShown: false}}/>

        {/* <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/> */}
        
        <Stack.Screen name="Home" component={BottomNavigator} />
        
      </Stack.Navigator>
    </NavigationContainer>


    


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
