import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

// const colors = [
//   ["#FE90B0", "#F45283", "#ff0047"],
//   ["#89E5FE", "#43C5E9", "#00c9ff"],
//   ["#AE9CFF", "#927FFC", "#2700ff"],
//   ["#FED3A0", "#FFA741", "#ff8800"],
// ];
const colors = [
  ["#FE90B0", "#F45283"],
  ["#89E5FE", "#43C5E9"],
  ["#AE9CFF", "#927FFC"],
  ["#FED3A0", "#FFA741"],
];
export default function Card(props: any) {
  return (
    <View style={[styles(props).card, styles(props).shadow]}>
      <LinearGradient
        colors={[colors[props.color][0], colors[props.color][1]]}
        style={{ flex: 1, borderRadius: 35 }}
      >
        <View style={styles(props).fonts}>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{
                width: 25,
                height: 25,
              }}
              source={{
                uri: props.logo,
              }}
              resizeMode="contain"
            />
            <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 5 }}>
              text
            </Text>
          </View>
          <Text style={{ fontWeight: "500", marginTop: 12 }}>{props.name}</Text>
          <Text style={{ fontSize: 10 }}>{props.address}</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = (props: any) =>
  StyleSheet.create({
    card: {
      height: "35%",
      width: "85%",
      padding: 10,
      borderRadius: 40,
    },
    shadow: {
      shadowColor: `${colors[props.color][1]}`,
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,

      elevation: 24,
    },
    fonts: {
      padding: 15,
    },
    img: {
      width: "100%",
      height: "95%",
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
    },
  });
