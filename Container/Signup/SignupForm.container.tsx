import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Button, Input} from 'native-base';
import {colors} from '../../Constant/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const SignupForm = () => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <Input
        size="2xl"
        variant="unstyled"
        placeholder="Email"
        style={styles.input}
      />
      <Input
        size="2xl"
        variant="unstyled"
        placeholder="Name"
        type="text"
        onChange={() => {
          console.log('changed');
        }}
        style={styles.input}
      />
      <Input
        size="2xl"
        variant="unstyled"
        placeholder="Password"
        type="password"
        onChange={() => {
          console.log('changed');
        }}
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.forgetContainer}
        onPress={() => {
          navigation.navigate('Login', {});
        }}>
        <Text style={styles.text}>Already have an account?</Text>
        <Icon
          name="arrow-right"
          size={20}
          style={styles.icon}
          color={colors.gray}
        />
      </TouchableOpacity>
      <Button
        leftIcon={<Icon name="sign-in" size={20} color={colors.white} />}
        colorScheme="dark"
        background={colors.primary}
        marginTop={5}>
        Signup
      </Button>
    </View>
  );
};

export default SignupForm;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 40,
  },
  input: {
    backgroundColor: colors.grayLight,
    marginTop: 20,
  },
  text: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
    // marginTop: 20,
  },
  forgetContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icon: {
    color: colors.primary,
    fontSize: 15,
    marginLeft: 10,
  },
});
