import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function List() {
  return (
    <View>
      <Text>List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 3,
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  statusbar: {
    flex: 1,
    height: StatusBar.currentHeight,
    backgroundColor: "#fff",
  },
  svgCurve: {
    position: "absolute",
    width: Dimensions.get("window").width,
  },
  button: {
    height: 50,
    width: "60%",
    backgroundColor: "#000",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTxt: {
    fontSize: 20,
    fontWeight: "300",
    fontFamily: "Roboto",
    color: "#fff",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
