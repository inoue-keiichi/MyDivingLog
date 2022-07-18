import React from 'react';
import { Radio } from 'native-base';

type RadioProps<T> = {
  value: T;
  children?: React.ReactNode;
};

export const GenericRadio = <T extends string>(props: RadioProps<T>) => {
  return (
    <Radio value={props.value} my={1}>
      {props.children}
    </Radio>
  );
};

type RadioGroupProps<T> = {
  defaultValue?: T;
  onChange: (nextValue: T) => void;
  children?: React.ReactNode;
};

export const GenericRadioGroup = <T extends string>(
  props: RadioGroupProps<T>,
) => {
  return (
    <Radio.Group
      name="divingPointType"
      accessibilityLabel="pick a size"
      defaultValue={props.defaultValue}
      onChange={nextValue => {
        props.onChange(nextValue as T);
      }}>
      {props.children}
    </Radio.Group>
  );
};
