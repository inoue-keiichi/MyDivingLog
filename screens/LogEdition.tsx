

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { FAB, TextInput } from 'react-native-paper';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import DatePicker from "../components/DatePicker";

function LogEdition() {
  const navigation = useNavigation();

  const data = {};

  const onPressEditButton = () => {
    navigation.navigate('LogCustomization', { data });
  };

  const hoge: InputType[] = [
    {
      label: "Country",
      pattern: "text"
    },
    {
      label: "Date",
      pattern: "date"
    },
    {
      label: "Location",
      pattern: "text"
    },
    {
      label: "Point",
      pattern: "text"
    }
  ]

  return (
    <View style={styles.view}>
      <FlatList
        data={hoge}
        //keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => {
          return createElement(item);
        }}
        numColumns={2}
        contentContainerStyle={styles.listContainer} />
      <FAB small icon="table-edit" style={styles.fab} onPress={() => onPressEditButton()} />
    </View>
  );
}

function createElement(inputType: InputType): JSX.Element {
  switch (inputType.pattern) {
    case 'text':
      return (
        <View>
          <TextInput
            mode="outlined"
            label={inputType.label}
            style={styles.textInput}
          />
        </View>
      );
    case 'date':
      return (
        <DatePicker label={inputType.label} />
      );
    default:
      return (
        <TextInput
          mode="outlined"
          label={inputType.label}
          style={styles.textInput}
        />
      );
  }
}

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

export default LogEdition;
