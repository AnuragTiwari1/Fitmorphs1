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
import Moment from "moment";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { Avatar } from "@rneui/base";
import { RefreshControl } from "react-native";
import Header2 from "../component/Header2";
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

const Plan = ({ route, navigation }) => {
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
                <FlatList
                  data={myData}
                  horizontal={true}
                  scrollEnabled
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => {
                    Moment.locale("en");
                    var dt = item.sDate;

                    {
                      /* <Icon
                    name="file1"
                    type="antdesign"
                    color="#F6BB0A"
                    size={110}
                    
                  /> */
                    }

                    {
                      /* <Icon
                    name="document-outline"
                    type="ionicon"
                    color="#F6BB0A"
                    size={100}
                  /> */
                    }
                    return (
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate("Diet1", {
                            sDate: item.sDate,
                          })
                        }
                      >
                        <View style={{ marginRight: -10 }}>
                          <Icon
                            name="file1"
                            type="antdesign"
                            color="#F6BB0A"
                            size={120}
                          />

                          <Badge
                            value="Veg"
                            status="success"
                            textStyle={{ fontWeight: "bold", fontSize: 12 }}
                            containerStyle={{
                              position: "absolute",
                              marginTop: 4,
                              marginLeft: 14,
                              paddingBottom: 10,
                              color: "green",
                            }}
                          />
                          <Text
                            style={{
                              position: "absolute",
                              marginTop: 50,
                              marginLeft: 40,
                              fontSize: 12,
                            }}
                          >
                            <Text> {Moment(dt).format("ddd")}</Text>
                          </Text>
                          <Text
                            style={{
                              position: "absolute",
                              marginTop: 90,
                              marginHorizontal: 32,
                              fontSize: 13,
                            }}
                          >
                            <Text> {Moment(dt).format("Do MMM ")}</Text>
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
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

export default Plan;
