import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  return (
    <View>
      <Text>
        <Icon name="home" size={30} color="#900" />
        <Text>hello</Text>
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
