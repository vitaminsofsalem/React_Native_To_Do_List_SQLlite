import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function Card(props: any) {
  const colors = [
    ["#FE90B0", "#F45283", "#ff0047"],
    ["#89E5FE", "#43C5E9", "#00c9ff"],
    ["#AE9CFF", "#927FFC", "#2700ff"],
    ["#FED3A0", "#FFA741", "#ff8800"],
  ];
  return (
    <View style={[styles.card, styles.shadow]}>
      <LinearGradient
        colors={[colors[0][0], colors[0][1]]}
        style={{ flex: 1, borderRadius: 35 }}
      >
        <View style={styles.fonts}>
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

const styles = StyleSheet.create({
  card: {
    height: "33%",
    width: "85%",
    borderRadius: 35,
  },
  shadow: {
    shadowColor: `${colors[0][2]}`,
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
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
