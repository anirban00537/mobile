import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Favourites from '../Screens/Favourites';
import Search from '../Screens/Search';
import MyCart from '../Screens/MyCart';
import Profile from '../Screens/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../Constant/colors';
import {Text} from 'react-native';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({size, focused}) => (
            <Icon
              name="home"
              size={size}
              color={focused ? colors.primary : colors.gray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name="search"
              size={size}
              color={focused ? colors.primary : colors.gray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name="heart"
              size={size}
              color={focused ? colors.primary : colors.gray}
            />
          ),
        }}
      />

      <Tab.Screen
        name="MyCart"
        component={MyCart}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name="shopping-cart"
              size={size}
              color={focused ? colors.primary : colors.gray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name="user"
              size={size}
              color={focused ? colors.primary : colors.gray}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
