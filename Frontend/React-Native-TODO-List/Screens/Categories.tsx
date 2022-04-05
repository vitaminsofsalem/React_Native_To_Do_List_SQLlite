import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../Components/Card";

export default function Categories() {
  const [catList, setCatList] = useState<any>([]);

  const handlePress = () => {
    setCatList(
      catList.concat(
        <TouchableOpacity
          style={{
            height: "33%",
            width: "85%",
            padding: 10,
            marginTop: 20,
            borderRadius: 35,
          }}
        >
          <Card key={catList.length} color={Math.floor(Math.random() * 4)} />
        </TouchableOpacity>
      )
    );
  };
  return (
    <SafeAreaView style={styles.statusbar}>
      <View style={styles.Container}>
        <TouchableOpacity
          style={[styles.button, styles.shadow]}
          onPress={handlePress}
        >
          <Text style={styles.buttonTxt}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
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
