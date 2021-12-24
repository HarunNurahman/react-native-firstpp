import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import cart from "../../assets/icon/cart.png";

const PositioningReact = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.cart_wrapper}>
        <Image source={cart} style={styles.ic_cart} />
        <Text style={styles.text_notif}>10</Text>
      </View>
      <Text style={styles.text_style}>Your Cart</Text>
    </View>
  );
};

export default PositioningReact;

const styles = StyleSheet.create({
  wrapper: { padding: 24, alignItems: "center" },
  ic_cart: { width: 64, height: 64 },
  cart_wrapper: {
    borderWidth: 1,
    borderColor: "#535c68",
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  text_style: {
    fontSize: 12,
    color: "#777777",
    fontWeight: "700",
    marginTop: 8,
  },
  text_notif: {
    fontSize: 12,
    color: "white",
    backgroundColor: "#6fcf97",
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 24,
    position: "absolute",
    top: 0,
    right: 0,
  },
});
