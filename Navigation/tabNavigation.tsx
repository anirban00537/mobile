import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Favourites from '../Screens/Favourites';
import Search from '../Screens/Search';
import MyCart from '../Screens/MyCart';
import Profile from '../Screens/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size, focused}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: ({color, size}) => (
            <Icon name="heart" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="MyCart"
        component={MyCart}
        options={{
          tabBarLabel: 'MyCart',
          tabBarIcon: ({color, size}) => (
            <Icon name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
