import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function LogCustomization({ navigation }) {
  return (
    <View style={styles.view}>
      <Text>Log Customization</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default LogCustomization;
