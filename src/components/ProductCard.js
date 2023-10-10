import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";

const ProductCard = (props) => {
  const { item } = props;
  return (
    <View style={styles.mainBox}>
      <Animated.Image
        sharedTransitionTag={`T${item.id}`}
        style={styles.image}
        source={item.thumbnail}
      />
      <Text style={styles.price}>
        <Text style={styles.currency}>$</Text>
        {item.price}
      </Text>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    margin: 5,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  price: {
    fontSize: 18,
    color: "#323232",
    fontWeight: "600",
  },
  currency: {
    color: "#24a8af",
  },
  title: {
    fontSize: 18,
    color: "#323232",
    fontWeight: "bold",
  },
});
