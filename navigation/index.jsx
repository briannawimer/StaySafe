import * as React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './bottom.tab';
import LoginScreen from '../screens/account/Login';
import CreateAccount from '../screens/account/CreateAccount';
import ForgotPassword from '../screens/account/ForgotPassword';
import CovidCaseMap from '../screens/covid/CovidCaseMap';
import VaccineDistributionMap from '../screens/vaccine/VaccineDistributionMap';

export default function Navigation({ colorScheme }) {
    return (
        <NavigationContainer
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator />
        </NavigationContainer>
    );
}

export const headerOptions = {
    headerTitleAlign: 'center',
    headerStyle: { backgroundColor: '#FFF', shadowColor: 'transparent', elevation: 1 },
}

const RootStack = createStackNavigator();
function RootNavigator() {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name='Root' component={BottomTabNavigator} options={{ ...headerOptions }} />
            <RootStack.Screen name='Login' component={LoginScreen} options={{ ...headerOptions }} />
            <RootStack.Screen name='CreateAccount' component={CreateAccount} options={{ ...headerOptions }} />
            <RootStack.Screen name='ForgotPassword' component={ForgotPassword} options={{ ...headerOptions }} />
            <RootStack.Screen name='CovidMap' component={CovidCaseMap} options={{ ...headerOptions }} />
            <RootStack.Screen name='VaccineMap' component={VaccineDistributionMap} options={{ ...headerOptions }} />
        </RootStack.Navigator>
    );
}
