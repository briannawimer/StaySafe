import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/AntDesign';

import HomeScreen from '../screens/home/HomePage';
import CovidInfoHome from '../screens/covid/CovidInfoHome';
import VaccineInfo from '../screens/vaccine/VaccineInfo';

const Tab = createBottomTabNavigator();

const TAB_DATA = [
  {
    name: 'Home',
    label: 'Home',
    icon: 'home',
    component: HomeScreen
  }, {
    name: 'CovidInfoHome',
    label: 'Covid',
    icon: 'linechart',
    component: CovidInfoHome,
  }, {
    name: 'VaccineInfo',
    label: 'Vaccine',
    icon: 'medicinebox',
    component: VaccineInfo,
  }
]

export default function BottomTabNavigator() {

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}
      options={{

      }}
    >
      {
        TAB_DATA.map((tabItem, index) =>
          <Tab.Screen key={index} name={tabItem.name} component={tabItem.component}
            options={{
              tabBarLabel: tabItem.label,
              tabBarIcon: ({ color, size }) =>
                <Ionicons name={tabItem.icon} color={color} size={size} style={{ marginTop: 5 }} />,
            }}
          />)
      }
    </Tab.Navigator>
  );
}
