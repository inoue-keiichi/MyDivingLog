import React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { InputField } from '../../model/logInfo/InputField';
import DatePicker from './picker/DatePicker';
import TimePicker from './picker/TimePicker';

interface Props {
  inputType: InputField;
  value?: string;
  handler: (text: string) => void;
}

const LogInput: React.FC<Props> = ({ inputType, handler }) => {
  switch (inputType.pattern) {
    case 'text':
      return (
        <TextInput
          mode="outlined"
          value={inputType.value}
          label={inputType.label}
          style={styles.textInput}
          onChangeText={text => {
            handler(text);
          }}
        />
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
          keyboardType="number-pad"
          value={inputType.value}
          label={inputType.label}
          style={styles.textInput}
          onChangeText={text => {
            handler(text);
          }}
        />
      );
    case 'decimal':
      return (
        <TextInput
          mode="outlined"
          keyboardType="decimal-pad"
          value={inputType.value}
          label={inputType.label}
          style={styles.textInput}
          onChangeText={text => {
            handler(text);
          }}
        />
      );
    default:
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

export default LogInput;
