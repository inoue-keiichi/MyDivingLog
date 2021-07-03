import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { FAB, TextInput, Button } from 'react-native-paper';

const DatePicker = (props: any) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date().toLocaleDateString());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    setDate(date.toLocaleDateString());
    hideDatePicker();
  };

  return (
    <View>
      <TextInput
        mode="outlined"
        editable={false}
        style={styles.textInput}
        left={<TextInput.Icon name="calendar" onPress={showDatePicker} />}
      >
        {date}
      </TextInput>
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
  view: {
    flex: 1,
    alignItems: 'center',
    //flexDirection: 'row'
  },
  fab: {
    bottom: 30,
    right: 30,
    position: 'absolute',
    backgroundColor: "skyblue",
  },
  textInput: {
    width: 150,
    height: 50,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5
  },
  listContainer: {
    flexGrow: 1,
    justifyContent: 'center'
  },
})

export default DatePicker;