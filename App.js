/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import rtx3090 from './rtx3090.jpg';

const App = () => {
  return <StylingExample />;
};

const StylingExample = () => {
  return (
    <View>
      {/* <Text style={Style.text}>StylingExample</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#8e44ad',
          borderWidth: 2,
          borderColor: 'black',
          marginLeft: 24,
          marginTop: 8,
        }}
      /> */}
      <View
        style={{
          padding: 12,
          backgroundColor: '#f2f2f2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={rtx3090}
          style={{
            width: 188,
            height: 107,
            borderRadius: 8,
          }}
        />
        {/* Title */}
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 16,
            color: 'black',
          }}>
          GeForce RTX 3090 Graphics Card
        </Text>
        {/* Price */}
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#F2994A',
            marginTop: 14,
          }}>
          Starting At $1,499
        </Text>
        {/* Location */}
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            marginTop: 6,
          }}>
          Bandung, Jawa Barat
        </Text>
        {/* Button Buy */}
        <View
          style={{
            backgroundColor: '#27ae60',
            paddingVertical: 6,
            borderRadius: 20,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            Buy it Now!
          </Text>
        </View>
      </View>
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

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/64/64/tech'}}
      style={{width: 64, height: 64}}
    />
  );
};

const NamaBelakang = () => {
  return <Text>Nurahman</Text>;
};

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

export default App;
