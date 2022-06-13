import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../Constant/colors';
import LoginForm from '../Container/Login/LoginForm.container';
import SocialLogin from '../Components/SocialLogin/Index';
import {useQuery} from 'react-query';
import {check} from '../service/authentication';
const Login = () => {
  const {data, isLoading, isError, refetch} = useQuery('check', check);
  console.log(data, 'datadatadatadata');
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <View>
        <Text style={styles.largeText}>Login</Text>
        <LoginForm />
      </View>
      <SocialLogin text="Or Login With" />
    </View>
  );
};

export default Login;

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
