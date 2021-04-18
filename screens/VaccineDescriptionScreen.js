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
          <Text>Pfizer, Inc. and BioNTech
          Name: BNT162b2</Text>
                    
                    <Text> Manufacturer: Pfizer, Inc., and BioNTech</Text>

                     <Text>Type of Vaccine: mRNA</Text>

                     <Text>Number of Shots: 2 shots, 21 days apart</Text>

                     <Text>Who Should Get Vaccinated</Text>

                     <Text>The Pfizer-BioNTech vaccine is recommended for people aged 16 years and older.</Text>
                     <Text>Who Should NOT Get Vaccinated/n</Text>
                     <Text>If you have had a severe allergic reaction (anaphylaxis) or an immediate allergic reaction, even if it was not severe:
                     to any ingredient in an mRNA COVID-19 vaccine (such as polyethylene glycol), you should not get an mRNA COVID-19 vaccine.*
                     or after getting the first dose of the vaccine.</Text>
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
          <Text>Name: mRNA-1273</Text>
          
          <Text> Manufacturer: ModernaTX, Inc</Text>

           <Text>Type of Vaccine: mRNA</Text>

           <Text>Number of Shots: 2 shots, 28 days apart</Text>

           <Text>Who Should Get Vaccinated</Text>

           <Text>The Pfizer-BioNTech vaccine is recommended for people aged 18 years and older.</Text>
           <Text>Who Should NOT Get Vaccinated/n</Text>
           <Text>if you have had a severe allergic reaction (anaphylaxis) or an immediate allergic reaction, even if it was not severe:</Text>
<Text>  -to any ingredient in an mRNA COVID-19 vaccine (such as polyethylene glycol), you should not get an mRNA COVID-19 vaccine.*</Text>
<Text>  -or after getting the first dose of the vaccine, you should not get a second dose of either of the mRNA COVID-19 vaccines.
</Text>
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
          <Text>Name:AZD1222</Text>
                    
                    <Text> Manufacturer:
          Oxford–AstraZeneca
          </Text>

                     <Text>Type of Vaccine: viral vector</Text>

                     <Text>Number of Shots: 1 shots</Text>

                     <Text>Who Should Get Vaccinated</Text>

                     <Text>
          The J&J/Janssen vaccine is recommended for people aged 18 years and older.
          </Text>
                     <Text>Who Should NOT Get Vaccinated</Text>
                     <Text>
          If you have had a severe allergic reaction (anaphylaxis) or an immediate allergic reaction—even if it was not severe—to any ingredientexternal icon in the J&J/Janssen COVID-19 vaccine (such as polysorbate), you should not get the  COVID-19 vaccine.
          </Text>
          <Text>  -An allergic reaction is considered severe when a person needs to be treated with epinephrine or EpiPen© or if they must go to the hospital. Experts refer to severe allergic reactions as anaphylaxis.</Text>
          <Text>
          An immediate allergic reaction means a reaction within 4 hours of getting vaccinated, including symptoms such as hives, swelling, or wheezing (respiratory distress).
          </Text>
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
        <Text style={styles.text}>Name: NJ-78436735</Text>
          
          <Text> Manufacturer: Janssen Pharmaceuticals Companies of Johnson & Johnson</Text>

           <Text>Type of Vaccine: viral vector</Text>

           <Text>Number of Shots: 1 shots</Text>

           <Text>Who Should Get Vaccinated</Text>

           <Text>
The J&J/Janssen vaccine is recommended for people aged 18 years and older.
</Text>
           <Text>Who Should NOT Get Vaccinated/n</Text>
           <Text>
If you have had a severe allergic reaction (anaphylaxis) or an immediate allergic reaction—even if it was not severe—to any ingredientexternal icon in the J&J/Janssen COVID-19 vaccine (such as polysorbate), you should not get the J&J/Janssen COVID-19 vaccine.
</Text>
<Text>  -An allergic reaction is considered severe when a person needs to be treated with epinephrine or EpiPen© or if they must go to the hospital. Experts refer to severe allergic reactions as anaphylaxis.</Text>
<Text>
An immediate allergic reaction means a reaction within 4 hours of getting vaccinated, including symptoms such as hives, swelling, or wheezing (respiratory distress).
</Text>

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
