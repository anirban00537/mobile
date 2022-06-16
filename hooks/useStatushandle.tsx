import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {Box, Button, Text, Center, useToast} from 'native-base';

const useStatushandle = () => {
  const toast = useToast();
  const [error, setError] = React.useState<any>('');
  const [success, setSuccess] = React.useState<any>('');
  useEffect(() => {
    if (error) {
      toast.show({
        render: () => {
          return (
            <Box bg="red.500" px="2" py="1" rounded="sm" mb={5}>
              <Text color={'white'} fontSize="sm">
                {error}
              </Text>
            </Box>
          );
        },
      });
      setError('');
    }
    if (success) {
      toast.show({
        render: () => {
          return (
            <Box bg="green.500" px="2" py="1" rounded="sm" mb={5}>
              {success}
            </Box>
          );
        },
      });
      setSuccess('');
    }
  }, [error, success]);

  return {
    error,
    success,
    setError,
    setSuccess,
  };
};

export default useStatushandle;

const styles = StyleSheet.create({});
