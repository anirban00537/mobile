import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import {Image, Text} from 'native-base';
import {colors} from '../../Constant/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        style={styles.imageCard}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description} numberOfLines={1}>
          {item.description}
        </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${item.price}</Text>
          <Icon name="heart" size={15} color={colors.lightBlack} />
        </View>
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
    padding: 5,
    flex: 1,
    margin: 10,
    height: width / numColumns + 10,
    borderRadius: 5,
    width: '45%',
    maxWidth: '45%',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.lightBlack,
  },
  detailsContainer: {
    padding: 5,
    width: '100%',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.lightBlack,
    marginTop: 2,
  },
  description: {
    fontSize: 10,
    color: colors.gray,
    letterSpacing: 1,
  },

  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageCard: {
    height: '60%',
  },
});
