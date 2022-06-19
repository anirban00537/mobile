import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Cards from '../../Components/Cards';
const CardSection = () => {
  return (
    <View style={styles.container}>
      <Cards.ProductCard />
      <Cards.ProductCard />
      <Cards.ProductCard />
      <Cards.ProductCard />
      <Cards.ProductCard />
      <Cards.ProductCard />
    </View>
  );
};

export default CardSection;

const styles = StyleSheet.create({
  container: {
    // grid 2
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
