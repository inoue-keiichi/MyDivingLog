import { StyleProp, TextStyle } from 'react-native';
import { InputField } from '../../../class/InputField';

export interface PickerProps {
  // inputField: InputField;
  // value?: string;
  label: string;
  style: StyleProp<TextStyle>;
  state: string;
  stateVisible: boolean;
  showPicker: () => void;
  hidePicker: () => void;
  onChangeText: (text: string) => void;
  handleConfirm: (input: Date) => void;
}
