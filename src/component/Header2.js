import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { Header, Icon, Card, Button } from "@rneui/themed";
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, StackActions } from "@react-navigation/native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
const Header2 = () => {
  const navigation = useNavigation();
  const handleLogout = async () => {
    try {
      console.log("logout");
      await AsyncStorage.clear();

      navigation.dispatch(StackActions.replace("Login"));
    } catch (err) {
      console.log(err);
    }
  };

  const handleTabs = async () => {
    try {
      console.log("Tools1");

      navigation.dispatch(StackActions.replace("Tools1"));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <Header
        backgroundColor="#fff"
        leftComponent={
          <Avatar
            size={40}
            rounded
            source={{
              uri: "https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg",
            }}
            title="Bj"
            containerStyle={{ backgroundColor: "grey" }}
          >
            <Avatar.Accessory
              size={16}
              backgroundColor="orange"
              containerStyle={{ borderRadius: 5 }}
              name="bars"
              type="ant-design"
            />
          </Avatar>
        }
        rightComponent={
          <View style={styles.headerRight}>
            <TouchableOpacity
              style={{ marginLeft: moderateScale(-30) }}
              onPress={() => handleTabs()}
            >
              <SimpleLineIcons
                name={"bell"}
                size={24}
                style={{ color: "black" }}
              />
              {/* <Icon type="ant-design" name="bells" /> */}
            </TouchableOpacity>

            {/* <TouchableOpacity
              style={{ marginLeft: moderateScale(30) }}
              onPress={() => navigation.navigate("ScrollAnim")}
            >
              <SimpleLineIcons
                name={"bell"}
                size={24}
                style={{ color: "white" }}
              />
             
            </TouchableOpacity> */}

            <TouchableOpacity
              style={{ marginLeft: moderateScale(30) }}
              onPress={() => handleLogout()}
            >
              <AntDesign name={"logout"} size={24} style={{ color: "black" }} />
              {/* <Text style={{ color: "white" }}>
                <Icon
                  type="ant-design"
                  name="logout"
                  style={{ color: "white" }}
                />
              </Text> */}
            </TouchableOpacity>
          </View>
        }
        centerComponent={
          <Avatar
            source={{
              uri: "https://engistack.com/test_reactapp/images/FitMorphs_Logo-3.png",
            }}
            title="Bj"
            containerStyle={{
              backgroundColor: "white",
              width: 100,
              height: 45,
            }}
          ></Avatar>
        }
        // centerComponent={{ text: "Home", style: styles.heading }}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  heading: {
    // color: '#585858',
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
    marginTop: "5@msr",
  },
});

export default Header2;
