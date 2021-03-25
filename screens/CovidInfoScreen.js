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
        <Text style={styles.covid}>

 	        COVID INFO</Text>
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

   buttonText: {
     fontSize: 20,
     color: '#000000',
   },
});


export default CovidInfoScreen;


