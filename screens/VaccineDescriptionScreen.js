import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const VaccineDescriptionScreen = (props) => {
  return (
    <View style={styles.screen}>
      <ButtonComp title={'Pfizer, Inc., and BioNTech'} onPress={() => { console.log('button pressed'); }} />
      <ButtonComp title={'ModernaTX, Inc.'} onPress={() => { console.log('button pressed'); }} />
      <ButtonComp title={'AstraZeneca'} onPress={() => { console.log('button pressed'); }} />
      <ButtonComp title={'Janssen'} onPress={() => { console.log('button pressed'); }} />
    </View>
  );
};

const ButtonComp = (props) => (
  <TouchableOpacity
    style={[styles.buttonComp, props.style]}
    onPress={props.onPress}>
    <Text style={[styles.buttonText, props.textStyle]}>{props.title}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonComp: {
    backgroundColor: '#D5DAD3',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 200,
    borderRadius: 10,
  },
  buttonText: {
    margin: 20,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default VaccineDescriptionScreen;
