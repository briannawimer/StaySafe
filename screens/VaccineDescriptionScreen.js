import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  Modal,
} from "react-native";

const VaccineDescriptionScreen = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.screen}>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has now been closed.");
        }}
      >
        <Text style={styles.text}>Vaccine Information</Text>
        <Text
          style={styles.closeText}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          Close Modal
        </Text>
      </Modal>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Text style={styles.buttonText}>Pfizer, Inc. and BioNTech</Text>
      </TouchableOpacity>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has now been closed.");
        }}
      >
        <Text style={styles.text}>Vaccine Information</Text>
        <Text
          style={styles.closeText}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          Close Modal
        </Text>
      </Modal>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Text style={styles.buttonText}>ModernaTX, Inc.</Text>
      </TouchableOpacity>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has now been closed.");
        }}
      >
        <Text style={styles.text}>Vaccine Information</Text>
        <Text
          style={styles.closeText}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          Close Modal
        </Text>
      </Modal>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Text style={styles.buttonText}>AstraZeneca</Text>
      </TouchableOpacity>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has now been closed.");
        }}
      >
        <Text style={styles.text}>Vaccine Information</Text>
        <Text
          style={styles.closeText}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          Close Modal
        </Text>
      </Modal>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Text style={styles.buttonText}>Janssen</Text>
      </TouchableOpacity>
    </View>
  );
};
/*
const ButtonComp = (props) => (
  <TouchableOpacity
    style={[styles.buttonComp, props.style]}
    onPress={props.onPress}
  >
    <Text style={[styles.buttonText, props.textStyle]}>{props.title}</Text>
  </TouchableOpacity>
);
*/

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
  },
  buttonComp: {
    backgroundColor: "#D5DAD3",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 100,
    height: 65,
    borderRadius: 10,
  },
  /*buttonText: {
    margin: 20,
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  }, */
  button: {
    display: "flex",
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    margin: 10,
    backgroundColor: "maroon",
    shadowColor: "maroon",
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowRadius: 25,
  },
  closeButton: {
    display: "flex",
    height: 60,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF3974",
    shadowColor: "#2AC062",
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowRadius: 25,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 22,
  },
  text: {
    fontSize: 24,
    marginBottom: 30,
    padding: 40,
  },
  closeText: {
    fontSize: 24,
    color: "#00479e",
    textAlign: "center",
  },
});

export default VaccineDescriptionScreen;
