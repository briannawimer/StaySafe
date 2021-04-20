import React, { useState } from "react";
import {
  FlatList,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Linking,
  ActivityIndicator,
} from "react-native";
import Map from "../components/Map";
import SearchInput, { createFilter } from "react-native-search-filter";
import { COUNTIES } from "../data/questionnaire-data";
import Card from "../components/Card";
import { SearchBar } from "react-native-elements";
const KEYS_TO_FILTERS = ["user.name", "subject"];

const CovidCaseMapScreen = (props) => {
  const [value, setValue] = React.useState("");
  //const state;

  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity style={styles.gridItem}>
        <Card>
          <Text
            onPress={() => {
              Linking.openURL(
                "https://alpublichealth.maps.arcgis.com/apps/MapSeries/index.html?appid=d84846411471404c83313bfe7ab2a367"
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
        onChangeText={(text) => setValue(text)}
        placeholder="Search County here..."
        placeholderTextColor="#888"
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
