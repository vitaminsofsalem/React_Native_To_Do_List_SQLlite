import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function List() {
  const [checkList, setCheckList] = useState<any>([]);
  const [modal, setModal] = useState<any>(false);
  const [note, setNote] = useState<any>("");
  const openModal = () => {
    setModal(!modal);
  };

  const handlePress = () => {
    setCheckList(
      checkList.concat(
        <View style={{ marginTop: 20 }} key={checkList.length}>
          <BouncyCheckbox
            size={30}
            fillColor="#FF4C6A"
            unfillColor="#FFFFFF"
            text={note}
            iconStyle={{ borderColor: "red" }}
            textStyle={{ fontFamily: "Roboto", fontSize: 20 }}
            onPress={(isChecked: boolean) => {}}
          />
        </View>
      )
    );
  };

  return (
    <SafeAreaView style={styles.statusbar}>
      <View style={styles.Container}>
        <Text style={styles.header}>StrikeThat</Text>
        {checkList}
        <Modal
          animationType="fade"
          transparent={true}
          visible={modal}
          onRequestClose={() => {
            setModal(!modal);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Enter Your Note</Text>
              <TextInput
                style={styles.modalTextInput}
                placeholder="Enter Your Note"
                value={note}
                onChangeText={(text) => setNote(text)}
              ></TextInput>
              <Pressable
                style={[styles.buttonn, styles.buttonClose]}
                onPress={() => {
                  setModal(!modal);
                  handlePress();
                  setNote("");
                }}
              >
                <Text style={styles.textStyle}>Add Note</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <TouchableOpacity style={[styles.button, styles.shadow]}>
          <Text style={styles.buttonTxt} onPress={openModal}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 40,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#fff",
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
    backgroundColor: "#FF4C6A",
    borderRadius: 40,
  },
  buttonTxt: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "normal",
    fontFamily: "Roboto",
    color: "black",
  },
  shadow: {
    shadowColor: "#FF4C6A",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 2,
  },
  header: {
    position: "absolute",
    fontStyle: "italic",
    fontSize: 30,
    padding: 5,
    left: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: 350,
    height: 230,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonn: {
    width: "80%",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#FF4C6A",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    fontSize: 20,
    textAlign: "left",
  },
  modalTextInput: {
    backgroundColor: "whitesmoke",
    borderRadius: 30,
    height: 48,
    width: 320,
    marginBottom: 15,
    padding: 10,
    textAlign: "left",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
