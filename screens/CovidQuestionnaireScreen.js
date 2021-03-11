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

const CovidQuestionnaireScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity style={styles.gridItem}>
        <Card>
          <View>
            <Text>{itemData.item.title}</Text>
          </View>
        </Card>
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
          numColumns={2}
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
    marginTop: 10,
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  instructions: {
    justifyContent: "center",
    alignItems: "center",
    margin: 40,
    fontSize: 24,
  },
  gridItem: {
    flex: 1,
    margin: 5,
    height: 65,
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
