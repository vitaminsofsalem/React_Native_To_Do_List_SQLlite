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
import WavyHeader from "../Components/WavyHeader";

export default function Login() {
  return (
    <SafeAreaView style={styles.statusbar}>
      <View style={styles.topContainer}>
        <WavyHeader customStyles={styles.svgCurve} />
        <Image
          source={require("../assets/Strikethat.png")}
          style={{ height: 400, width: 400, top: 70 }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={[styles.button, styles.shadow]}>
          <Text style={styles.buttonTxt}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
