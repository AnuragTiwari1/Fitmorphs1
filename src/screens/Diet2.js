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
import { Header, Icon, Card, Tile, Input } from "@rneui/themed";
import { Button } from "@rneui/themed";

import { SafeAreaProvider } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { Avatar } from "@rneui/base";
import { RefreshControl } from "react-native";

const Diet2 = ({ route, navigation }) => {
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
    getUserData();

    // setTimeout(async () => {
    //   handleRefresh();
    // }, 2000);
  }, [user?.uid]);

  const getUserData = () => {
    axios
      .get("https://engistack.com/test_reactapp/userdiet1.php", {
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
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={() => handleRefresh()}
            />
          }
        >
          <FlatList
            data={myData}
            renderItem={({ item }) => (
              <>
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
                      <Avatar.Accessory size={13} />
                    </Avatar>
                  }
                  rightComponent={
                    <View style={styles.headerRight}>
                      <TouchableOpacity style={{ marginLeft: 10 }}>
                        <Icon
                          type="font-awesome-5"
                          name="bell"
                          color="#585858"
                        />
                      </TouchableOpacity>
                    </View>
                  }
                  centerComponent={{
                    text: item.iUserId,
                    style: styles.heading,
                  }}
                  placement="left"
                />
              </>
            )}
          />
          <Text
            style={[
              styles.heading,
              { marginVertical: 10, textAlign: "left", marginHorizontal: 20 },
            ]}
          >
            Personal Information
          </Text>

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

          <FlatList
            data={myData}
            renderItem={({ item }) => (
              <>
                <Card>
                  <Card.Title style={styles.inputheading}>iFoodId</Card.Title>

                  <Input
                    placeholder="iFoodId"
                    style={styles.inputplaceholder}
                    value={item.iFoodId}
                  />

                  <Card.Title style={styles.inputheading}>Food Name</Card.Title>

                  <Input
                    placeholder="Food Name"
                    style={styles.inputplaceholder}
                    value={item.sFood}
                  />

                  <Card.Title style={styles.inputheading}>Quantity</Card.Title>

                  <Input
                    placeholder="Height in feet"
                    style={styles.inputplaceholder}
                    value={item.sQuantity}
                  />

                  <Card.Title style={styles.inputheading}>Calorie</Card.Title>

                  <Input
                    placeholder="Weight in kgs"
                    style={styles.inputplaceholder}
                    value={item.sCalorie}
                  />

                  <Button
                    title="Save"
                    buttonStyle={{
                      backgroundColor: "black",
                      borderWidth: 2,
                      borderColor: "white",
                      borderRadius: 30,
                    }}
                    containerStyle={{
                      width: "100%",
                      marginBottom: 200,
                      marginTop: 10,
                    }}
                    titleStyle={{ fontWeight: "bold" }}
                  />
                </Card>
              </>
            )}
          />
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
});

export default Diet2;
