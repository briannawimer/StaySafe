import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Flatlist,
  StyleSheet,
  Image,
} from "react-native";
import * as Linking from 'expo-linking';
import Card from "../components/Card";
import "../assets/vaccine_information.png";

const VaccineInfoScreen = (props) => {

    return (
        <View style={styles.screen}>
	<Image source={require('../assets/vaccine_information.png')} style={styles.image} />
	<Card style={styles.buttonContainer}>
	<View style={styles.buttonText}>
        
                <Button
                    title="Vaccine Questionnaire"
		     color="#016A7C"
                    onPress={() => {
                        props.navigation.navigate({ routeName: "VaccineQuestionnaire" });
                    }}
                />
		 </View>
                 </Card>
		<Card style={styles.buttonContainer}>
                <View>
                <Button
                    title="Vaccine Distribution Map"
		     color="#016A7C"
                    onPress={() => {
                        Linking.openURL('https://alpublichealth.maps.arcgis.com/apps/MapSeries/index.html?appid=d84846411471404c83313bfe7ab2a367')
                        // props.navigation.navigate({ routeName: "VaccineDistributionMap" });
                    }}
                />
		</View>
      	        </Card>
		<Card style={styles.buttonContainer}>
                <View style={styles.buttonText}>
                <Button
                    title="Vaccine Description"
		     color="#016A7C"
                    onPress={() => {
                        props.navigation.navigate({ routeName: "VaccineDescription" });
                    }}
                />
            </View>
	  </Card>
        </View>
    );
};

const styles = StyleSheet.create({
  screen: {
	flex: 1, 
   },
  covid: {
     color: '#32425F',
     fontSize: 40,
     alignSelf: 'center',
     marginHorizontal: 30,
     marginVertical: 30,  


   },
    info: {
     color: '#32425F',
     fontSize: 40,
     alignSelf: 'flex-start',
     marginHorizontal: 30,
     marginVertical: -100,

   },

   button: {
     backgroundColor: '#EDFAFF',
     padding: 20,
     borderRadius: 5,
   },

   buttonContainer: {
    flexDirection: "row",
    margin: 12,
    padding: 10,
    justifyContent: "center",
    textAlign: "center",
    paddingHorizontal: 100,
  },

  buttonText: {
    width: "100%",
    
  },

  image: {
    //flex: 1,
    width: "100%",
    height: "35 %",
    alignSelf: "center",
    
    //marginVertical: 20,
    
    //resizeMode: "center"
  },
});

export default VaccineInfoScreen
