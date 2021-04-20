import React, { useState } from "react";
import {
  FlatList,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Linking,
} from "react-native";
import Map from "../components/Map";
import { COUNTIES } from "../data/questionnaire-data";
import Card from "../components/Card";
import { SearchBar } from "react-native-elements";

const CovidCaseMapScreen = (props) => {
  const [value, setValue] = React.useState("");
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity style={styles.gridItem}>
        <Card>
          <Text
            onPress={() => {
              Linking.openURL(
                "https://alpublichealth.maps.arcgis.com/apps/opsdashboard/index.html#/167c02b55a184c9380cf78b81d4f6b12"
              );
            }}
          >
            {itemData.item.title}
          </Text>
        </Card>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.screen}>
      <SearchBar
        platform="default"
        onChangeText={(newVal) => setValue(newVal)}
        onClearText={() => console.log(onClearText())}
        placeholder="Search County here..."
        placeholderTextColor="#888"
        cancelButtonTitle="Cancel"
        onCancel={() => console.log(onCancel())}
        value={value}
      />
      <View>
        <FlatList
          data={COUNTIES}
          renderItem={renderGridItem}
          keyExtractor={(item) => item.id}
          numColumns={1}
        />
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
    margin: 4,
    height: 65,
    width: "95%",
    borderRadius: 10,
  },
});

export default CovidCaseMapScreen;
