import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import Cover from '../Container/Home/Cover';
const Home = () => {
  const {isLoggedIn, user} = useSelector((state: RootState) => state.user);

  return (
    <View style={styles.container}>
      <Cover />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
});
