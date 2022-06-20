import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import CatagorySection from '../Container/Home/CatagorySection';
import CardSection from '../Container/Home/CardSection';
import Cover from '../Container/Home/Cover';
import Search from '../Container/Home/Search';
// import Cover from '../Container/Home/Cover';
const Home = () => {
  const {isLoggedIn, user} = useSelector((state: RootState) => state.user);

  return (
    <ScrollView style={styles.container}>
      <Search />
      <Cover />
      <CatagorySection />
      <CardSection />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});
