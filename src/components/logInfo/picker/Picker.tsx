import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Colors } from 'react-native-paper';
import { Props } from '../../../model/logInfo/Picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Picker: React.FC<Props> = (props: Props) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TextInput
        mode="outlined"
        value={props.state}
        label={props.label}
        editable={false}
        style={props.style}
        left={
          <TextInput.Icon
            name="calendar"
            style={styles.icon}
            onPress={props.showPicker}
          />
        }
        onChangeText={() => {
          props.onChangeText(props.state);
        }}
      />
      <DateTimePickerModal
        isVisible={props.stateVisible}
        mode={props.mode}
        locale="ja-JA"
        onConfirm={props.handleConfirm}
        onCancel={props.hidePicker}
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

export default Picker;
