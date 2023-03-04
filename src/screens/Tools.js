import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { Header, Icon, Card, Button, Badge, Divider } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome5";

import { useNavigation } from "@react-navigation/native";

import {
  ScaledSheet,
  scale,
  verticalScale,
  moderateScale,
  s,
  vs,
  ms,
  mvs,
  msr,
} from "react-native-size-matters";
import { Avatar } from "@rneui/base";
import Slider1 from "../../assets/img/slider1.png";
import CoachesCard from "./CoachesCard";
import Header2 from "../component/Header2";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BFP from "./BFP";
import BMR from "./BMR";
import CalorieCalculator from "./CalorieCalculator";
import Diet from "./Diet";

const Stack = createNativeStackNavigator();

const ToolStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ToolIndex"
        component={Tools}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen name="Profile" component={Profile} /> */}
      <Stack.Screen
        name="BFP"
        component={BFP}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BMR"
        component={BMR}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CalorieCalculator"
        component={CalorieCalculator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Diet"
        component={Diet}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const Tools = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaProvider style={styles.container}>
      <View
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
        }}
      >
        <ScrollView>
          <Header2 />

          <View style={styles.customInputContainer}>
            <TextInput
              placeholder="Enter Your Email"
              placeholderTextColor={"grey"}
            />
            <TouchableOpacity style={{ marginTop: moderateScale(10) }}>
              <FontAwesome
                name="search"
                size={20}
                style={{ color: "#F6BB0A" }}
              />
            </TouchableOpacity>
          </View>

          <Card containerStyle={{ borderRadius: 10, marginBottom: 200 }}>
            <View>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text
                  style={{
                    textAlign: "left",
                    fontWeight: "400",
                    marginTop: -10,
                    fontSize: 16,
                  }}
                >
                  All Tools
                </Text>
              </View>

              <TouchableOpacity onPress={() => navigation.navigate("BFP")}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginVertical: 25,
                  }}
                >
                  <View
                    style={{
                      flex: 2,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <Avatar
                        size={50}
                        rounded
                        source={{
                          uri: "https://30dayfitness.app/static/f12eb1778140354530c351f36d1ac8d1/a6c62/body-fat-percentage.jpg",
                        }}
                        title="FM"
                        containerStyle={{ backgroundColor: "grey" }}
                      ></Avatar>
                    </View>

                    <View style={{ flex: 5 }}>
                      <Text
                        style={{
                          fontSize: 16,
                          marginLeft: 20,
                          marginRight: 10,
                        }}
                      >
                        Body Fat Percentage (BFP)
                      </Text>
                    </View>

                    <View style={{ flex: 1 }}>
                      <Icon
                        name="chevron-right"
                        type="font-awesome"
                        color="black"
                        size={14}
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>

              <View style={styles.horizontal}>
                <Divider />
              </View>
              <TouchableOpacity onPress={() => navigation.navigate("BMR")}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginVertical: 25,
                  }}
                >
                  <View
                    style={{
                      flex: 2,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <Avatar
                        size={50}
                        rounded
                        source={{
                          uri: "https://cdn.squats.in/kc_articles/1657112348137faa76260473e7ad6.png",
                        }}
                        title="FM"
                        containerStyle={{ backgroundColor: "grey" }}
                      ></Avatar>
                    </View>

                    <View style={{ flex: 5 }}>
                      <Text
                        style={{
                          fontSize: 16,
                          marginLeft: 20,
                          marginRight: 10,
                        }}
                      >
                        Basal Metabolic Rater (BMR)
                      </Text>
                    </View>

                    <View style={{ flex: 1 }}>
                      <Icon
                        name="chevron-right"
                        type="font-awesome"
                        color="black"
                        size={14}
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={styles.horizontal}>
                <Divider />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("CalorieCalculator")}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginVertical: 25,
                  }}
                >
                  <View
                    style={{
                      flex: 2,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <Avatar
                        size={50}
                        rounded
                        source={{
                          uri: "https://cdn-icons-png.flaticon.com/512/3632/3632468.png",
                        }}
                        title="FM"
                        containerStyle={{ backgroundColor: "grey" }}
                      ></Avatar>
                    </View>

                    <View style={{ flex: 5 }}>
                      <Text
                        style={{
                          fontSize: 16,
                          marginLeft: 20,
                          marginRight: 10,
                        }}
                      >
                        Calorie Calculator
                      </Text>
                    </View>

                    <View style={{ flex: 1 }}>
                      <Icon
                        name="chevron-right"
                        type="font-awesome"
                        color="black"
                        size={14}
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={styles.horizontal}>
                <Divider />
              </View>

              <TouchableOpacity>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginVertical: 25,
                  }}
                >
                  <View
                    style={{
                      flex: 2,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <Avatar
                        size={50}
                        rounded
                        source={{
                          uri: "https://play-lh.googleusercontent.com/UkHN5hq2od9kSFntcNQMkkWWkD6pac3rsmZ4jN_BZ4CwezENHTVV-JUK-lKBFQey2Q=w600-h300-pc0xffffff-pd",
                        }}
                        title="FM"
                        containerStyle={{ backgroundColor: "grey" }}
                      ></Avatar>
                    </View>

                    <View style={{ flex: 5 }}>
                      <Text
                        style={{
                          fontSize: 16,
                          marginLeft: 20,
                          marginRight: 10,
                        }}
                      >
                        Macro Calculator
                      </Text>
                    </View>

                    <View style={{ flex: 1 }}>
                      <Icon
                        name="chevron-right"
                        type="font-awesome"
                        color="black"
                        size={14}
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={styles.horizontal}>
                <Divider />
              </View>

              <TouchableOpacity onPress={() => navigation.navigate("Diet")}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginVertical: 25,
                  }}
                >
                  <View
                    style={{
                      flex: 2,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <Avatar
                        size={50}
                        rounded
                        source={{
                          uri: "https://i.pinimg.com/originals/22/fb/56/22fb56c0dc3497d7fa80dd0122d6f94e.png",
                        }}
                        title="FM"
                        containerStyle={{ backgroundColor: "grey" }}
                      ></Avatar>
                    </View>

                    <View style={{ flex: 5 }}>
                      <Text
                        style={{
                          fontSize: 16,
                          marginLeft: 20,
                          marginRight: 10,
                        }}
                      >
                        Diet Plan
                      </Text>
                    </View>

                    <View style={{ flex: 1 }}>
                      <Icon
                        name="chevron-right"
                        type="font-awesome"
                        color="black"
                        size={14}
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </Card>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6fbf6",
  },

  customInputContainer: {
    marginHorizontal: "10@msr",
    borderWidth: "1@s",
    borderColor: "#F6BB0A",
    height: "45@vs",
    backgroundColor: "#fff",
    paddingHorizontal: "15@msr",
    paddingVertical: "0@msr",
    borderRadius: "10@s",
    marginBottom: "1@msr",
    marginTop: "10@msr",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  vertical: {
    marginBottom: 10,

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  horizontal: {
    marginBottom: 10,
  },
  coachnameh3: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ToolStack;
