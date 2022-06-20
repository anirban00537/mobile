import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Text} from 'native-base';
import {colors} from '../../Constant/colors';

const CatagoryCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text fontWeight={'medium'} color={colors.gray}>
        CatagoryCard
      </Text>
    </TouchableOpacity>
  );
};

export default CatagoryCard;

const styles = StyleSheet.create({
  container: {
    padding: 7,
    marginRight: 15,
    marginLeft: 2,
    marginVertical: 10,
    backgroundColor: colors.white,
    borderRadius: 15,
    // borderWidth: 0.3,
    // borderColor: colors.gray,
  },
});
