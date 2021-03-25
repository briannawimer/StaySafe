import * as React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

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

export default VaccineInfoScreen