import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import CovidQuestionnaire from "./screens/CovidQuestionnaireScreen";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Stay Safe Covid-19" />
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
