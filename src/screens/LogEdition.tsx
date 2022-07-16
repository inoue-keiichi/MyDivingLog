import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, FlatList, ColorValue } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { Button, Divider, FAB, TextInput, Text } from 'react-native-paper';
import { LogInfo } from '../model/logInfo/LogInfo';
import { RouteParam } from '../model/RouteParam';
import i18n from '../i18n/initI18n';
import { DatePicker, TimePicker } from '../components/logInfo/Picker';
import { ScrollView } from 'react-native-gesture-handler';

const LogEdition = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RouteParam, 'LogInfo'>>();

  const logInfoInit: LogInfo =
    route.params == null ? new LogInfo({}) : route.params.logInfo;
  const [logInfo, setLogInfo] = useState(logInfoInit);

  const onPressEditButton = () => {
    navigation.navigate('LogCustomization');
  };

  const update = () => {
    navigation.navigate('LogList', { logInfo: logInfo });
  };

  // const inputTypeList: InputField[] = [
  //   new InputField('diveNumber', 'number', `${logInfo.id}`),
  //   new InputField('date', 'date', logInfo.date),
  //   new InputField('country', 'text', logInfo.country),
  //   new InputField('location', 'text', logInfo.location),
  //   new InputField('point', 'text', logInfo.point),
  //   new InputField('entryTime', 'time', logInfo.entryTime),
  //   new InputField('exitTime', 'time', logInfo.exitTime),
  //   new InputField(
  //     'maxDepth',
  //     'decimal',
  //     logInfo.maxDepth ? `${logInfo.maxDepth}` : undefined,
  //   ),
  // ];

  return (
    <View style={{ flex: 1, padding: 5 }}>
      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            mode="outlined"
            value={`${logInfo.id}`}
            label={i18n.t(`log.diveNumber`)}
            keyboardType={'number-pad'}
            style={styles.textInput}
            onChangeText={text => {
              setLogInfo(new LogInfo({ ...logInfo, id: parseInt(text) }));
            }}
          />
          <DatePicker
            value={logInfo.date}
            label={i18n.t(`log.date`)}
            style={styles.textInput}
            onChangeText={text => {
              setLogInfo(new LogInfo({ ...logInfo, date: text }));
            }}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            mode="outlined"
            value={`${logInfo.country}`}
            label={i18n.t(`log.country`)}
            style={styles.textInput}
            onChangeText={text => {
              setLogInfo(new LogInfo({ ...logInfo, country: text }));
            }}
          />
          <TextInput
            mode="outlined"
            value={`${logInfo.location}`}
            label={i18n.t(`log.location`)}
            style={styles.textInput}
            onChangeText={text => {
              setLogInfo(new LogInfo({ ...logInfo, location: text }));
            }}
          />
          <TextInput
            mode="outlined"
            value={`${logInfo.point}`}
            label={i18n.t(`log.point`)}
            style={styles.textInput}
            onChangeText={text => {
              setLogInfo(new LogInfo({ ...logInfo, point: text }));
            }}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TimePicker
            value={logInfo.entryTime}
            label={i18n.t(`log.entryTime`)}
            style={styles.textInput}
            onChangeText={text => {
              setLogInfo(new LogInfo({ ...logInfo, entryTime: text }));
            }}
          />
          <TimePicker
            value={logInfo.exitTime}
            label={i18n.t(`log.exitTime`)}
            style={styles.textInput}
            onChangeText={text => {
              setLogInfo(new LogInfo({ ...logInfo, exitTime: text }));
            }}
          />
        </View>
      </ScrollView>
      <FAB
        icon="content-save"
        style={[styles.fab, { right: 30 }]}
        onPress={() => update()}
      />
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
    // width: 150,
    // height: 50,
    flex: 1,
    marginTop: 5,
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
