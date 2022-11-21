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
                  <Icon type="font-awesome-5" name="bell" color="#585858" />
                </TouchableOpacity>
              </View>
            }
            centerComponent={{
              text: "Sumit Kalyana",
              style: styles.heading,
            }}
            placement="left"
          />

          <Text
            style={[
              styles.heading,
              { marginVertical: 10, textAlign: "left", marginHorizontal: 20 },
            ]}
          >
            Personal Information
          </Text>
          <Card>
            <Card.Title style={styles.inputheading}>Name</Card.Title>

            <Input placeholder="Name" style={styles.inputplaceholder} />

            <Card.Title style={styles.inputheading}>Gender</Card.Title>

            <Input placeholder="Gender" style={styles.inputplaceholder} />

            <Card.Title style={styles.inputheading}>Height</Card.Title>

            <Input
              placeholder="Height in feet"
              style={styles.inputplaceholder}
            />

            <Card.Title style={styles.inputheading}>Weight</Card.Title>

            <Input
              placeholder="Weight in kgs"
              style={styles.inputplaceholder}
            />

            <Card.Title style={styles.inputheading}>Target Weight</Card.Title>

            <Input
              placeholder="Weight in kgs"
              style={styles.inputplaceholder}
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

                marginVertical: 10,
              }}
              titleStyle={{ fontWeight: "bold" }}
            />
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
});

export default Profile;
