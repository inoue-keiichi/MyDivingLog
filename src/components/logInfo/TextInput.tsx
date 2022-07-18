import React from 'react';
import { View, KeyboardTypeOptions } from 'react-native';
import { StyleProp, TextStyle } from 'react-native';
import { Input, Text } from 'native-base';

type Props = {
  value?: string;
  label?: string;
  style: StyleProp<TextStyle>;
  keyboardType?: KeyboardTypeOptions;
  onChangeText: (text: string) => void;
};

export const TextInput: React.FC<Props> = (props: Props) => {
  return (
    <View style={props.style}>
      <Text fontSize="sm">{props.label}</Text>
      <Input
        value={props.value}
        size={'2xl'}
        variant="outline"
        bg="white"
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};
