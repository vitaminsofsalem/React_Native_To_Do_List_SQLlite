import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../Components/Card";

export default function Categories() {
  return (
    <SafeAreaView style={styles.statusbar}>
      <View style={styles.Container}>
        <Card />

        <TouchableOpacity style={[styles.button, styles.shadow]}>
          <Text style={styles.buttonTxt}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  statusbar: {
    flex: 1,
    height: StatusBar.currentHeight,
    backgroundColor: "#fff",
  },
  button: {
    position: "absolute",
    height: 60,
    top: Dimensions.get("window").height - 80,
    left: Dimensions.get("window").width - 80,
    width: 60,
    backgroundColor: "#000",
    borderRadius: 40,
  },
  buttonTxt: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "normal",
    fontFamily: "Roboto",
    color: "#fff",
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
});
