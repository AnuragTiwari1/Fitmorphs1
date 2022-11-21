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

import { Header, Icon, Card, Tile, Input } from "@rneui/themed";
import { Button } from "@rneui/themed";
import CoachImage from "../../assets/img/coach1.jpg";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { Avatar } from "@rneui/base";

const Profile = () => {
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
          <View style={{ marginTop: 50 }}>
            <Image
              style={{
                width: "100%",
                height: 300,
                marginTop: -50,
                zIndex: 1,
                borderBottomLeftRadius: 100,
                borderBottomRightRadius: 100,
              }}
              resizeMode="contain"
              source={CoachImage}
            />
          </View>
          <View
            style={{
              zIndex: 2,
              borderTopStartRadius: 100,
            }}
          >
            <Text
              style={[
                styles.heading,
                {
                  marginTop: -100,
                  textAlign: "center",
                  color: "white",
                },
              ]}
            >
              Trainer Profile
            </Text>

            <Card containerStyle={{ borderRadius: 30 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Card.Title style={styles.coachnameh1}>
                  James Joe, 28
                </Card.Title>

                <Icon
                  name="star"
                  type="font-awesome"
                  color="#E7AB2B"
                  size={15}
                  style={{
                    justifyContent: "flex-start",
                    marginLeft: 7,
                    marginTop: 5,
                  }}
                />
                <Text style={{ fontSize: 12, color: "black", marginTop: 5 }}>
                  4.0
                </Text>
              </View>
              <Card.Title style={styles.coachnameh3}>
                Strength and Conditioning
              </Card.Title>
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                  justifyContent: "space-evenly",
                  marginTop: 10,
                  marginBottom: 20,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#E8E8E8",
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    marginLeft: 10,
                  }}
                >
                  <View style={{ flexDirection: "column", flex: 1 }}>
                    <Icon
                      name="phone"
                      type="font-awesome"
                      color="black"
                      size={20}
                      style={{ justifyContent: "flex-start" }}
                    />
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: "#E8E8E8",
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    marginLeft: 10,
                  }}
                >
                  <View style={{ flexDirection: "column", flex: 1 }}>
                    <Icon
                      name="comment"
                      type="font-awesome"
                      color="black"
                      size={20}
                      style={{ justifyContent: "flex-start" }}
                    />
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: "#E8E8E8",
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    marginLeft: 10,
                  }}
                >
                  <View style={{ flexDirection: "column", flex: 1 }}>
                    <Icon
                      name="video-camera"
                      type="font-awesome"
                      color="black"
                      size={20}
                      style={{ justifyContent: "flex-start" }}
                    />
                  </View>
                </View>
              </View>

              <Button
                title="₹ 1999 / month"
                buttonStyle={{
                  backgroundColor: "#E7AB2B",
                  borderWidth: 2,
                  borderColor: "white",
                  borderRadius: 10,
                  marginHorizontal: 5,
                }}
                containerStyle={{
                  width: "100%",
                }}
                titleStyle={{ fontWeight: "bold" }}
              />

              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                  justifyContent: "center",
                  marginTop: 20,
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    width: 100,
                    height: 80,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    marginLeft: 10,
                    borderWidth: 1,
                    borderColor: "#F6BB0A",
                  }}
                >
                  <View style={{ flexDirection: "column", flex: 1 }}>
                    <Text style={{ textAlign: "center", fontWeight: "800" }}>
                      8+
                    </Text>
                    <Text style={{ textAlign: "center" }}>Work Experience</Text>
                  </View>
                </View>

                <View
                  style={{
                    backgroundColor: "white",
                    width: 100,
                    height: 80,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    marginLeft: 10,
                    borderWidth: 1,
                    borderColor: "#F6BB0A",
                  }}
                >
                  <View style={{ flexDirection: "column", flex: 1 }}>
                    <Text style={{ textAlign: "center", fontWeight: "800" }}>
                      60+
                    </Text>
                    <Text style={{ textAlign: "center" }}>Clients Serving</Text>
                  </View>
                </View>

                <View
                  style={{
                    backgroundColor: "white",
                    width: 100,
                    height: 80,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    marginLeft: 10,
                    borderWidth: 1,
                    borderColor: "#F6BB0A",
                  }}
                >
                  <View style={{ flexDirection: "column", flex: 1 }}>
                    <Text style={{ textAlign: "center", fontWeight: "800" }}>
                      600
                    </Text>
                    <Text style={{ textAlign: "center" }}>Jobs Completed</Text>
                  </View>
                </View>
              </View>

              <View style={{ marginVertical: 20 }}>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 1,
                    marginVertical: 20,
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Icon
                      name="clock-o"
                      type="font-awesome"
                      color="gray"
                      size={20}
                      style={{ justifyContent: "flex-start" }}
                    />
                  </View>
                  <View style={{ flex: 4 }}>
                    <Text style={{ marginLeft: 20 }}>Works:</Text>
                  </View>
                  <View style={{ flex: 4 }}>
                    <Text
                      style={{
                        position: "absolute",
                        left: 0,
                        fontWeight: "bold",
                      }}
                    >
                      9.00 Am to 6.00 Pm
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    flex: 1,
                    marginVertical: 20,
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Icon
                      name="language"
                      type="font-awesome"
                      color="gray"
                      size={20}
                      style={{ justifyContent: "flex-start" }}
                    />
                  </View>
                  <View style={{ flex: 4 }}>
                    <Text style={{ marginLeft: 20 }}>Speaks:</Text>
                  </View>
                  <View style={{ flex: 4 }}>
                    <Text
                      style={{
                        position: "absolute",
                        left: 0,
                        fontWeight: "bold",
                      }}
                    >
                      English, Hindi
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    flex: 1,
                    marginVertical: 20,
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Icon
                      name="graduation-cap"
                      type="font-awesome"
                      color="gray"
                      size={20}
                      style={{ justifyContent: "flex-start" }}
                    />
                  </View>
                  <View style={{ flex: 4 }}>
                    <Text style={{ marginLeft: 20 }}>Qualification:</Text>
                  </View>
                  <View style={{ flex: 4 }}>
                    <Text
                      style={{
                        position: "absolute",
                        left: 0,
                        fontWeight: "bold",
                      }}
                    >
                      Certified Personal Trainer
                    </Text>
                  </View>
                </View>
              </View>
              {/* <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                }}
              >
                 <Button
                  title="Book"
                  buttonStyle={{
                    backgroundColor: "black",
                    borderWidth: 2,
                    borderColor: "white",
                    borderRadius: 10,
                    marginHorizontal: 5,
                  }}
                  containerStyle={{
                    width: "50%",

                    marginVertical: 10,
                  }}
                  titleStyle={{ fontWeight: "bold" }}
                /> 
              </View> */}
            </Card>
          </View>
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
  coachnameh1: {
    // color: '#585858',
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  coachnameh3: {
    fontSize: 12,
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
});

export default Profile;
