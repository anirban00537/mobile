import {StyleSheet, ImageBackground, View} from 'react-native';
import React from 'react';
import {Box, Text} from 'native-base';
import Button from '../../Components/Button';
import {colors} from '../../Constant/colors';
const image = {
  uri: 'https://static.toiimg.com/photo/80482428/2-Rohit-Khandelwal.jpg',
};
const Cover = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.textContainer}>
          <Text fontSize={50} fontWeight="bold" color={'white'}>
            Givenchy
          </Text>
          <Text fontSize={25} fontWeight="medium" color={'white'}>
            The latest drop
          </Text>
          <Box
            w={'100%'}
            marginTop={10}
            alignItems={'center'}
            justifyContent={'center'}>
            <Button.Plain background={colors.white} width={200}>
              <Text color={colors.black} fontWeight="bold">
                SHOP NOW
              </Text>
            </Button.Plain>
          </Box>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Cover;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textContainer: {
    backgroundColor: '#000000c0',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
});
