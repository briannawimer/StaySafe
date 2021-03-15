import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Flatlist,
  StyleSheet,
} from "react-native";

const CovidInfoScreen = (props) => {
  return (
    <View>
      <View>
        <Text>Covid Info Screen</Text>
      </View>
      <View>
        <Button
          title="Covid Questionnaire"
          onPress={() => {
            props.navigation.navigate({ routeName: "CovidQuestionnaire" });
          }}
        />
        <Button
          title="Covid Map"
          onPress={() => {
            props.navigation.navigate({ routeName: "CovidCaseMap" });
          }}
        />
        <Button
          title="Covid Description"
          onPress={() => {
            props.navigation.navigate({ routeName: "CovidDescription" });
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default CovidInfoScreen;
