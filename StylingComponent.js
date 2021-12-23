/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 90, height: 90, backgroundColor: '#27ae60'}} />
      <Text>Harun</Text>
      <NamaBelakang />
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <Box />
      <Profile />
    </View>
  );
};

const Style = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    marginLeft: 24,
    marginTop: 16,
  },
});

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/64/64/tech'}}
      style={{width: 64, height: 64}}
    />
  );
};

class NamaBelakang extends Component {
  render() {
    return <Text>Nurahman</Text>;
  }
}

class Box extends Component {
  render() {
    return <Text>Ini Component dari Class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/people'}}
          style={{width: 100, height: 100}}
        />
        <Text>Sepeda</Text>
      </View>
    );
  }
}

export default SampleComponent;
