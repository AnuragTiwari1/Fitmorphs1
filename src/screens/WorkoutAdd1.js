import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect } from "react";
import BackgroundImg from "../../assets/img/8d1fe8151496153.630d3a08be217.png";
import Ionicon from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { Header, Icon, Card, Tile, Input } from "@rneui/themed";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation, StackActions } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header2 from "../component/Header2";

const data = [
  { label: "Set  1", value: "1" },
  { label: "Set  2", value: "2" },
  { label: "Set  3", value: "3" },
  { label: "Set  4", value: "4" },
  { label: "Set  5", value: "5" },
];

const WorkoutAdd = ({ route }) => {
  const { iWorkoutId } = route.params;
  const { iWorkoutSetId } = route.params;
  const { sWorkoutSetName } = route.params;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [WorkoutName, setWorkoutName] = useState("");
  const [Weight, setWeight] = useState("");
  const [SetNo, setSetNo] = useState("");
  const [Reps, setReps] = useState("");

  const [selected, setSelected] = useState([]);

  const _renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        <Image style={styles.icon} source={require("../../assets/icon.png")} />
      </View>
    );
  };

  const navigation = useNavigation();

  const [isSubmit, setIsSubmit] = useState(false);

  const loginUser = async () => {
    try {
      console.log("iWorkoutId :", iWorkoutId);
      console.log("sWorkoutSetid :", iWorkoutSetId);
      console.log("sWorkoutSetName :", sWorkoutSetName);
      console.log("sSetsNo :", SetNo);
      console.log("sWeight :", Weight);
      console.log("sReps :", Reps);

      const { data } = await axios.post(
        "https://engistack.com/test_reactapp/workoutadd1.php",
        {
          iWorkoutId: iWorkoutId,
          iWorkoutSetid: iWorkoutSetId,
          sWorkoutSetName: sWorkoutSetName,
          sSets: SetNo,
          sWeight: Weight,
          sReps: Reps,
        }
      );

      console.log(data);

      if (data.status == "success") {
        Alert.alert(
          "Workout Set Added Successfully!",
          "You have successfully added.",
          [
            {
              text: "OK",
              onPress: () => {
                navigation.goBack();
              },
            },
          ]
        );
      } else {
        Alert.alert("User Not Added ");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ImageBackground style={styles.container}>
      {/* <View style={styles.topBackgroundImgContainer}>
          <Image
            source={BackgroundImg}
            style={styles.backgroundImg}
            resizeMode="repeat"
          />
        </View> */}

      <View style={[styles.formContainer, { marginTop: 0 }]}>
        <Header2 />
        <View style={[styles.formTopContainer, { marginBottom: 0 }]}>
          <View style={styles.formBottomContainer}>
            <View style={styles.formBottomSubContainer}>
              <View
                style={{
                  flexDirection: "row",
                  marginStart: -20,
                  marginBottom: 0,
                }}
              >
                <Icon
                  raised
                  name="long-arrow-left"
                  type="font-awesome"
                  color="black"
                  size={20}
                  containerStyle={{}}
                  onPress={() => navigation.goBack()}
                />
                <Text
                  style={{
                    color: "black",
                    fontSize: 14,
                    fontWeight: "bold",
                    marginTop: 10,
                    marginLeft: 5,
                  }}
                >
                  Add Workout Set {"\n"}
                </Text>
              </View>

              <View style={styles.customInputContainer}>
                <Text>Weight</Text>
                <View style={styles.customPassContainer}>
                  <TextInput
                    placeholder="Enter Weight in Kgs "
                    placeholderTextColor={"grey"}
                    onChangeText={(text) => setWeight(text)}
                  />

                  <TouchableOpacity
                    onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                  >
                    <MaterialCommunityIcons
                      name={"weight-kilogram"}
                      size={24}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* <View style={styles.customInputContainer}>
                <Text>Set No</Text>
                <View style={styles.customPassContainer}>
                  <TextInput
                    placeholder="Enter Set No "
                    placeholderTextColor={"grey"}
                    onChangeText={(text) => setSetNo(text)}
                  />
                </View>
              </View> */}

              <View style={styles.customInputContainer}>
                <View style={{ marginTop: -20 }}>
                  <Dropdown
                    style={styles.dropdown}
                    containerStyle={styles.shadow}
                    data={data}
                    labelField="label"
                    valueField="value"
                    label="Dropdown"
                    placeholder="Select Set No."
                    value={setSetNo}
                    onChange={(item) => {
                      setSetNo(item.value);
                      console.log("selected", item);
                    }}
                    renderLeftIcon={() => (
                      <Image
                        style={styles.icon}
                        source={require("../../assets/icon.png")}
                      />
                    )}
                    renderItem={(item) => _renderItem(item)}
                    textError="Error"
                  />
                </View>
              </View>

              <View style={styles.customInputContainer}>
                <Text>Reps </Text>
                <View style={styles.customPassContainer}>
                  <TextInput
                    placeholder="Enter No. of Reps"
                    placeholderTextColor={"grey"}
                    onChangeText={(text) => setReps(text)}
                  />
                </View>
              </View>

              {/* <TouchableOpacity style={styles.loginButton}
                                       onPress={() => setIsSubmit(true)} >
  
                          <Text style={{color:'#fff',fontWeight:'bold',fontSize: 17}}>Login</Text>
                      </TouchableOpacity> */}

              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => loginUser()}
              >
                <Text
                  style={{ color: "#fff", fontWeight: "bold", fontSize: 17 }}
                >
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050907",
  },
  dropdown: {
    backgroundColor: "white",
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    marginTop: 20,
  },
  icon: {
    marginRight: 5,
    width: 18,
    height: 18,
  },
  item: {
    paddingVertical: 17,
    paddingHorizontal: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  topBackgroundImgContainer: {
    flex: 1.5,
    alignItems: "flex-end",
  },
  backgroundImg: {
    height: "100%",
    width: "120%",
    marginRight: -15,
  },
  bottomBackgroundImgContainer: {
    flex: 1,
    // backgroundColor:"green",
  },
  formContainer: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  formTopContainer: {
    flex: 1,
    // backgroundColor:"red",
    justifyContent: "space-between",
    padding: 0,
    marginLeft: 0,
  },
  formBottomContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formBottomSubContainer: {
    backgroundColor: "red",
    flex: 1,
    // height: '95%',
    width: "100%",
    borderRadius: 0,
    backgroundColor: "rgba(255,255,255,1)",
    padding: 20,
  },
  customInputContainer: {
    marginVertical: 20,
    borderWidth: 2,
    borderColor: "#F6BB0A",
    height: 60,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  customPassContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  loginButton: {
    backgroundColor: "#F6BB0A",
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 20,
  },
});

export default WorkoutAdd;
