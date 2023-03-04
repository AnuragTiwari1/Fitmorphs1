import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  FlatList,
  refreshControl,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Header, Icon, Card, Tile, Input, Badge, Divider } from "@rneui/themed";
import { Button } from "@rneui/themed";

import { SafeAreaProvider } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { Avatar } from "@rneui/base";
import { RefreshControl } from "react-native";
import Header2 from "../component/Header2";

const Diet2 = ({ route, navigation }) => {
  const { sDate } = route.params;
  const [isLoaded, setIsLoaded] = useState(true);
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const [myData, setMyData] = useState([]);
  const [myData1, setMyData1] = useState([]);
  const [user, setUser] = useState({});

  const findUser = async () => {
    const result = await AsyncStorage.getItem("user_data");
    console.log(result);
    setUser(JSON.parse(result));
  };

  useEffect(() => {
    findUser();
  }, []);

  useEffect(() => getUserData(), [user?.uid, sDate]);
  useEffect(() => getUserData1(), [user?.uid, sDate]);
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
      .get("https://engistack.com/test_reactapp/userdiet1.php", {
        params: {
          iUserId: user.uid,
          sDate: sDate,
        },
      })
      .then((json) => setMyData(json.data))
      .finally(() => setIsLoaded(false));
  };

  const getUserData1 = () => {
    axios
      .get("https://engistack.com/test_reactapp/userdiet2.php", {
        params: {
          iUserId: user.uid,
          sDate: sDate,
        },
      })
      .then((json) => setMyData1(json.data))
      .finally(() => setIsLoaded(false));
  };
  const handleRefresh = async () => {
    console.log("function is calling");

    setIsRefreshing(true);

    getUserData(); // await means till it dowsnt get data it will not execute function below it

    setIsRefreshing(false);

    // setTimeout(() => {
    //   setIsRefreshing(false);
    //   //   console.log("function is ending");
    // }, 2000);
    console.log("function is ending");
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <View
        style={{
          flex: 1,
          width: "100%",
          height: 1000,
        }}
      >
        <Header2 />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={() => handleRefresh()}
            />
          }
        >
          <Card containerStyle={{ borderRadius: 15, marginVertical: 40 }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <FontAwesome
                name="lightbulb"
                size={20}
                style={{ color: "#F6BB0A", marginRight: 50 }}
              />

              <Card.Title style={styles.coachnameh3}>
                Your free plan is ready!
                {sDate}
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
          {/* <View>
            <Text> Email = {user.uid}</Text>
            <FlatList
              data={myData}
              renderItem={({ item }) => (
                <>
                  <Text>UserId : {item.iUserId}</Text>
                  <Text>Name : {item.sName}</Text>
                  <Text>Email : {item.sEmailId}</Text>
                </>
              )}
            />
          </View> */}
          <Card containerStyle={{ borderRadius: 10 }}>
            <View>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text
                  style={{
                    textAlign: "left",
                    fontWeight: "600",
                    marginTop: -10,
                    fontSize: 16,
                  }}
                >
                  Breakfast
                </Text>
                <Text
                  style={{
                    textAlign: "left",
                    fontSize: 14,
                    fontWeight: "400",
                    marginLeft: 20,
                    marginTop: -8,
                  }}
                >
                  (412.8 KCal)
                </Text>
              </View>

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
                            title="FM"
                            containerStyle={{ backgroundColor: "grey" }}
                          />
                        </View>
                        <View>
                          <View
                            style={{ display: "flex", flexDirection: "row" }}
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
                              value={"P: " + item.sProtein + "g"}
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
                              value={"C: " + item.sCarbs + "g"}
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
                              value={"F: " + item.sFat + "g"}
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
            </View>
          </Card>

          <Card containerStyle={{ borderRadius: 10 }}>
            <View>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text
                  style={{
                    textAlign: "left",
                    fontWeight: "600",
                    marginTop: -10,
                    fontSize: 16,
                  }}
                >
                  Lunch
                </Text>
                <Text
                  style={{
                    textAlign: "left",
                    fontSize: 14,
                    fontWeight: "400",
                    marginLeft: 20,
                    marginTop: -8,
                  }}
                >
                  (412.8 KCal)
                </Text>
              </View>

              <FlatList
                data={myData1}
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
                            title="FM"
                            containerStyle={{ backgroundColor: "grey" }}
                          />
                        </View>
                        <View>
                          <View
                            style={{ display: "flex", flexDirection: "row" }}
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
                              value={"P: " + item.sProtein + "g"}
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
                              value={"C: " + item.sCarbs + "g"}
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
                              value={"F: " + item.sFat + "g"}
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
            </View>
          </Card>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6fbf6",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: 20,
    width: "100%",
    paddingVertical: 15,
  },
  inputplaceholder: {
    // color: '#585858',
    color: "black",
    fontSize: 14,
  },
  inputheading: {
    // color: '#585858',
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
  },
  heading: {
    // color: '#585858',
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
  },
  subheaderText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  customInputContainer: {
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "#F6BB0A",
    height: 45,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 0,
    borderRadius: 10,
    marginBottom: 1,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryText: {
    marginLeft: 3,
    marginTop: 10,
    fontSize: 12,
    textAlign: "center",
    fontWeight: "500",
  },
  coachname: {
    marginVertical: 20,
    fontSize: 20,
    color: "#F6BB0A",
  },
  coachcategory: {
    fontSize: 14,
  },
  coachrating: {
    fontSize: 14,
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

export default Diet2;
