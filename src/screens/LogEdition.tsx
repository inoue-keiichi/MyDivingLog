import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { FAB } from 'react-native-paper';
import { LogInfo } from '../model/logInfo/LogInfo';
import { RouteParam } from '../model/RouteParam';
import i18n from '../i18n/initI18n';
import { DatePicker, TimePicker } from '../components/logInfo/Picker';
import { ScrollView } from 'react-native-gesture-handler';
import { Divider, Select as SelectBase, Radio, Stack } from 'native-base';
import { TextInput } from '../components/logInfo/TextInput';
import { Select } from '../components/logInfo/Select';

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

  return (
    <View style={{ flex: 1, padding: 5 }}>
      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
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
            value={`${logInfo.country}`}
            label={i18n.t(`log.country`)}
            style={styles.textInput}
            onChangeText={text => {
              setLogInfo(new LogInfo({ ...logInfo, country: text }));
            }}
          />
          <TextInput
            value={`${logInfo.location}`}
            label={i18n.t(`log.location`)}
            style={styles.textInput}
            onChangeText={text => {
              setLogInfo(new LogInfo({ ...logInfo, location: text }));
            }}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            value={`${logInfo.point}`}
            label={i18n.t(`log.point.title`)}
            style={styles.textInput}
            onChangeText={text => {
              setLogInfo(new LogInfo({ ...logInfo, point: text }));
            }}
          />
          <View style={styles.textInput}>
            <Radio.Group
              name="exampleGroup"
              defaultValue="1"
              accessibilityLabel="pick a size">
              <Stack direction="row" space={4} w="75%" maxW="300px">
                <Radio value="1" my={1}>
                  {i18n.t(`log.point.type.beach`)}
                </Radio>
                <Radio value="2" my={1}>
                  {i18n.t(`log.point.type.boat`)}
                </Radio>
              </Stack>
            </Radio.Group>
          </View>
        </View>
        <Divider my="5" />
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
        <View style={{ flexDirection: 'row' }}>
          <Select<'3mm' | '5mm' | 'dry'>
            label={i18n.t('log.suit.title')}
            style={styles.textInput}
            selectedValue={logInfo.suit}
            onValueChange={text => {
              setLogInfo(
                new LogInfo({
                  ...logInfo,
                  suit: text,
                }),
              );
            }}>
            <SelectBase.Item label={i18n.t('log.suit.item._3mm')} value="3mm" />
            <SelectBase.Item label={i18n.t('log.suit.item._5mm')} value="5mm" />
            <SelectBase.Item label={i18n.t('log.suit.item.dry')} value="dry" />
          </Select>
          <TextInput
            value={logInfo.visibility ? `${logInfo.visibility}` : ''}
            label={i18n.t(`log.visibility`)}
            keyboardType="number-pad"
            style={styles.textInput}
            onChangeText={text => {
              setLogInfo(
                new LogInfo({ ...logInfo, visibility: parseInt(text) }),
              );
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
