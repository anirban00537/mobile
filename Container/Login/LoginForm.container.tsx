import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Button, Input} from 'native-base';
import {colors} from '../../Constant/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useMutation, useQueryClient} from 'react-query';
import {login} from '../../service/authentication';
const LoginForm = () => {
  const navigation: any = useNavigation();
  const queryClient = useQueryClient();
  const [user, setUser] = React.useState<any>({
    email: '',
    password: '',
  });
  const {mutate, isLoading} = useMutation(login, {
    onSuccess: data => {
      console.log(data, 'success');
      const message = 'success';
    },
    onError: data => {
      console.log(data, 'error');
    },
    onSettled: () => {
      queryClient.invalidateQueries('create');
    },
  });
  const handleSubmit = () => {
    mutate(user);
  };

  return (
    <View style={styles.container}>
      <Input
        size="2xl"
        variant="unstyled"
        placeholder="Email"
        style={styles.input}
        value={user.email}
        onChangeText={text => setUser({...user, email: text})}
      />
      <Input
        size="2xl"
        variant="unstyled"
        placeholder="Password"
        type="password"
        value={user.password}
        onChangeText={text => setUser({...user, password: text})}
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.forgetContainer}
        onPress={() => {
          navigation.navigate('Signup', {});
        }}>
        <Text style={styles.text}>Dont have an account?</Text>
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
        marginTop={5}
        onPress={handleSubmit}>
        Login
      </Button>
    </View>
  );
};

export default LoginForm;

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
