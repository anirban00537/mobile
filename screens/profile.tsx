import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const Profile = () => {
  const navigation: any = useNavigation();
  return (
    <View>
      <Text onPress={() => navigation.navigate('Login', {})}>profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
