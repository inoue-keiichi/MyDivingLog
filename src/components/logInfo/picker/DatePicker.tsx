import React, { useState } from 'react';
import { View, StyleSheet, StyleProp, TextStyle } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { TextInput, Colors } from 'react-native-paper';
import { InputField } from '../../../class/InputField';
import { useDatePicker } from '../../../model/picker/DatePicker';
import Picker from './Picker';
import { PickerProps } from './PickerProps';

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

// const styles = StyleSheet.create({
//   icon: {
//     alignItems: 'center',
//     backgroundColor: Colors.lightBlue100,
//   },
// });

export default DatePicker;
