import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import { View, Dimensions, StyleSheet } from 'react-native';
import { LogInfo } from '../class/LogInfo';
import { InputType } from '../class/InputType';
import DatePicker from "../components/DatePicker";
import TimePicker from './TimePicker';

interface Props {
  inputType: InputType,
  value: string,
  logInfo: Partial<LogInfo>,
  handler: (text: string) => void
}

const LogEditionElement: React.FC<Props> = ({ inputType, value, logInfo, handler }) => {
  const isString = (item: any): item is string => typeof item === "string";
  switch (inputType.pattern) {
    case 'text':
      return (
        <View>
          <TextInput
            mode="outlined"
            value={logInfo[inputType.name] as string}
            label={inputType.label}
            style={styles.textInput}
            onChangeText={(text) => {
              handler(text);
            }}
          />
        </View>
      );
    case 'date':
      return (
        <DatePicker
          value={value}
          label={inputType.label}
          style={styles.textInput}
          onChangeText={(text) => {
            handler(text);
          }}
        />
      );
    case 'time':
      return (
        <TimePicker
          value={value}
          label={inputType.label}
          style={styles.textInput}
          onChangeText={(text) => {
            handler(text);
          }}
        />
      );
    default:
      return (
        <TextInput
          mode="outlined"
          label={inputType.label}
          style={styles.textInput}
          onChangeText={(text) => {
            //logInfo[inputType.name] = text;
            handler(text);
          }}
        />
      );
  }
}

const styles = StyleSheet.create({
  textInput: {
    width: 150,
    height: 50,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5
  }
})

export default LogEditionElement;