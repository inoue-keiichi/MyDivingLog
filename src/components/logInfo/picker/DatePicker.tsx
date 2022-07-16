import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { useDatePicker } from '../../../model/logInfo/Picker';
import Picker from './Picker';

type Props = {
  value?: string;
  label: string;
  style: StyleProp<TextStyle>;
  onChangeText: (text: string) => void;
};

const DatePicker: React.FC<Props> = ({ value, label, style, onChangeText }) => {
  const props = useDatePicker(style, onChangeText, label, value);
  return <Picker {...props} />;
};

export default DatePicker;
