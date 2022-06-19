import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductCard = () => {
  return (
    <View style={styles.container}>
      <Text>ProductCard</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: '45%',
    backgroundColor: '#fff',
    marginBottom: 10,
  },
});
