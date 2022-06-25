import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Text} from 'native-base';
import {colors} from '../../Constant/colors';

const CatagoryCard = ({
  label,
  value,
  selected,
  setSectedValue,
}: {
  label: string;
  value: string;
  selected: boolean;
  setSectedValue: any;
}) => {
  return (
    <TouchableOpacity
      style={selected ? styles.SelectedContainer : styles.container}
      onPress={() => setSectedValue(value)}>
      <Text fontWeight={'medium'} color={selected ? colors.white : colors.gray}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CatagoryCard;

const styles = StyleSheet.create({
  container: {
    padding: 7,
    marginHorizontal: 5,
    marginVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    borderRadius: 15,
    // borderWidth: 0.3,
    // borderColor: colors.gray,
  },
  SelectedContainer: {
    padding: 7,
    marginHorizontal: 5,
    marginVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.primary,
    color: colors.white,
    borderRadius: 15,

    // borderWidth: 0.3,
    // borderColor: colors.gray,
  },
});
