import React from 'react';
import { View } from 'react-native';
import { StyleProp, TextStyle } from 'react-native';
import { CheckIcon, Select as SelectBase, Text } from 'native-base';

type Props<T> = {
  selectedValue?: T;
  label: string;
  style: StyleProp<TextStyle>;
  onValueChange: (text: T) => void;
  children?: React.ReactNode;
};

export const Select = <T extends string>(props: Props<T>) => {
  return (
    <View style={props.style}>
      <Text fontSize="sm">{props.label}</Text>
      <SelectBase
        size={'2xl'}
        variant="outline"
        bg="white"
        selectedValue={props.selectedValue}
        _selectedItem={{
          endIcon: <CheckIcon size="5" />,
        }}
        onValueChange={text => {
          props.onValueChange(text as T);
        }}>
        {props.children}
      </SelectBase>
    </View>
  );
};
