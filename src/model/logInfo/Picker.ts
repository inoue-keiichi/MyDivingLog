import { FontAwesome } from '@expo/vector-icons';
import { IIconProps } from 'native-base';
import { useState } from 'react';
import { StyleProp, TextStyle } from 'react-native';

export interface Props {
  mode: 'time' | 'date';
  label: string;
  style: StyleProp<TextStyle>;
  state: string;
  stateVisible: boolean;
  icon: Partial<IIconProps>;
  showPicker: () => void;
  hidePicker: () => void;
  onChangeText: (text: string) => void;
  handleConfirm: (input: Date) => void;
}

export const useDatePicker = (
  style: StyleProp<TextStyle>,
  onChangeText: (text: string) => void,
  label: string,
  value?: string,
): Props => {
  const [stateVisible, setStateVisible] = useState(false);
  const stateInit = value == null ? new Date().toLocaleDateString() : value;
  const [state, setState] = useState(stateInit);

  const showPicker = () => {
    setStateVisible(true);
  };

  const hidePicker = () => {
    setStateVisible(false);
  };

  const handleConfirm = (input: Date) => {
    setState(input.toLocaleDateString());
    onChangeText(input.toLocaleDateString());
    hidePicker();
  };

  const icon = {
    as: FontAwesome,
    name: 'calendar',
  };

  return {
    mode: 'date',
    label,
    style,
    state,
    stateVisible,
    icon,
    showPicker,
    hidePicker,
    onChangeText,
    handleConfirm,
  };
};

export const useTimePicker = (
  style: StyleProp<TextStyle>,
  onChangeText: (text: string) => void,
  label: string,
  value?: string,
): Props => {
  const [stateVisible, setStateVisible] = useState(false);
  const stateInit = value == null ? '' : value;
  const [state, setState] = useState(stateInit);

  const showPicker = () => {
    setStateVisible(true);
  };

  const hidePicker = () => {
    setStateVisible(false);
  };

  const handleConfirm = (input: Date) => {
    setState(
      `${('0' + input.getHours()).slice(-2)}:${('0' + input.getMinutes()).slice(
        -2,
      )}`,
    );
    onChangeText(
      `${('0' + input.getHours()).slice(-2)}:${('0' + input.getMinutes()).slice(
        -2,
      )}`,
    );
    hidePicker();
  };

  const icon = {
    as: FontAwesome,
    name: 'clock-o',
  };

  return {
    mode: 'time',
    label,
    style,
    state,
    stateVisible,
    icon,
    showPicker,
    hidePicker,
    onChangeText,
    handleConfirm,
  };
};
