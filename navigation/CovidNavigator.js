import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { DrawerButton, Button } from "react-native";
import React from "react";
import Avatar from "../components/Avatar";
import { Header, Icon } from "react-native-elements";

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
      headerTitle: "StaySafe Covid Alert",
      headerTintColor: "maroon",
      headerLeft: () => <Icon name="menu" color="maroon" />,
      headerRight: () => <Icon name="home" color="maroon" />,
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: "Login",
      headerTintColor: "maroon",

      headerRight: () => <Icon name="home" color="maroon" />,
    },
  },
  CreateAccount: {
    screen: CreateAccountScreen,
    navigationOptions: {
      headerTitle: "Create Account",
      headerTintColor: "maroon",
      headerLeft: () => <Icon name="menu" />,
      headerRight: () => <Icon name="home" color="maroon" />,
    },
  },
  ForgotPassword: {
    screen: ForgotPasswordScreen,
    navigationOptions: {
      headerTitle: "Forgot Password",
      headerTintColor: "maroon",
      headerLeft: () => <Icon name="menu" />,
      headerRight: () => <Icon name="home" color="maroon" />,
    },
  },
  CovidInfo: {
    screen: CovidInfoScreen,
    navigationOptions: {
      headerTitle: "Covid Info",
      headerTintColor: "maroon",
      headerLeft: () => <Icon name="menu" />,
      headerRight: () => <Icon name="home" color="maroon" />,
    },
  },
  CovidQuestionnaire: {
    screen: CovidQuestionnaireScreen,
    navigationOptions: {
      headerTitle: "Covid Questionnaire",
      headerTintColor: "maroon",
      headerLeft: () => <Icon name="menu" />,
      headerRight: () => <Icon name="home" color="maroon" />,
    },
  },
  CovidCaseMap: {
    screen: CovidCaseMapScreen,
    navigationOptions: {
      headerTitle: "Covid Case Map",
      headerTintColor: "maroon",
      headerLeft: () => <Icon name="menu" />,
    },
  },
  CovidDescription: {
    screen: CovidDescriptionScreen,
    navigationOptions: {
      headerTitle: "Covid Description",
      headerTintColor: "maroon",
      headerLeft: () => <Icon name="menu" />,
    },
  },
  VaccineInfo: {
    screen: VaccineInfoScreen,
    navigationOptions: {
      headerTitle: "Vaccine Info",
      headerTintColor: "maroon",
      headerLeft: () => <Icon name="menu" />,
    },
  },
  VaccineQuestionnaire: {
    screen: VaccineQuestionnaireScreen,
    navigationOptions: {
      headerTitle: "Vaccine Questionnaire",
      headerTintColor: "maroon",
      headerLeft: () => <Icon name="menu" />,
    },
  },
  VaccineScheduler: {
    screen: VaccineSchedulerScreen,
    navigationOptions: {
      headerTitle: "Vaccine SCheduler",
      headerTintColor: "maroon",
      headerLeft: () => <Icon name="menu" />,
    },
  },
  VaccineAdvice: {
    screen: VaccineAdviceScreen,
    navigationOptions: {
      headerTitle: "Vaccine Advice Screen",
      headerTintColor: "maroon",
      headerLeft: () => <Icon name="menu" />,
    },
  },
  VaccineDescription: {
    screen: VaccineDescriptionScreen,
    navigationOptions: {
      headerTitle: "Vaccine Description Screen",
      headerTintColor: "maroon",
      headerLeft: () => <Icon name="menu" />,
    },
  },
  VaccineDistributionMap: {
    screen: VaccineDistributionMap,
    navigationOptions: {
      headerTitle: "Vaccine Distribution Map",
      headerTintColor: "maroon",
      headerLeft: () => <Icon name="menu" />,
    },
  },
});

export default createAppContainer(CovidNavigator);
