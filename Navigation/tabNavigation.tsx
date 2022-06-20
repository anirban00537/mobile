import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Favourites from '../Screens/Favourites';
import MyCart from '../Screens/MyCart';
import Profile from '../Screens/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {colors} from '../Constant/colors';
import {Avatar} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const {isLoggedIn, user}: any = useSelector((state: RootState) => state.user);
  const navigation: any = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: colors.navigationBackground,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          title: '',
          headerShown: false,
          headerStyle: {
            backgroundColor: colors.navigationBackground,
          },
          headerLeft: () => {
            return (
              <Icon
                name="heart"
                size={18}
                color={colors.black}
                onPress={() => {
                  navigation.navigate('Favourites');
                }}
                style={{marginLeft: 15}}
              />
            );
          },
          headerRight: () => {
            return (
              <Icon
                name="search"
                size={18}
                onPress={() => {
                  navigation.navigate('Search');
                }}
                color={colors.black}
                style={{
                  marginRight: 15,
                }}
              />
            );
          },
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
          tabBarIcon: ({color, size, focused}) =>
            isLoggedIn && user.first_name ? (
              <Avatar
                bg="lightBlue.400"
                size={size}
                source={{
                  uri: 'https://bit.ly/broken-link',
                }}>
                {user.first_name?.charAt(0)}
              </Avatar>
            ) : (
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
