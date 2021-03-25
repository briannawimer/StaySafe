import * as React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

const VaccineInfoScreen = (props) => {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         
            <Text style={styles.covid}>

 	            VACCINE INFO</Text>

             <View>
                 <Button
                     title="Vaccine Questionnaire"
                    onPress={() => {
                        props.navigation.navigate({ routeName: "VaccineQuestionnaire" });
                    }}
                />
                <Button
                    title="Vaccine Distribution Map"
                    onPress={() => {
                        props.navigation.navigate({ routeName: "VaccineDistributionMap" });
                    }}
                />
                <Button
                    title="Vaccine Description"
                    onPress={() => {
                        props.navigation.navigate({ routeName: "VaccineDescription" });
                    }}
                />
            </View>
         </View>
     );
 }
     const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#FFFFFF',
     alignItems: 'center',
     justifyContent: 'space-evenly'
   },

  covid: {
     color: '#32425F',
     fontSize: 40,
     alignSelf: 'center',
     marginHorizontal: 30,
     marginVertical: 30,  


   },
 });
    

export default VaccineInfoScreen
