import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import Card from "../../components/Card";
// import CovidScreen from "./CovidScreen";

const HomeScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Card style={styles.buttonContainer}>
        <View style={styles.buttonText}>
          <Button title="Covid-19 Information" color="black" />
        </View>
      </Card>
      <Card style={styles.buttonContainer}>
        <View>
          <Button title="Vaccine Information" color="black" />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    margin: 12,
    padding: 10,
    justifyContent: "center",
    textAlign: "center",
    paddingHorizontal: 100,
  },
  buttonText: {
    width: "100%",
  },
});

export default HomeScreen;
