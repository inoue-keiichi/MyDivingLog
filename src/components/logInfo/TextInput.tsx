import React from 'react';
import { View, KeyboardTypeOptions } from 'react-native';
import { StyleProp, TextStyle } from 'react-native';
import { IIconProps, Input, Text } from 'native-base';

type Props = {
  value?: string;
  label?: string;
  editable?: boolean;
  style?: StyleProp<TextStyle>;
  keyboardType?: KeyboardTypeOptions;
  InputRightElement?: JSX.Element | JSX.Element[] | undefined;
  onChangeText: (text: string) => void;
};

export const TextInput: React.FC<Props> = (props: Props) => {
  return (
    <View style={props.style}>
      {props.label ? <Text fontSize="sm">{props.label}</Text> : null}
      <Input
        value={props.value}
        editable={props.editable}
        size={'2xl'}
        variant="outline"
        bg="white"
        keyboardType={props.keyboardType}
        InputRightElement={props.InputRightElement}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

type IconButtonProps = {
  icon: Partial<IIconProps>;
  showPicker: () => void;
};
