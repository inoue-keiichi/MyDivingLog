import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import Picker from './Picker';
import { useTimePicker } from '../../../model/logInfo/Picker';

type Props = {
  value?: string;
  label: string;
  style: StyleProp<TextStyle>;
  onChangeText: (text: string) => void;
};

const TimePicker: React.FC<Props> = ({ value, label, style, onChangeText }) => {
  const props = useTimePicker(style, onChangeText, label, value);
  return <Picker {...props} />;
};

export default TimePicker;
