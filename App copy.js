import { Header } from '@rneui/base';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Home  from './src/screens/Home';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>
            <StatusBar style="auto" />
      <Home />

    </View>


    


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
