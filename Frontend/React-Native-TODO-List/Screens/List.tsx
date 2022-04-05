// @ts-check

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
  TextInput,
  Image,
} from "react-native";
import { openDatabase } from "expo-sqlite";
import { database } from "../Components/database";
import { SafeAreaView } from "react-native-safe-area-context";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from "../Styles/ListStyles";

export default function List() {
  // State Goes here
  const [checkList, setCheckList] = useState<any>([]);
  const [strike, isStriked] = useState<any>(false);
  const [modal, setModal] = useState<any>(false);
  const [note, setNote] = useState<any>("");
  const openModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    database.createTable();
    database.fetchTask(setCheckList);
  }, []);

  const handlePress = () => {
    setCheckList(checkList.concat({ todo: note }));
    database.addTask(note);
    setNote("");
    setModal(!modal);
  };

  const deleteTasks = () => {
    database.deleteTasks();
    setCheckList([]);
  };
  return (
    <SafeAreaView style={styles.statusbar}>
      <View style={styles.Container}>
        <Image
          source={require("../assets/StrikeThatPink.png")}
          style={{
            position: "absolute",
            height: 280,
            width: 500,
            bottom: 635,
            right: 30,
          }}
          resizeMode="contain"
        />
        <Text style={styles.header}></Text>
        {checkList.map((item: any, index: any) => (
          <View style={{ marginTop: 40 }} key={index}>
            <BouncyCheckbox
              size={30}
              fillColor="#DE2851"
              unfillColor="#242424"
              isChecked={item.strike}
              text={item.todo}
              iconStyle={{
                borderRadius: 10,
              }}
              textStyle={{
                fontFamily: "Roboto",
                fontSize: 20,
                color: "white",
              }}
              onPress={() => {}}
            />
          </View>
        ))}

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
              <Text style={styles.modalText}>Enter Your Task</Text>
              <TextInput
                style={styles.modalTextInput}
                placeholder="Strike Goes Here..."
                placeholderTextColor="#767676"
                value={note}
                onChangeText={(text) => setNote(text)}
              ></TextInput>
              <Pressable
                style={[styles.modalBtn, styles.buttonClose]}
                onPress={() => {
                  handlePress();
                }}
              >
                <Text style={styles.textStyle}>Add Task</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <TouchableOpacity style={[styles.button, styles.shadow]}>
          <Text style={styles.buttonTxt} onPress={openModal}>
            +
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonClr, styles.shadow]}
          onPress={deleteTasks}
        >
          <Text style={styles.buttonClrTxt}>Clear</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
