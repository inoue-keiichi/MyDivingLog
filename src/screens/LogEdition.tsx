import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { Button, FAB, TextInput } from 'react-native-paper';
import { InputField } from '../class/InputField';
import { LogInfo } from '../class/LogInfo';
import { RouteParam } from '../class/RouteParam';
import LogEditionElement from '../components/LogEditionElement';
import { FontAwesome } from '@expo/vector-icons';
import NumberPicker from '../components/NumberPicker';
import { Picker } from '@react-native-picker/picker';

const LogEdition = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RouteParam, 'LogInfo'>>();

  const logInfoInit: Partial<LogInfo> =
    route.params == null ? new LogInfo({}) : route.params.logInfo;
  const [logInfo, setLogInfo] = useState(logInfoInit);

  // useEffect(() => {
  //   if (logInfo.entryTime == null || logInfo.exitTime == null) {
  //     return;
  //   }
  //   const intervalMinutes = calclateIntervalMinutes(logInfo.entryTime, logInfo.exitTime);
  //   setLogInfo(new LogInfo({ ...logInfo, intervalMinutes: intervalMinutes }));
  // }, [logInfo.entryTime, logInfo.exitTime]);

  const onPressEditButton = () => {
    navigation.navigate('LogCustomization');
  };

  const update = () => {
    navigation.navigate('LogList', { logInfo: logInfo });
  };

  const inputTypeList: InputField[] = [
    new InputField('diveNumber', 'number', `${logInfo.id}`),
    new InputField('date', 'date', logInfo.date),
    new InputField('country', 'text', logInfo.country),
    new InputField('location', 'text', logInfo.location),
    new InputField('point', 'text', logInfo.point),
    new InputField('entryTime', 'time', logInfo.entryTime),
    new InputField('exitTime', 'time', logInfo.exitTime),
    new InputField(
      'maxDepth',
      'decimal',
      logInfo.maxDepth ? `${logInfo.maxDepth}` : undefined,
    ),
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={inputTypeList}
        keyExtractor={item => `${item.name}`}
        renderItem={({ item }) => {
          return (
            <LogEditionElement
              inputType={item}
              handler={(text: string) => {
                setLogInfo(new LogInfo({ ...logInfo, [item.name]: text }));
              }}
            />
          );
        }}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
      <FAB
        icon="content-save"
        style={[styles.fab, { right: 30 }]}
        onPress={() => update()}
      />
      {/* <FAB icon="table-edit" style={[styles.fab, { right: 30 }]} onPress={() => onPressEditButton()} /> */}
      {/* <TextInput mode="outlined" keyboardType="decimal-pad"></TextInput> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fab: {
    bottom: 30,
    position: 'absolute',
    backgroundColor: 'skyblue',
  },
  listContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  textInput: {
    width: 150,
    height: 50,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  },
});

export default LogEdition;

// function calclateIntervalMinutes(entryTime: string, exitTime: string): number {
//   const entryTimeHour = parseInt(entryTime.slice(0, 2));
//   const entryTimeMinute = parseInt(entryTime.slice(-2));
//   const exitTimeHour = parseInt(exitTime.slice(0, 2));
//   const exitTimeMinute = parseInt(exitTime.slice(-2));
//   return (exitTimeHour - entryTimeHour) * 60 + (exitTimeMinute - entryTimeMinute);
// }
