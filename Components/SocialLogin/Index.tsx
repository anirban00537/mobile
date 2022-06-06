import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../Constant/colors';
const SocialLogin = ({text}: any) => {
  return (
    <View style={styles.mainContainer}>
      <Text>{text}</Text>
      <View style={styles.container}>
        <View style={styles.socialContainer}>
          <Icon
            name="facebook"
            size={30}
            style={styles.icon}
            color={colors.facebook}
          />
        </View>
        <View style={styles.socialContainer}>
          <Icon
            name="google"
            size={30}
            style={styles.icon}
            color={colors.facebook}
          />
        </View>
        <View style={styles.socialContainer}>
          <Icon
            name="twitter"
            size={30}
            style={styles.icon}
            color={colors.facebook}
          />
        </View>
      </View>
    </View>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  socialContainer: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'column',
  },
  icon: {
    marginLeft: 10,
  },
});
