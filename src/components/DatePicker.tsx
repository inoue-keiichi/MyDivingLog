import React, { useState } from 'react';
import { View, StyleSheet, StyleProp, TextStyle } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { TextInput, Colors } from 'react-native-paper';

type Props = {
  value?: string;
  label: string;
  style: StyleProp<TextStyle>;
  onChangeText: (text: string) => void;
};

const DatePicker: React.FC<Props> = ({ value, label, style, onChangeText }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const dateInit = value == null ? new Date().toLocaleDateString() : value;
  const [date, setDate] = useState(dateInit);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (input: Date) => {
    setDate(input.toLocaleDateString());
    onChangeText(input.toLocaleDateString());
    hideDatePicker();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TextInput
        mode="outlined"
        value={date}
        label={label}
        editable={false}
        style={style}
        left={
          <TextInput.Icon
            name="calendar"
            style={styles.icon}
            onPress={showDatePicker}
          />
        }
        onChangeText={() => {
          onChangeText(date);
        }}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        locale="ja-JA"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
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

export default DatePicker;
