import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import Cover from '../Container/Home/Cover';
const Home = () => {
  const {isLoggedIn, user} = useSelector((state: RootState) => state.user);

  return (
    <ScrollView style={styles.container}>
      <Cover />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
});
