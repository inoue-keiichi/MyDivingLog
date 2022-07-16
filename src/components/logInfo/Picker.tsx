import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Colors } from 'react-native-paper';
import { Props as PickerProps } from '../../model/logInfo/Picker';
import { StyleProp, TextStyle } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useDatePicker, useTimePicker } from '../../model/logInfo/Picker';

type Props = {
  value?: string;
  label: string;
  style: StyleProp<TextStyle>;
  onChangeText: (text: string) => void;
};

export const DatePicker: React.FC<Props> = (props: Props) => {
  const dateProps = useDatePicker(
    props.style,
    props.onChangeText,
    props.label,
    props.value,
  );
  return <Picker {...dateProps} />;
};

export const TimePicker: React.FC<Props> = (props: Props) => {
  const timeProps = useTimePicker(
    props.style,
    props.onChangeText,
    props.label,
    props.value,
  );
  return <Picker {...timeProps} />;
};

const Picker: React.FC<PickerProps> = (pickerProps: PickerProps) => {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <TextInput
        mode="outlined"
        value={pickerProps.state}
        label={pickerProps.label}
        editable={false}
        style={pickerProps.style}
        left={
          <TextInput.Icon
            name="calendar"
            style={styles.icon}
            onPress={pickerProps.showPicker}
          />
        }
        onChangeText={() => {
          pickerProps.onChangeText(pickerProps.state);
        }}
      />
      <DateTimePickerModal
        isVisible={pickerProps.stateVisible}
        mode={pickerProps.mode}
        locale="ja-JA"
        onConfirm={pickerProps.handleConfirm}
        onCancel={pickerProps.hidePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    alignItems: 'center',
    backgroundColor: Colors.lightBlue100,
  },
});
