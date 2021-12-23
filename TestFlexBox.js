/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import { Text, View, Image } from "react-native";

class TestFlexBox extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#f2f2f2",
            justifyContent: "space-around",
            alignContent: "center",
          }}
        >
          <View style={{ backgroundColor: "#badc58", width: 50, height: 50 }} />
          <View style={{ backgroundColor: "#ff7979", width: 50, height: 50 }} />
          <View style={{ backgroundColor: "#ffbe76", width: 50, height: 50 }} />
          <View style={{ backgroundColor: "#f6e58d", width: 50, height: 50 }} />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text>Home</Text>
          <Text>Profile</Text>
          <Text>Settings</Text>
          <Text>About</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 24,
            marginTop: 8,
          }}
        >
          <Image
            source={{ uri: "https://placeimg.com/64/64/people" }}
            style={{ width: 64, height: 64, borderRadius: 32 }}
          />
          <View style={{ marginLeft: 16 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Harunamanya
            </Text>
            <Text>Twitch.tv/Harunamanya</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default TestFlexBox;
