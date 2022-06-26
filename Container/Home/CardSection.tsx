import {StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
import Cards from '../../Components/Cards';
import {homeProducts} from '../../service/home';
import {useQuery} from 'react-query';
import {Spinner} from 'native-base';

const CardSection = ({selectedValue, setSectedValue}: any) => {
  const {data, isLoading, isError, refetch, isSuccess} = useQuery(
    ['homeproducts', selectedValue],
    () => homeProducts(10, selectedValue),
  );
  console.log(data?.data, 'data');

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Spinner size={55} />
      ) : (
        <FlatList
          data={data?.data}
          renderItem={({item}) => <Cards.ProductCard item={item} />}
          keyExtractor={item => item?._id.toString()}
          numColumns={2}
        />
      )}
    </View>
  );
};

export default CardSection;

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyContent: 'space-around',
    // alignItems: 'center',
    flex: 1,
  },
});
