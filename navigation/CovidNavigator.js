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
import VaccineInfoScreen from "../screens/VaccineInfoScreen";
import VaccineDescriptionScreen from "../screens/VaccineDescriptionScreen";
import VaccineDistributionMap from "../screens/VaccineDistributionMap";

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
  VaccineInfo: {
    screen: VaccineInfoScreen,
    navigationOptions: {
      headerTitle: "Vaccine Info",
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
  VaccineDescription:{
    screen: VaccineDescriptionScreen,
    navigationOptions: {
      headerTitle: "Vaccine Description Screen",
      headerTintColor: "maroon",
    },
  },
  VaccineDistributionMap:{
    screen: VaccineDistributionMap,
    navigationOptions: {
      headerTitle: "Vaccine Distribution Map",
      headerTintColor: "maroon",
    },
  }
});

export default createAppContainer(CovidNavigator);
