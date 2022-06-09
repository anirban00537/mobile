import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../Constant/colors';
import SocialLogin from '../Components/SocialLogin/Index';
import SignupForm from '../Container/Signup/SignupForm.container';

const Signup = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <View>
        <Text style={styles.largeText}>Signup</Text>
        <SignupForm />
      </View>
      <SocialLogin text="Or Signup With" />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: '100%',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  largeText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.black,
    marginTop: 20,
    marginBottom: 20,
  },
});
