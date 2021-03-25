import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Flatlist,
  StyleSheet,
  Image,
} from "react-native";
import Card from "../components/Card";
import "../assets/mask.jpg";

    const CovidInfoScreen = (props) => {
   return (
   
        <View style={styles.screen}>
	<Image source={require('../assets/mask.jpg')} style={styles.image} />
	<Card style={styles.buttonContainer}>
	<View style={styles.buttonText}>
         <Button
           title="Covid Questionnaire"
	   color="#016A7C"
           onPress={() => {
             props.navigation.navigate({ routeName: "CovidQuestionnaire" });
           }}
         />
	 </View>
         </Card>
	<Card style={styles.buttonContainer}>
        <View>
         <Button
           title="Covid Map"
	   color="#016A7C"
           onPress={() => {
             props.navigation.navigate({ routeName: "CovidCaseMap" });
           }}
         />
 	</View>
      	</Card>
	<Card style={styles.buttonContainer}>
        <View style={styles.buttonText}>
         <Button
           title="Covid Description"
	   color="#016A7C"
           onPress={() => {
             props.navigation.navigate({ routeName: "CovidDescription" });
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
    width: '100%',
    height: '51%',
    alignSelf: "center",
    //marginVertical: 20,
    
    //resizeMode: "center"
  },
});


export default CovidInfoScreen;


