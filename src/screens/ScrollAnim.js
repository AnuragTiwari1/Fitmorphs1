import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const ScrollAnim = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const flatListRef = useRef(null);
  useEffect(() => {
    flatListRef.current.scrollToIndex({
      index: selectedIndex,
      animated: true,
    });
  }, [selectedIndex]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
      }}
    >
      <View
        style={{
          marginTop: 100,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FlatList
          data={data}
          infiniteScrollIndex={selectedIndex}
          ref={flatListRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={{
                  width: 50,
                  height: 50,
                  marginLeft: 10,
                  borderWidth: 1,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: selectedIndex == index ? "#000" : "#ffff",
                }}
              >
                <Text
                  style={{ color: selectedIndex == index ? "#fff" : "#000" }}
                >
                  {index + 1}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <View
        style={{
          marginTop: 20,
          width: "100%",
        }}
      >
        <FlatList
          data={data}
          onScroll={(event) => {
            const ind = event.nativeEvent.contentOffset.y / 50;
            setSelectedIndex(ind.toFixed(0));
          }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={{
                  width: "100%",
                  height: 50,
                  alignSelf: "center",
                  marginTop: 10,
                  borderWidth: 1,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: data.length - 1 === index ? 300 : 0,
                }}
                onPress={() => {
                  setSelectedIndex(index);
                }}
              >
                <Text>{index + 1}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default ScrollAnim;

const styles = StyleSheet.create({});
