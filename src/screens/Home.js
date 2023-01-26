import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { Header, Icon, Card, Button } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { useNavigation, StackActions } from "@react-navigation/native";
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

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
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

  const navigation = useNavigation();
  const getUserData = () => {
    axios
      .get("https://engistack.com/test_reactapp/categorydata.php")
      .then((json) => setMyData(json.data))
      .finally(() => setIsLoaded(true));
  };

  useEffect(() => getUserData(), []);

  const loginUser = async (itemid) => {
    try {
      console.log("iCategoryId :", itemid);

      const { data } = await axios.post(
        "https://engistack.com/test_reactapp/cat1data.php",
        {
          iCategoryId: itemid,
        }
      );

      console.log(data);

      const userData = {
        iCategoryId: data.data.iCategoryId,
        sCategory: data.data.sCategory,
      };

      if (data.status == "success") {
        //Alert.alert('User Login Successfully');

        // await AsyncStorage.setItem("user_data", JSON.stringify(userData));

        navigation.dispatch(
          // StackActions.replace("Home")  // Replace Login Page with Home Page , means redirect to Hoem Screen if Login
          navigation.navigate("BuyPlan", {
            iCategoryId: data.data.iCategoryId,
          })
        );
      } else {
        Alert.alert("User Not Found");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // render the students cards
  const showUserData = ({ item }) => {
    const image = item.sAge;
    return (
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          marginBottom: moderateScale(30),
          paddingHorizontal: moderateScale(1),
        }}
      >
        <View>
          <TouchableOpacity onPress={() => loginUser(item.iCategoryId)}>
            <Avatar
              marginHorizontal={15}
              size={58}
              rounded
              icon={{
                name: item.sCategoryimage,
                type: "material-community",
              }}
              containerStyle={{ backgroundColor: "#F6BB0A" }}
            />

            <Text style={styles.categoryText}>
              {item.sCategory}
              {/* {"\n"}
              {item.iCategoryId} */}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isLoaded ? (
          <ScrollView>
            <Header2 />

            <View style={styles.customInputContainer}>
              <TextInput placeholder="Search" placeholderTextColor={"grey"} />
              <TouchableOpacity
                style={{ marginTop: moderateScale(10) }}
                onPress={() => loginUser()}
              >
                <FontAwesome
                  name="search"
                  size={20}
                  style={{ color: "#F6BB0A" }}
                />
              </TouchableOpacity>
            </View>

            <View style={{ marginVertical: moderateScale(-40) }}>
              <Image
                style={{
                  width: "95%",
                  height: verticalScale(300),
                  marginHorizontal: moderateScale(10),
                }}
                resizeMode="contain"
                source={Slider1}
              />
            </View>

            <Text
              style={[
                styles.heading,
                {
                  marginVertical: moderateScale(10),
                  textAlign: "left",
                  marginHorizontal: moderateScale(20),
                },
              ]}
            >
              Health Services
              {/* <Text style={{ fontSize: 20 }}>Email = {user.uid}</Text> */}
            </Text>

            <FlatList
              keyExtractor={(item) => item.iCategoryId}
              data={myData}
              renderItem={showUserData}
              numColumns={4}
            />
            <Text
              style={[
                styles.heading,
                { marginVertical: 10, textAlign: "left", marginHorizontal: 20 },
              ]}
            >
              Personal Coaches
            </Text>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <CoachesCard
                textData="Priya A"
                imgSrc={
                  "https://plus.unsplash.com/premium_photo-1666283137119-372be475c27c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                }
                textData1="Yoga"
                rating="5"
              />

              <CoachesCard
                textData="David S"
                imgSrc={
                  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                }
                textData1="Gym"
                rating="4"
              />
            </ScrollView>
          </ScrollView>
        ) : (
          <View>
            <ActivityIndicator size="large" color="#00ff00" />
            <Text style={styles.indicatorText}>Loading Fitness...</Text>
          </View>
        )}
      </View>
    </SafeAreaProvider>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6fbf6",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: "20@msr",
    width: "100%",
    paddingVertical: "15@msr",
  },
  heading: {
    // color: '#585858',
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
    marginTop: "5@msr",
  },
  subheaderText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
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
  categoryText: {
    marginLeft: "3@msr",
    marginTop: "10@msr",
    fontSize: 12,
    textAlign: "center",
    fontWeight: "500",
  },
  coachname: {
    marginVertical: "20@msr",
    fontSize: 20,
    color: "#F6BB0A",
  },
  coachcategory: {
    fontSize: 14,
  },
  coachrating: {
    fontSize: 14,
  },
});

export default Home;
