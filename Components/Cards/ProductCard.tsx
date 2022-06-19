import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import {Image, Text} from 'native-base';
import {colors} from '../../Constant/colors';

const width = Dimensions.get('window').width;
const numColumns = 2;
const ProductCard = ({item}: any) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{uri: item.image}}
        height={130}
        width={width / numColumns}
        alt="product"
        borderTopRadius={5}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description} numberOfLines={1}>
          {item.description}
        </Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1,
    margin: 5,
    height: width / numColumns,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.black,
  },
  detailsContainer: {
    padding: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: 2,
  },
  description: {
    fontSize: 10,
    color: colors.gray,
    letterSpacing: 1,
  },
});
