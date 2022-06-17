import React from 'react';
import {Button, Input, Spinner} from 'native-base';

const Loading = ({
  children,
  icon,
  disabled,
  isLoading,
  background,
  margin,
  onPress,
}: any) => {
  return isLoading ? (
    <Button
      disabled={true}
      margin={margin ? margin : 0}
      background={background}>
      <Spinner color="white" />
    </Button>
  ) : (
    <Button
      disabled={disabled ? disabled : false}
      leftIcon={icon}
      margin={margin ? margin : 0}
      background={background}
      onPress={onPress}>
      {children}
    </Button>
  );
};

export default Loading;
