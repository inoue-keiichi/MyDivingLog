// import React, { useState } from 'react';
// import { View, Text, StyleSheet, ScrollView, FlatList, Button } from 'react-native';
// import { useRoute, useNavigation } from '@react-navigation/native';
// import { FAB, TextInput } from 'react-native-paper';
// import { Item } from 'react-native-paper/lib/typescript/components/List/List';
// import DateTimePickerModal from "react-native-modal-datetime-picker";

// const DatePicker = () => {
//   return (
//     <View>
//       <FAB
//         small icon="plus"
//         onPress={() => { }} />
//       <DateTimePickerModal
//         isVisible={false}
//         mode="date"
//         onConfirm={() => { }}
//         onCancel={() => { }}
//       />
//     </View>);
// }

// export default DatePicker;

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { FAB, TextInput, Button } from 'react-native-paper';

const DatePicker = (props) => {
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
        //label={props.label}
        editable={false}
        style={styles.textInput}
        left={<TextInput.Icon name="calendar" onPress={showDatePicker} />}
      >
        {date}
      </TextInput>
      {/* <Button icon="calendar" mode='outlined' style={styles.textInput} onPress={showDatePicker}>
        {text}
      </Button> */}
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