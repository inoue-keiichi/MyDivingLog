import React from 'react';
import { TextInput } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { InputField } from '../class/InputField';
import DatePicker from '../components/DatePicker';
import TimePicker from './TimePicker';

interface Props {
  inputType: InputField;
  value?: string;
  handler: (text: string) => void;
}

const LogEditionElement: React.FC<Props> = ({ inputType, handler }) => {
  switch (inputType.pattern) {
    case 'text':
      return (
        <View>
          <TextInput
            mode="outlined"
            value={inputType.value}
            label={inputType.label}
            style={styles.textInput}
            onChangeText={text => {
              handler(text);
            }}
          />
        </View>
      );
    case 'date':
      return (
        <DatePicker
          value={inputType.value}
          label={inputType.label}
          style={styles.textInput}
          onChangeText={text => {
            handler(text);
          }}
        />
      );
    case 'time':
      return (
        <TimePicker
          value={inputType.value}
          label={inputType.label}
          style={styles.textInput}
          onChangeText={text => {
            handler(text);
          }}
        />
      );
    case 'number':
      return (
        <TextInput
          mode="outlined"
          value={inputType.value}
          label={inputType.label}
          style={styles.textInput}
          keyboardType="number-pad"></TextInput>
      );
    case 'decimal':
      return (
        <TextInput
          mode="outlined"
          value={inputType.value}
          label={inputType.label}
          style={styles.textInput}
          keyboardType="decimal-pad"></TextInput>
      );
    default:
      console.log('transfer test');
      throw Error('not found input type field.');
  }
};

const styles = StyleSheet.create({
  textInput: {
    width: 150,
    height: 50,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  },
});

export default LogEditionElement;
