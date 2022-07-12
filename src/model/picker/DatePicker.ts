import { useState } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { InputField } from '../../class/InputField';
import { PickerProps } from '../../components/logInfo/picker/PickerProps';

// class DatePicker implements PickerHooks {
//   private _inputField: InputField;
//   private _value?: string;

//   constructor(inputField: InputField, value?: string) {
//     this._inputField = inputField;
//     this._value = value;
//   }

//   get inputField(): InputField {
//     return this._inputField;
//   }

//   get value(): string | undefined {
//     return this._value;
//   }

//   showPicker = (): void => {};
//   hidePicker = (): void => {};
//   handleConfirm = (text: string) => {};
// }

export const useDatePicker = (
  style: StyleProp<TextStyle>,
  onChangeText: (text: string) => void,
  label: string,
  value?: string,
): PickerProps => {
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

  return {
    label,
    style,
    state,
    stateVisible,
    showPicker,
    hidePicker,
    onChangeText,
    handleConfirm,
  };
};
