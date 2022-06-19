import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import Cards from '../../Components/Cards';

const items = [
  {
    id: 1,
    title: 'Hand Sanitizer',
    price: '$100',
    description: 'Hand Sanitizer Which is used to clean hands',
    image: 'https://source.unsplash.com/random/400x400',
  },
  {
    id: 2,
    title: 'Face Mask',
    price: '$200',
    description: 'Face Mask Which is used to clean face',
    image: 'https://source.unsplash.com/random/400x400',
  },
  {
    id: 3,
    title: 'Water Bottle',
    price: '$100',
    description: 'Water Bottle Which is used to clean hands',
    image: 'https://source.unsplash.com/random/400x400',
  },
  {
    id: 4,
    title: 'Tooth Brush',
    price: '$200',
    description: 'Tooth Brush Which is used to clean teeth',
    image: 'https://source.unsplash.com/random/400x400',
  },
  {
    id: 5,
    title: 'Lip Balm',
    price: '$100',
    description: 'Lip Balm Which is used to clean lips',
    image: 'https://source.unsplash.com/random/400x400',
  },
  {
    id: 6,
    title: 'Face Mask',
    price: '$200',
    description: 'Face Mask Which is used to clean face',
    image: 'https://source.unsplash.com/random/400x400',
  },
];
const CardSection = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({item}) => <Cards.ProductCard item={item} />}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
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
