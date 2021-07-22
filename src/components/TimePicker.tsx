import React, { useState } from "react";
import { View, StyleSheet, StyleProp, TextStyle } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TextInput, Colors } from 'react-native-paper';

type Props = {
  value: string,
  label: string,
  style: StyleProp<TextStyle>
  onChangeText: (text: string) => void
}

const DatePicker: React.FC<Props> = ({ value, label, style, onChangeText }) => {
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const timeInit = value == null ? "" : value;
  const [time, setTime] = useState(timeInit);

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirm = (input: Date) => {
    setTime(`${input.getHours()}:${input.getMinutes()}`);
    onChangeText(`${input.getHours()}:${input.getMinutes()}`);
    hideTimePicker();
  };

  return (
    <View style={{ flexDirection: 'row', }}>
      <TextInput
        mode="outlined"
        value={time}
        label={label}
        editable={false}
        style={style}
        left={<TextInput.Icon name="av-timer" style={styles.icon}
          onPress={() => {
            showTimePicker();
          }} />}
        onChangeText={() => { onChangeText(time) }}
      >
      </TextInput>
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        locale="ja-JA"
        onConfirm={handleConfirm}
        onCancel={hideTimePicker}
      />
    </View >
  );
};

const styles = StyleSheet.create({
  icon: {
    alignItems: 'center',
    backgroundColor: Colors.lightBlue100
  }
})

export default DatePicker;
