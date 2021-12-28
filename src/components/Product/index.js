import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacityBase,
  TouchableOpacity,
} from "react-native";
import rtx from "../../assets/images/rtx.jpg";

export default function Product(props) {
  return (
    <View style={{ alignItems: "center", marginTop: 8 }}>
      <View style={styles.wrapper}>
        <Image source={rtx} style={styles.imgProduct} />
        {/* Title */}
        <Text style={styles.productTitle}>GeForce RTX 3090 Graphics Card</Text>
        {/* Price */}
        <Text style={styles.productPrice}>Starting At $1,499</Text>
        {/* Location */}
        <Text style={styles.productLocation}>Bandung, Jawa Barat</Text>
        {/* Button Buy */}
        <TouchableOpacity onPress={props.onButtonPress}>
          <View style={styles.btn_wrapper}>
            <Text style={styles.btn_text}>Buy it Now!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    backgroundColor: "#f2f2f2",
    width: 212,
    borderRadius: 8,
  },
  imgProduct: {
    width: 188,
    height: 107,
    borderRadius: 8,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 16,
    color: "black",
  },
  productPrice: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#F2994A",
    marginTop: 14,
  },
  productLocation: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 6,
  },
  btn_wrapper: {
    backgroundColor: "#27ae60",
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 20,
  },
  btn_text: {
    fontSize: 14,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
});
