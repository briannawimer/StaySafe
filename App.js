import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import CovidQuestionnaire from "./screens/CovidQuestionnaireScreen";
import LoginScreen from "./screens/LoginScreen";
import CreateAccountScreen from "./screens/CreateAccountScreen";
import CovidNavigator from "./navigation/CovidNavigator";

export default function App() {
  return <CovidNavigator />;
}
