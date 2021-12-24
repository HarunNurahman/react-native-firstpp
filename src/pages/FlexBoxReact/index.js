/* eslint-disable react-native/no-inline-styles */
import React, { Component, useEffect, useState } from "react";
import { Text, View, Image } from "react-native";

// class FlexBoxReact extends Component {
//   constructor(props) {
//     super(props);
//     console.log("==> constructor");
//     this.state = {
//       youtube: "Youtube.com",
//     };
//   }

//   componentDidMount() {
//     console.log("==> component did mount");
//     setTimeout(() => {
//       this.setState({
//         youtube: "Nimo.tv",
//       });
//     }, 2000);
//   }

//   componentDidUpdate() {
//     console.log("==> component did update");
//   }

//   render() {
//     console.log("==> render");
//     return (
//       <View>
//         <View
//           style={{
//             flexDirection: "row",
//             backgroundColor: "#f2f2f2",
//             justifyContent: "space-around",
//             alignContent: "center",
//           }}
//         >
//           <View style={{ backgroundColor: "#badc58", width: 50, height: 50 }} />
//           <View style={{ backgroundColor: "#ff7979", width: 50, height: 50 }} />
//           <View style={{ backgroundColor: "#ffbe76", width: 50, height: 50 }} />
//           <View style={{ backgroundColor: "#f6e58d", width: 50, height: 50 }} />
//         </View>
//         <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
//           <Text>Home</Text>
//           <Text>Profile</Text>
//           <Text>Settings</Text>
//           <Text>About</Text>
//         </View>
//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             marginLeft: 24,
//             marginTop: 8,
//           }}
//         >
//           <Image
//             source={{ uri: "https://placeimg.com/64/64/people" }}
//             style={{ width: 64, height: 64, borderRadius: 32 }}
//           />
//           <View style={{ marginLeft: 16 }}>
//             <Text
//               style={{
//                 fontSize: 20,
//                 fontWeight: "bold",
//               }}
//             >
//               Harunamanya
//             </Text>
//             <Text>{this.state.youtube}/Harunamanya</Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

const FlexBoxReact = () => {
  const [youtube, setYoutube] = useState("Youtube.com");
  useEffect(() => {
    console.log("did mount");
    setTimeout(() => {
      setYoutube("Harunamanya");
    }, 2000);
    return () => {
      console.log("did update");
    };
  }, [youtube]);

  // useEffect(() => {
  //   console.log("did update");
  //   setTimeout(() => {
  //     setYoutube("Harunamanya");
  //   }, 2000);
  // }, [youtube]);

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
          <Text>{youtube}/Harunamanya</Text>
        </View>
      </View>
    </View>
  );
};

export default FlexBoxReact;
