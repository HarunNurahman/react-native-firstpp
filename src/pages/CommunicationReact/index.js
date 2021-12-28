import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Cart from "../../components/Cart";
import Product from "../../components/Product";

export default function CommunicationReact() {
  const [onCart, setOnCart] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Component Communiaction in React</Text>
      <Product onButtonPress={() => setOnCart(onCart + 1)} />
      <Cart quantity={onCart} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: "center",
  },
});
