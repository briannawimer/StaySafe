import * as React from 'react';
import { Button, Text, View } from 'react-native';
import * as Linking from 'expo-linking';

const VaccineInfoScreen = (props) => {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         

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
                        Linking.openURL('https://alpublichealth.maps.arcgis.com/apps/MapSeries/index.html?appid=d84846411471404c83313bfe7ab2a367')
                        // props.navigation.navigate({ routeName: "VaccineDistributionMap" });
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
    

export default VaccineInfoScreen
