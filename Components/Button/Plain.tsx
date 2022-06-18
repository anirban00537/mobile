import {Button, Input, Spinner} from 'native-base';
import React from 'react';

const Plain = ({
  children,
  disabled,
  background,
  margin,
  onPress,
  width,
}: any) => {
  return (
    <Button
      disabled={disabled ? disabled : false}
      margin={margin ? margin : 0}
      background={background}
      width={width ? width : '100%'}
      onPress={onPress}>
      {children}
    </Button>
  );
};

export default Plain;
