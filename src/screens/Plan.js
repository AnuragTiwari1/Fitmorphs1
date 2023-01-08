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
                  <TouchableOpacity onPress={() => navigation.navigate("Diet")}>
                    <View style={{ marginRight: -10 }}>
                      <Icon
                        name="document-outline"
                        type="ionicon"
                        color="#F6BB0A"
                        size={100}
                      />

                      <Badge
                        value="Veg"
                        status="success"
                        textStyle={{ fontWeight: "bold", fontSize: 8 }}
                        containerStyle={{
                          position: "absolute",
                          marginTop: 10,
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
                        02 Dec
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => navigation.navigate("Diet")}>
                    <View style={{ marginRight: -10 }}>
                      <Icon
                        name="document-outline"
                        type="ionicon"
                        color="#F6BB0A"
                        size={100}
                      />
                      <Badge
                        value="NonVeg"
                        status="error"
                        textStyle={{ fontWeight: "bold", fontSize: 8 }}
                        containerStyle={{
                          position: "absolute",
                          marginTop: 10,
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
                        Sat
                      </Text>
                      <Text
                        style={{
                          position: "absolute",
                          marginTop: 65,
                          marginLeft: 23,
                          fontSize: 13,
                        }}
                      >
                        03 Dec
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => navigation.navigate("Diet")}>
                    <View style={{ marginRight: -10 }}>
                      <Icon
                        name="document-outline"
                        type="ionicon"
                        color="#F6BB0A"
                        size={100}
                      />
                      <Badge
                        value="Veg"
                        status="success"
                        textStyle={{ fontWeight: "bold", fontSize: 8 }}
                        containerStyle={{
                          position: "absolute",
                          marginTop: 10,
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
                        Sun
                      </Text>
                      <Text
                        style={{
                          position: "absolute",
                          marginTop: 65,
                          marginLeft: 23,
                          fontSize: 13,
                        }}
                      >
                        04 Dec
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => navigation.navigate("Diet")}>
                    <View style={{ marginRight: -10 }}>
                      <Icon
                        name="document-outline"
                        type="ionicon"
                        color="#F6BB0A"
                        size={100}
                      />
                      <Badge
                        value="NonVeg"
                        status="error"
                        textStyle={{ fontWeight: "bold", fontSize: 8 }}
                        containerStyle={{
                          position: "absolute",
                          marginTop: 10,
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
                        Mon
                      </Text>
                      <Text
                        style={{
                          position: "absolute",
                          marginTop: 65,
                          marginLeft: 23,
                          fontSize: 13,
                        }}
                      >
                        05 Dec
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => navigation.navigate("Diet")}>
                    <View style={{ marginRight: -10 }}>
                      <Icon
                        name="document-outline"
                        type="ionicon"
                        color="#F6BB0A"
                        size={100}
                      />
                      <Badge
                        value="Veg"
                        status="success"
                        textStyle={{ fontWeight: "bold", fontSize: 8 }}
                        containerStyle={{
                          position: "absolute",
                          marginTop: 10,
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
                        Tue
                      </Text>
                      <Text
                        style={{
                          position: "absolute",
                          marginTop: 65,
                          marginLeft: 23,
                          fontSize: 13,
                        }}
                      >
                        06 Dec
                      </Text>
                    </View>
                  </TouchableOpacity>
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
