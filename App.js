import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="StaySafe Covid Alert" />
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
