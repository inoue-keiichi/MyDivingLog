import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { FAB } from 'react-native-paper';

function LogList() {
  const navigation = useNavigation();

  const data = {};

  const onPressEditButton = () => {
    navigation.navigate('LogEdition', { data });
  };

  return (
    <View style={styles.view}>
      <FAB small icon="plus" style={styles.fab} onPress={() => onPressEditButton()} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  fab: {
    bottom: 30,
    right: 30,
    position: 'absolute',
    backgroundColor: "skyblue",
  },
})

export default LogList;
