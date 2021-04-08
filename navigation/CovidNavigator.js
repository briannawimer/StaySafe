import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Button } from "react-native";
import React from "react";
import Avatar from "../components/Avatar";

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import CreateAccountScreen from "../screens/CreateAccountScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import CovidInfoScreen from "../screens/CovidInfoScreen";
import CovidQuestionnaireScreen from "../screens/CovidQuestionnaireScreen";
import CovidCaseMapScreen from "../screens/CovidCaseMapScreen";
import CovidDescriptionScreen from "../screens/CovidDescriptionScreen";
import VaccineQuestionnaireScreen from "../screens/VaccineQuestionaireScreen";
import VaccineSchedulerScreen from "../screens/VaccineSchedulerScreen";
import VaccineAdviceScreen from "../screens/VaccineAdviceScree";
import VaccineInfoScreen from "../screens/VaccineInfoScreen";
import VaccineDescriptionScreen from "../screens/VaccineDescriptionScreen";
import VaccineDistributionMap from "../screens/VaccineDistributionMap";

const CovidNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: "Home",
      headerTintColor: "maroon",
      headerRight: () => <Avatar></Avatar>,
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: "Login",
      headerTintColor: "maroon",
      headerRight: () => <Avatar></Avatar>,
    },
  },
  CreateAccount: {
    screen: CreateAccountScreen,
    navigationOptions: {
      headerTitle: "Create Account",
      headerTintColor: "maroon",
      headerRight: () => <Avatar></Avatar>,
    },
  },
  ForgotPassword: {
    screen: ForgotPasswordScreen,
    navigationOptions: {
      headerTitle: "Forgot Password",
      headerTintColor: "maroon",
      headerRight: () => <Avatar></Avatar>,
    },
  },
  CovidInfo: {
    screen: CovidInfoScreen,
    navigationOptions: {
      headerTitle: "Covid Info",
      headerTintColor: "maroon",
      headerRight: () => <Avatar></Avatar>,
    },
  },
  CovidQuestionnaire: {
    screen: CovidQuestionnaireScreen,
    navigationOptions: {
      headerTitle: "Covid Questionnaire",
      headerTintColor: "maroon",
      headerRight: () => <Avatar></Avatar>,
    },
  },
  CovidCaseMap: {
    screen: CovidCaseMapScreen,
    navigationOptions: {
      headerTitle: "Covid Case Map",
      headerTintColor: "maroon",
      headerRight: () => <Avatar></Avatar>,
    },
  },
  CovidDescription: {
    screen: CovidDescriptionScreen,
    navigationOptions: {
      headerTitle: "Covid Description",
      headerTintColor: "maroon",
      headerRight: () => <Avatar></Avatar>,
    },
  },
  VaccineInfo: {
    screen: VaccineInfoScreen,
    navigationOptions: {
      headerTitle: "Vaccine Info",
      headerTintColor: "maroon",
      headerRight: () => <Avatar></Avatar>,
    },
  },
  VaccineQuestionnaire: {
    screen: VaccineQuestionnaireScreen,
    navigationOptions: {
      headerTitle: "Vaccine Questionnaire",
      headerTintColor: "maroon",
      headerRight: () => <Avatar></Avatar>,
    },
  },
  VaccineScheduler: {
    screen: VaccineSchedulerScreen,
    navigationOptions: {
      headerTitle: "Vaccine SCheduler",
      headerTintColor: "maroon",
      headerRight: () => <Avatar></Avatar>,
    },
  },
  VaccineAdvice: {
    screen: VaccineAdviceScreen,
    navigationOptions: {
      headerTitle: "Vaccine Advice Screen",
      headerTintColor: "maroon",
      headerRight: () => <Avatar></Avatar>,
    },
  },
  VaccineDescription: {
    screen: VaccineDescriptionScreen,
    navigationOptions: {
      headerTitle: "Vaccine Description Screen",
      headerTintColor: "maroon",
      headerRight: () => <Avatar></Avatar>,
    },
  },
  VaccineDistributionMap: {
    screen: VaccineDistributionMap,
    navigationOptions: {
      headerTitle: "Vaccine Distribution Map",
      headerTintColor: "maroon",
      headerRight: () => <Avatar></Avatar>,
    },
  },
});

export default createAppContainer(CovidNavigator);
