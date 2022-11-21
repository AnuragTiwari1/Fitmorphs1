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

const Header2 = () => {
  return (
    <View>
      <Header
        backgroundColor="white"
        leftComponent={
          <Avatar
            size={34}
            rounded
            source={{
              uri: "https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg",
            }}
            title="Bj"
            containerStyle={{ backgroundColor: "grey" }}
          >
            <Avatar.Accessory
              size={13}
              backgroundColor="orange"
              containerStyle={{ borderRadius: 10 }}
            />
          </Avatar>
        }
        rightComponent={
          <View style={styles.headerRight}>
            <TouchableOpacity style={{ marginLeft: moderateScale(-30) }}>
              <Icon type="font-awesome-5" name="bell" />
            </TouchableOpacity>
          </View>
        }
        centerComponent={{ text: "Home", style: styles.heading }}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
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
});

export default Header2;
