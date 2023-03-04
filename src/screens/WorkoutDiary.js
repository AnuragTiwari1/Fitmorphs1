import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Header, Icon, Card, Button, Badge, Divider } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import axios from "axios";
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

import Header2 from "../component/Header2";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const WorkoutDiary = () => {
  const [myData, setMyData] = useState([]);

  const navigation = useNavigation();
  const getWorkoutData = () => {
    axios
      .get("https://engistack.com/test_reactapp/workoutcatdata.php")
      .then((json) => setMyData(json.data))
      .finally(() => setIsLoaded(true));
  };

  useEffect(() => getWorkoutData(), []);

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
                  Choose Workout Set
                </Text>
              </View>
              <FlatList
                data={myData}
                renderItem={({ item }) => (
                  <>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("WorkoutSet", {
                          iWorkoutId: item.iWorkoutId,
                          sWorkout: item.sWorkout,
                        })
                      }
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
                                uri: item.sImage,
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
                              {item.sWorkout}
                            </Text>
                          </View>

                          <View style={{ flex: 1 }}>
                            <Icon
                              name="chevron-right"
                              type="materialcommunityicons"
                              color="black"
                              size={20}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <View style={styles.horizontal}>
                      <Divider />
                    </View>
                  </>
                )}
              />
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

export default WorkoutDiary;
