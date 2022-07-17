import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';
import { Props as PickerProps } from '../../model/logInfo/Picker';
import { StyleProp, TextStyle } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useDatePicker, useTimePicker } from '../../model/logInfo/Picker';
import { Input, Text, IconButton } from 'native-base';

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
    <View style={pickerProps.style}>
      <Text fontSize="sm">{pickerProps.label}</Text>
      <Input
        size={'2xl'}
        variant="outline"
        bg="white"
        value={pickerProps.state}
        editable={false}
        InputRightElement={
          <IconButton
            _icon={pickerProps.icon}
            variant="solid"
            rounded="none"
            w="1/4"
            h="full"
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
