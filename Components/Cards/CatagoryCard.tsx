import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Text} from 'native-base';
import {colors} from '../../Constant/colors';

const CatagoryCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text fontWeight={'semibold'}>CatagoryCard</Text>
    </TouchableOpacity>
  );
};

export default CatagoryCard;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginRight: 15,
    marginLeft: 2,
    marginVertical: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
});
