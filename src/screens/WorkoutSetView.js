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
import Moment from "moment";
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

const WorkoutSetView = ({ route }) => {
  const { sWorkout } = route.params;
  const { iWorkoutId } = route.params;
  const { iWorkoutSetId } = route.params;
  const { sWorkoutSetName } = route.params;
  const [myData, setMyData] = useState([]);
  const [user, setUser] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);

  const doYourTask = () => {
    setIsDisabled(true);
  };

  const navigation = useNavigation();
  const getWorkoutData = () => {
    axios
      .get("https://engistack.com/test_reactapp/workoutset1.php", {
        params: {
          iUserId: user.uid,
          iWorkoutId: iWorkoutId,
          iWorkoutSetId: iWorkoutSetId,
          sWorkoutSetName: sWorkoutSetName,
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
              Workout Sets
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
            renderItem={({ item }) => {
              Moment.locale("en");
              var dt = item.sDate;

              return (
                <Card
                  containerStyle={{
                    borderRadius: 5,
                    marginBottom: 1,
                  }}
                >
                  <View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        marginTop: -10,
                      }}
                    >
                      <Text style={{ fontSize: 10 }}>
                        {" "}
                        {Moment(dt).format("Do MMM YYYY")}
                      </Text>
                    </View>
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
                              <Button
                                title="Set No."
                                onPress={() => doYourTask()}
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
                                  width: 60,
                                  marginLeft: 20,
                                }}
                              />

                              <Text
                                style={{
                                  fontSize: 12,
                                  marginVertical: 5,
                                  marginLeft: 40,
                                  marginRight: 10,
                                  fontWeight: "800",

                                  color: "black",
                                }}
                              >
                                {item.sSets}
                              </Text>
                            </View>

                            <View>
                              <Button
                                title="Weight"
                                onPress={() => doYourTask()}
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
                                  width: 60,
                                  marginLeft: 30,
                                }}
                              />

                              <Text
                                style={{
                                  fontSize: 12,
                                  marginVertical: 5,
                                  marginLeft: 40,
                                  marginRight: 10,
                                  fontWeight: "800",

                                  color: "black",
                                }}
                              >
                                {item.sWeight} kgs
                              </Text>
                            </View>
                            <View>
                              <Button
                                title="Reps"
                                onPress={() => doYourTask()}
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
                                  width: 60,
                                  marginLeft: 30,
                                }}
                              />
                              <Text
                                style={{
                                  fontSize: 12,
                                  marginVertical: 5,
                                  marginLeft: 50,
                                  marginRight: 10,
                                  fontWeight: "400",
                                  marginBottom: 10,
                                  color: "black",
                                  fontWeight: "bold",
                                }}
                              >
                                x {item.sReps}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </Card>
              );
            }}
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

export default WorkoutSetView;
