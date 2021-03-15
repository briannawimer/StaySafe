import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

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

const CovidNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: { headerTitle: "Home", headerTintColor: "maroon" },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: { headerTitle: "Login", headerTintColor: "maroon" },
  },
  CreateAccount: {
    screen: CreateAccountScreen,
    navigationOptions: {
      headerTitle: "Create Account",
      headerTintColor: "maroon",
    },
  },
  ForgotPassword: {
    screen: ForgotPasswordScreen,
    navigationOptions: {
      headerTitle: "Forgot Password",
      headerTintColor: "maroon",
    },
  },
  CovidInfo: {
    screen: CovidInfoScreen,
    navigationOptions: { headerTitle: "Covid Info", headerTintColor: "maroon" },
  },
  CovidQuestionnaire: {
    screen: CovidQuestionnaireScreen,
    navigationOptions: {
      headerTitle: "Covid Questionnaire",
      headerTintColor: "maroon",
    },
  },
  CovidCaseMap: {
    screen: CovidCaseMapScreen,
    navigationOptions: {
      headerTitle: "Covid Case Map",
      headerTintColor: "maroon",
    },
  },
  CovidDescription: {
    screen: CovidDescriptionScreen,
    navigationOptions: {
      headerTitle: "Covid Description",
      headerTintColor: "maroon",
    },
  },

  VaccineQuestionnaire: {
    screen: VaccineQuestionnaireScreen,
    navigationOptions: {
      headerTitle: "Vaccine Questionnaire",
      headerTintColor: "maroon",
    },
  },
  VaccineScheduler: {
    screen: VaccineSchedulerScreen,
    navigationOptions: {
      headerTitle: "Vaccine SCheduler",
      headerTintColor: "maroon",
    },
  },
  VaccineAdvice: {
    screen: VaccineAdviceScreen,
    navigationOptions: {
      headerTitle: "Vaccine Advice Screen",
      headerTintColor: "maroon",
    },
  },
});

export default createAppContainer(CovidNavigator);
