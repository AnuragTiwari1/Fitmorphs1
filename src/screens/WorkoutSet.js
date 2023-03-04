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

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header2 from "../component/Header2";

const Stack = createNativeStackNavigator();

const WorkoutSet = ({ route }) => {
  const { sWorkout } = route.params;
  const { iWorkoutId } = route.params;
  const [myData, setMyData] = useState([]);
  const [user, setUser] = useState({});

  const navigation = useNavigation();
  const getWorkoutData = () => {
    axios
      .get("https://engistack.com/test_reactapp/workoutset.php", {
        params: {
          iUserId: user.uid,
          iWorkoutId: iWorkoutId,
        },
      })
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
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 16, marginStart: 20, marginTop: 20 }}>
              Workouts Included
              {iWorkoutId}
            </Text>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <Button
                title="Add Workout +"
                buttonStyle={{
                  backgroundColor: "white",
                  borderWidth: 2,
                  borderColor: "black",
                  borderRadius: 5,
                }}
                type="outline"
                titleStyle={{ color: "black", fontSize: 12 }}
                containerStyle={{
                  width: 140,
                  marginEnd: 20,
                  marginTop: 5,
                }}
                onPress={() =>
                  navigation.navigate("WorkoutAdd", {
                    iWorkoutId: iWorkoutId,
                  })
                }
              />
            </View>
          </View>

          <FlatList
            data={myData}
            renderItem={({ item }) => (
              <>
                <Card
                  containerStyle={{
                    borderRadius: 5,
                    marginBottom: 1,
                  }}
                >
                  <View>
                    <View
                      style={{ display: "flex", flexDirection: "row" }}
                    ></View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginVertical: 5,
                      }}
                    >
                      <View
                        style={{
                          flex: 2,
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Avatar
                          size={50}
                          source={{
                            uri: "http://fitmorphs.com/peaker/en/FitMorphs_Logo-1.png",
                          }}
                          title="FM"
                          containerStyle={{
                            backgroundColor: "white",
                            height: 60,
                          }}
                        />
                        <View>
                          <View
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <Text
                              style={{
                                fontSize: 16,
                                marginLeft: 20,
                                marginRight: 10,
                                fontWeight: "400",
                                marginBottom: 10,
                              }}
                            >
                              {item.sWorkoutSetName}
                            </Text>
                            <Icon
                              name="line-chart"
                              type="font-awesome"
                              color="green"
                              size={12}
                              onPress={() => console.log("hello")}
                            />
                          </View>

                          <View
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "center",
                              marginLeft: 10,
                            }}
                          >
                            <View>
                              <Badge
                                value={sWorkout}
                                status="grey5"
                                textStyle={{
                                  fontWeight: "400",
                                  fontSize: 12,
                                  color: "black",
                                }}
                                badgeStyle={{
                                  borderRadius: 5,
                                }}
                                containerStyle={{
                                  marginHorizontal: 10,
                                }}
                              />

                              {/* <Text
                                style={{
                                  fontSize: 12,
                                  marginLeft: 20,
                                  marginRight: 10,
                                  fontWeight: "bold",
                                  marginBottom: 10,
                                  marginVertical: 10,
                                  color: "black",
                                }}
                              >
                                1 SET
                              </Text> */}
                            </View>

                            <View>
                              <Button
                                title="View"
                                buttonStyle={{
                                  backgroundColor: "white",
                                  borderWidth: 1,
                                  borderColor: "#F6BB0A",
                                  borderRadius: 5,
                                  padding: 2,
                                }}
                                type="outline"
                                titleStyle={{ color: "black", fontSize: 10 }}
                                containerStyle={{
                                  width: 50,
                                  marginLeft: 30,
                                }}
                                onPress={() =>
                                  navigation.navigate("WorkoutSetView", {
                                    iWorkoutId: iWorkoutId,
                                    iWorkoutSetId: item.iWorkoutSetId,
                                    sWorkoutSetName: item.sWorkoutSetName,
                                  })
                                }
                              />

                              <Text
                                style={{
                                  fontSize: 12,
                                  marginVertical: 5,
                                  marginLeft: 35,
                                  marginRight: 10,
                                  fontWeight: "800",

                                  color: "green",
                                }}
                              >
                                + 55%
                              </Text>
                            </View>
                            <View>
                              <Button
                                title="Add Set +"
                                buttonStyle={{
                                  backgroundColor: "white",
                                  borderWidth: 1,
                                  borderColor: "#F6BB0A",
                                  borderRadius: 5,
                                  padding: 2,
                                }}
                                type="outline"
                                titleStyle={{ color: "black", fontSize: 10 }}
                                containerStyle={{
                                  width: 80,
                                  marginLeft: 30,
                                }}
                                onPress={() =>
                                  navigation.navigate("WorkoutAdd1", {
                                    iWorkoutId: item.iWorkoutId,
                                    iWorkoutSetId: item.iWorkoutSetId,
                                    sWorkoutSetName: item.sWorkoutSetName,
                                  })
                                }
                              />
                              <Text
                                style={{
                                  fontSize: 12,
                                  marginVertical: 5,
                                  marginLeft: 20,
                                  marginRight: 10,
                                  fontWeight: "400",
                                  marginBottom: 10,
                                  color: "black",
                                }}
                              >
                                Last: 22 Jan
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </Card>
              </>
            )}
          />
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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

export default WorkoutSet;
