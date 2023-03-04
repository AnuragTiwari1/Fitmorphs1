import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, StackActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(async () => {
      // navigation.dispatch(StackActions.replace('Login'));
      const isUserLogin = await AsyncStorage.getItem("isUserLogin"); // Taken from Login file after User is Successfully Login
      console.log(isUserLogin);

      if (isUserLogin) {
        navigation.dispatch(StackActions.replace("BottomNavigator"));
      } else {
        navigation.dispatch(StackActions.replace("AppIntro"));
      }
    }, 4000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F6BB0A",
      }}
    >
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#F6BB0A"
      />
      {/* <Image
        source={require("../../assets/img/icon1.png")}
        style={{ width: 50, height: 50 }}
      /> */}
      <Image
        source={{
          uri: "https://www.fitmorphs.com/en/FitMorphs_Logo-1.png",
        }}
        style={{ width: 300, height: 350 }}
      />
      {/* <Text
        style={{
          fontSize: 30,
          color: "white",
        }}
      >
        FITMORPHS
      </Text> */}
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
