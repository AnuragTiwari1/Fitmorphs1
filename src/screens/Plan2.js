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
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header, Icon, Card, Button, Badge } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome5";

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
import { useNavigation, StackActions } from "@react-navigation/native";

const Plan = () => {
  const navigation = useNavigation();

  const [isLoaded, setIsLoaded] = useState(true);
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const [myData, setMyData] = useState([]);
  const [user, setUser] = useState({});

  const findUser = async () => {
    const result = await AsyncStorage.getItem("user_data");
    console.log(result);
    setUser(JSON.parse(result));
  };

  useEffect(() => {
    findUser();
  }, []);

  useEffect(() => getUserData(), [user?.uid]);

  // useEffect(() => {
  //   findUser();
  //   getUserData1();
  //   getUserData();

  //   // setTimeout(async () => {
  //   //   handleRefresh();
  //   // }, 2000);
  // }, [user?.uid]);

  const getUserData = () => {
    axios
      .get("https://engistack.com/test_reactapp/userdiet.php", {
        params: {
          iUserId: user.uid,
        },
      })
      .then((json) => setMyData(json.data))
      .finally(() => setIsLoaded(false));
  };

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

          <Card containerStyle={{ borderRadius: 15 }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <FontAwesome
                name="lightbulb"
                size={20}
                style={{ color: "#F6BB0A", marginRight: 50 }}
              />

              <Card.Title style={styles.coachnameh3}>
                Your free plan is ready!
              </Card.Title>
            </View>
            <Text
              style={{
                textAlign: "left",
                marginLeft: 60,
                marginRight: 40,
                marginTop: -10,
                fontSize: 13,
              }}
            >
              Try it now by tapping on any nutrition plan below
            </Text>
          </Card>
          <Card containerStyle={{ borderRadius: 15 }}>
            <View>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "600",
                  marginTop: -10,
                  fontSize: 14,
                }}
              >
                Nutrition Plans
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginVertical: 10,
                }}
              >
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  {/* <Icon
                    name="file1"
                    type="antdesign"
                    color="#F6BB0A"
                    size={110}
                    
                  /> */}

                  {/* <Icon
                    name="document-outline"
                    type="ionicon"
                    color="#F6BB0A"
                    size={100}
                  /> */}

                  <FlatList
                    data={myData}
                    renderItem={({ item }) => (
                      <>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginVertical: 10,
                          }}
                        >
                          <View
                            style={{
                              flex: 2,
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <View style={{ marginLeft: 15 }}>
                              <Avatar
                                size={50}
                                source={{
                                  uri: item.sFoodImg,
                                }}
                                title="Bj"
                                containerStyle={{ backgroundColor: "grey" }}
                              />
                            </View>
                            <View>
                              <View
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                }}
                              >
                                <Text
                                  style={{
                                    fontSize: 16,
                                    marginLeft: 20,
                                    marginRight: 10,
                                    fontWeight: "700",
                                  }}
                                >
                                  {item.sFood}
                                </Text>
                                <Icon
                                  name="dot-circle-o"
                                  type="font-awesome"
                                  color="green"
                                  size={18}
                                  onPress={() => console.log("hello")}
                                />
                              </View>
                              <View style={styles.vertical}>
                                <Text>{item.sQuantity} ml</Text>
                                <Divider
                                  orientation="vertical"
                                  style={{ marginHorizontal: 10 }}
                                />
                                <Text> {item.sCalorie} Kcal</Text>
                              </View>

                              <View
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "space-around",
                                  marginLeft: 10,
                                }}
                              >
                                <Badge
                                  value={"P:" + item.sCalorie + "g"}
                                  status="grey5"
                                  textStyle={{
                                    fontWeight: "bold",
                                    fontSize: 10,
                                    color: "black",
                                  }}
                                  badgeStyle={{
                                    borderRadius: 5,
                                  }}
                                  containerStyle={{
                                    marginHorizontal: 10,
                                  }}
                                />

                                <Badge
                                  value={"C: " + item.sCalorie + "g"}
                                  status="grey5"
                                  textStyle={{
                                    fontWeight: "bold",
                                    fontSize: 10,
                                    color: "black",
                                  }}
                                  badgeStyle={{
                                    borderRadius: 5,
                                  }}
                                  containerStyle={{
                                    marginHorizontal: 10,
                                  }}
                                />

                                <Badge
                                  value={"F: " + item.sCalorie + "g"}
                                  status="grey5"
                                  textStyle={{
                                    fontWeight: "bold",
                                    fontSize: 10,
                                    color: "black",
                                  }}
                                  badgeStyle={{
                                    borderRadius: 5,
                                  }}
                                  containerStyle={{
                                    marginHorizontal: 10,
                                  }}
                                />
                              </View>
                            </View>
                          </View>
                          <View
                            style={{
                              flexDirection: "row",
                              justifyContent: "center",
                              marginRight: 10,
                            }}
                          ></View>
                        </View>
                        <View style={styles.horizontal}>
                          <Divider />
                        </View>
                      </>
                    )}
                  />

                  <FlatList
                    data={myData}
                    renderItem={({ item }) => (
                      <>
                        <TouchableOpacity
                          onPress={() => navigation.navigate("Diet1")}
                        >
                          <View style={{ marginRight: -10 }}>
                            <Icon
                              name="file1"
                              type="antdesign"
                              color="#F6BB0A"
                              size={90}
                            />

                            <Badge
                              value="Veg"
                              status="success"
                              textStyle={{ fontWeight: "bold", fontSize: 8 }}
                              containerStyle={{
                                position: "absolute",
                                marginTop: 4,
                                marginLeft: 14,
                                color: "green",
                              }}
                            />
                            <Text
                              style={{
                                position: "absolute",
                                marginTop: 50,
                                marginLeft: 37,
                                fontSize: 12,
                              }}
                            >
                              Fri
                            </Text>
                            <Text
                              style={{
                                position: "absolute",
                                marginTop: 65,
                                marginLeft: 23,
                                fontSize: 13,
                              }}
                            >
                              {item.sDate}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </>
                    )}
                  />
                </ScrollView>
              </View>
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

  coachnameh3: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Plan;
