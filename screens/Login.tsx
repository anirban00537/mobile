import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../Constant/colors';
import LoginForm from '../Container/Login/LoginForm.container';

const Login = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <Text style={styles.largeText}>Login</Text>
      <LoginForm />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: '100%',
  },
  largeText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.black,
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
  },
});
