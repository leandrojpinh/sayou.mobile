import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Recents from '../pages/Recents';
import New from '../pages/New';
import Rating from '../pages/Rating';
import Profile from '../pages/Profile';


const { Navigator, Screen } = createBottomTabNavigator();

function NavigationTabs() {
  return (
    <Navigator tabBarOptions={{
      style: {
        elevation: 0,
        shadowOpacity: 0,
        height: 60
      },
      tabStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      iconStyle: {
        flex: 0,
        width: 20,
        height: 20
      },
      labelStyle: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 12,
        marginLeft: 16
      },
      inactiveBackgroundColor: '#FAFAFA',
      activeBackgroundColor: '#FAFAFA',
      inactiveTintColor: '#B2B2B2',
      activeTintColor: '#3A4856'
    }}>
      <Screen 
        name="Recents"
        component={Recents}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Feather name='home' size={size} color={focused ? '#3A4856' : color } />
            )
          }
        }}
      />
      <Screen 
        name="New"
        component={New}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Feather name='plus-circle' size={size} color={focused ? '#3A4856' : color } />
            )
          }
        }}
      />
      <Screen 
        name="Rating"
        component={Rating}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Feather name='send' size={size} color={focused ? '#3A4856' : color } />
            )
          }
        }}
      />
      <Screen 
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Feather name='user' size={size} color={focused ? '#3A4856' : color } />
            )
          }
        }}
      />
    </Navigator>
  );
}

export default NavigationTabs;