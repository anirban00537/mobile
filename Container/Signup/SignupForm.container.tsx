import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Input} from 'native-base';
import Button from '../../Components/Button/index';
import {colors} from '../../Constant/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useMutation} from 'react-query';
import {register} from '../../service/authentication';
import useStatushandle from '../../hooks/useStatushandle';

const SignupForm = () => {
  const navigation: any = useNavigation();
  const {setError, setSuccess} = useStatushandle();
  const [user, setUser] = React.useState<any>({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const {mutate, isLoading} = useMutation(register, {
    onSuccess: async (data: any) => {
      await setSuccess('Registration Successful');
      await setUser({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
      });
      navigation.navigate('Login', {});
    },
    onError: (data: any) => {
      setError(data?.response?.data?.message);
    },
  });
  const handleSubmit = async () => {
    await mutate({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password,
    });
  };
  return (
    <ScrollView style={styles.container}>
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
        placeholder="First Name"
        type="text"
        value={user.first_name}
        onChangeText={text => setUser({...user, first_name: text})}
        style={styles.input}
      />
      <Input
        size="2xl"
        variant="unstyled"
        placeholder="Last Name"
        type="text"
        value={user.last_name}
        onChangeText={text => setUser({...user, last_name: text})}
        style={styles.input}
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
      <Input
        size="2xl"
        variant="unstyled"
        placeholder="Confirm Password"
        type="password"
        value={user.confirm_password}
        onChangeText={text => setUser({...user, confirm_password: text})}
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

      <Button.Loading
        icon={<Icon name="sign-in" size={20} color={colors.white} />}
        background={colors.primary}
        isLoading={isLoading}
        onPress={handleSubmit}
        margin={0}>
        Signup
      </Button.Loading>
    </ScrollView>
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
    marginBottom: 20,
  },
  icon: {
    color: colors.primary,
    fontSize: 15,
    marginLeft: 10,
  },
});
