import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import Card from "../components/Card";
// import CovidScreen from "./CovidScreen";

const HomeScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.button}>
        <Card
          style={{
            height: "60%",
            paddingVertical: 170,
            backgroundColor: "deeppink",
          }}
        >
          <Button
            style={{ textAlign: "center" }}
            title="Covid-19 Information"
            color="white"
            onPress={() => {
              props.navigation.navigate({ routeName: "CovidInfo" });
            }}
          />
        </Card>
      </View>
      <View style={styles.button}>
        <Card
          style={{
            height: "60%",
            paddingVertical: 170,
            backgroundColor: "deepskyblue",
          }}
        >
          <Button
            title="Vaccine Information"
            color="white"
            onPress={() => {
              props.navigation.navigate({ routeName: "VaccineInfo" });
            }}
          />
        </Card>
      </View>

      <View style={(styles.button, { alignSelf: "stretch" })}>
        <Card style={{ alignContent: "stretch", backgroundColor: "maroon" }}>
          <Button
            title="Login Screen"
            color="white"
            onPress={() => {
              props.navigation.navigate({ routeName: "Login" });
            }}
          />
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "darkblue",
  },
  buttonContainer: {
    flexDirection: "row",
    margin: 12,
    textAlign: "center",
  },
  loginContainer: {
    flexDirection: "row",
    margin: 12,
    justifyContent: "space-around",
    textAlign: "center",
    alignSelf: "stretch",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    width: "48%",
    textAlign: "center",
  },
  buttonText: {
    width: "100%",
  },
});

export default HomeScreen;
