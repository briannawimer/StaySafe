import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Flatlist,
  StyleSheet,
  Image
} from "react-native";

import "../assets/CovidGerm.png";

const CovidDescriptionScreen = (props) => {
  return (
    <View>
      <Image source={require('../assets/CovidGerm.png')} style={styles.image} />
      <Text>COVID-19 is a respiratory disease caused by SARS-CoV-2, a new coronavirus discovered in 2019. The virus is thought to spread mainly from person to person through respiratory droplets produced when an infected person coughs, sneezes, or talks. Some people who are infected may not have symptoms. For people who have symptoms, illness can range from mild to severe. Adults 65 years and older and people of any age with underlying medical conditions are at higher risk for severe illness.
</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },  
  image: {
    //flex: 1,
    width: '100%',
    height: '50%',
    //resizeMode: "center"
  }
});

export default CovidDescriptionScreen;
