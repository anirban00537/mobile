import {StyleSheet, View} from 'react-native';
import React from 'react';
import Card from '../../Components/Cards';
import {CheckIcon, ScrollView, Select, Text} from 'native-base';
import {colors} from '../../Constant/colors';

const CatagorySection = () => {
  let [service, setService] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text fontSize="2xl" fontWeight="bold" color={colors.black}>
          Our products
        </Text>
        <Select
          selectedValue={service}
          width={100}
          accessibilityLabel="Sort by"
          placeholder="Sort by"
          _selectedItem={{
            bg: colors.primary,
            endIcon: <CheckIcon size="5" color={colors.white} />,
          }}
          borderWidth={0}
          onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="Show" value="show" />
          <Select.Item label="Bag" value="bag" />
          <Select.Item label="Hat" value="Hat" />
          <Select.Item label="Glass" value="Glass" />
          <Select.Item label="Hoodie" value="Hoodie" />
        </Select>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Card.CatagoryCard />
        <Card.CatagoryCard />
        <Card.CatagoryCard />
        <Card.CatagoryCard />
        <Card.CatagoryCard />
        <Card.CatagoryCard />
        <Card.CatagoryCard />
        <Card.CatagoryCard />
      </ScrollView>
    </View>
  );
};

export default CatagorySection;

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});
