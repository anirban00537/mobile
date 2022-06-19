import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Spinner} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useQuery} from 'react-query';
import {me} from '../service/authentication';
import {useDispatch} from 'react-redux';
import {login} from '../store/action/user';

const AuthLayout = ({children}: any) => {
  const dispatch: any = useDispatch();
  const {data, isLoading, isError, refetch, isSuccess} = useQuery('me', me);
  if (isSuccess) {
    dispatch(login(data.data));
  }

  return <>{children}</>;
};

export default AuthLayout;

const styles = StyleSheet.create({});
