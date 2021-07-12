

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { FAB, TextInput } from 'react-native-paper';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import DatePicker from "../components/DatePicker";
import { InputType } from "../class/InputType";
import { LogInfo } from '../class/LogInfo';

const LogEdition = () => {
  const navigation = useNavigation();
  const logInfoInit: Partial<LogInfo> = {};
  const [logInfo, setLogInfo] = useState(logInfoInit);

  const data = {};

  const onPressEditButton = () => {
    navigation.navigate('LogCustomization', { data });
  };

  const update = () => {
    const hhh: LogInfo = new LogInfo(logInfo);
    alert(JSON.stringify(hhh));
    navigation.navigate('LogList', { data });
  };

  const hoge: InputType[] = [
    new InputType("country", "text"),
    new InputType("date", "date"),
    new InputType("location", "text"),
    new InputType("point", "text"),
  ]

  const createElement = (inputType: InputType) => {
    switch (inputType.pattern) {
      case 'text':
        return (
          <View>
            <TextInput
              mode="outlined"
              label={inputType.label}
              style={styles.textInput}
              onChangeText={(text) => {
                logInfo[inputType.name] = text;
                setLogInfo(logInfo);
              }}
            />
          </View>
        );
      case 'date':
        return (
          <DatePicker
            label={inputType.label}
            onChangeText={(text: string) => {
              logInfo[inputType.name] = text;
              setLogInfo(logInfo);
            }}
          />
        );
      default:
        return (
          <TextInput
            mode="outlined"
            label={inputType.label}
            style={styles.textInput}
            onChangeText={(text) => {
              logInfo[inputType.name] = text;
              setLogInfo(logInfo);
            }}
          />
        );
    }
  }

  return (
    <View style={{ padding: 10, flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={hoge}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => {
            return createElement(item);
          }}
          numColumns={2}
          contentContainerStyle={styles.listContainer} />
        <FAB small icon="table-edit" style={styles.fab} onPress={() => onPressEditButton()} />
        <FAB small icon="camera" style={styles.fab2} onPress={() => update()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //margin: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "aliceblue",
    // flexDirection: 'row'
  },
  fab: {
    bottom: 30,
    right: 30,
    position: 'absolute',
    backgroundColor: "skyblue",
  },
  fab2: {
    bottom: 30,
    right: 90,
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
