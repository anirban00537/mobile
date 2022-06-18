import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Spinner} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useQuery} from 'react-query';
import {me} from '../service/authentication';

const AuthLayout = ({children}: any) => {
  const {data, isLoading, isError, refetch} = useQuery('check', me);
  console.log(data, 'data');
  return <>{children}</>;
};

export default AuthLayout;

const styles = StyleSheet.create({});
