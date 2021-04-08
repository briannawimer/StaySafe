import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { SYMPTOMS } from "../data/questionnaire-data";
import Card from "../components/Card";
import Header from "../components/Header";
import CheckBox from "../components/CheckBox";

const CovidQuestionnaireScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity style={styles.gridItem}>
        <CheckBox>
          <Text>{itemData.item.title}</Text>
        </CheckBox>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <Text style={styles.instructions}>Click your symptoms</Text>
      <View>
        <FlatList
          data={SYMPTOMS}
          renderItem={renderGridItem}
          keyExtractor={(item) => item.id}
          numColumns={1}
        />
      </View>
      <View style={styles.screen}>
        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  instructions: {
    justifyContent: "center",
    alignItems: "center",
    margin: 40,
    fontSize: 24,
  },
  gridItem: {
    flex: 1,
    margin: 0,
    height: 65,
    width: "95%",
    borderRadius: 10,
  },
  submitBtn: {
    width: "30%",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    marginBottom: 10,
  },
  submitText: {
    color: "white",
  },
});

export default CovidQuestionnaireScreen;
