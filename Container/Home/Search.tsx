import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Box, Icon, Input} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../Constant/colors';
const Search = () => {
  return (
    <View style={styles.container}>
      <Input
        placeholder="Search Fashion Item"
        borderRadius="10"
        width={'88%'}
        backgroundColor={colors.grayLight}
        borderColor={'transparent'}
        py="1"
        px="1"
        fontSize="14"
        InputLeftElement={
          <Icon
            m="2"
            ml="3"
            size="6"
            color="gray.400"
            as={<MaterialIcons name="search" />}
          />
        }
      />
      <Box
        backgroundColor={colors.grayLight}
        padding="0"
        w={'10%'}
        alignItems="center"
        justifyContent={'center'}
        borderRadius={'10'}
        height={10}>
        <MaterialIcons name="favorite" size={14} />
      </Box>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 90,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
