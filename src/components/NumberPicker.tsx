import React, { useState } from 'react';
import { View, StyleSheet, StyleProp, TextStyle } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { TextInput, Colors } from 'react-native-paper';

type Props = {};

const NumberPicker: React.FC<Props> = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [number, setNumber] = useState(10);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      {/* <TextInput
        mode="outlined"
        value={date}
        label={label}
        editable={false}
        style={style}
        left={<TextInput.Icon name="calendar" style={styles.icon} onPress={showDatePicker} />}
        onChangeText={() => { onChangeText(date) }}
      /> */}
      <Picker
        selectedValue={10}
        onValueChange={itemValue => setNumber(itemValue)}>
        <Picker.Item label="アプリ開発" value={1} />
        <Picker.Item label="インフラ構築" value={2} />
        <Picker.Item label="メディア運営" value={3} />
        <Picker.Item label="Webデザイン" value={4} />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    alignItems: 'center',
    backgroundColor: Colors.lightBlue100,
  },
});

export default NumberPicker;
