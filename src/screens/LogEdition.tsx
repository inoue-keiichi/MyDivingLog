import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { FAB } from 'react-native-paper';
import { DivingType, LogInfo, Suit, Weather } from '../model/logInfo/LogInfo';
import { RouteParam } from '../model/RouteParam';
import i18n from '../i18n/initI18n';
import { DatePicker, TimePicker } from '../components/logInfo/Picker';
import { ScrollView } from 'react-native-gesture-handler';
import {
  Divider,
  Select as SelectBase,
  Text,
  Stack,
  Checkbox,
} from 'native-base';
import { TextInput } from '../components/logInfo/TextInput';
import {
  GenericSelect,
  GenericSelectItem,
} from '../components/logInfo/GenericSelect';
import { Ionicons } from '@expo/vector-icons';
import { Kind as TankKind, Tank } from '../model/logInfo/Tank';
import {
  GenericRadio,
  GenericRadioGroup,
} from '../components/logInfo/GenericRadio';

const LogEdition = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RouteParam, 'LogInfo'>>();

  const logInfoInit: LogInfo =
    route.params == null ? new LogInfo({}) : route.params.logInfo;
  const [logInfo, setLogInfo] = useState(logInfoInit);

  const onPressEditButton = () => {
    navigation.navigate('LogCustomization');
  };

  // TODO: パラメーター入力毎に logInfo のインスタンス作成するのやめた方がいい？
  const [daikon, setDaikon] = useState(logInfoInit.daikon);
  const [camera, setCamera] = useState(logInfoInit.camera);
  const [light, setLight] = useState(logInfoInit.light);

  const update = () => {
    const tmp = new LogInfo({ ...logInfo, daikon, camera, light });
    navigation.navigate('LogList', { logInfo: tmp });
  };

  const pressureItems: number[] = [];
  for (let i = 0; i <= 30; i++) {
    pressureItems.push(i * 10);
  }

  const createLocationView = () => {
    return (
      <View>
        <View style={styles.view}>
          <TextInput
            value={`${logInfo.id}`}
            label={i18n.t(`log.diveNumber`)}
            keyboardType={'number-pad'}
            style={styles.input}
            onChangeText={text => {
              setLogInfo(new LogInfo({ ...logInfo, id: parseInt(text) }));
            }}
          />
          <DatePicker
            value={logInfo.date}
            label={i18n.t(`log.date`)}
            style={styles.input}
            onChangeText={text => {
              setLogInfo(new LogInfo({ ...logInfo, date: text }));
            }}
          />
        </View>
        <View style={styles.view}>
          <TextInput
            value={`${logInfo.country}`}
            label={i18n.t(`log.country`)}
            style={styles.input}
            onChangeText={text => {
              setLogInfo(new LogInfo({ ...logInfo, country: text }));
            }}
          />
          <TextInput
            value={`${logInfo.location}`}
            label={i18n.t(`log.location`)}
            style={styles.input}
            onChangeText={text => {
              setLogInfo(new LogInfo({ ...logInfo, location: text }));
            }}
          />
        </View>
        <View style={styles.view}>
          <TextInput
            value={`${logInfo.point}`}
            label={i18n.t(`log.point.title`)}
            style={styles.input}
            onChangeText={text => {
              setLogInfo(new LogInfo({ ...logInfo, point: text }));
            }}
          />
          <View
            style={
              (styles.input,
              { justifyContent: 'center', backgroundColor: 'yellow' })
            }>
            <GenericRadioGroup<DivingType>
              defaultValue={logInfo.divingType}
              onChange={nextValue => {
                setLogInfo(new LogInfo({ ...logInfo, divingType: nextValue }));
              }}>
              <Stack direction="row" space={4}>
                <GenericRadio<DivingType> value="beach">
                  {i18n.t(`log.point.type.beach`)}
                </GenericRadio>
                <GenericRadio<DivingType> value="boat">
                  {i18n.t(`log.point.type.boat`)}
                </GenericRadio>
              </Stack>
            </GenericRadioGroup>
          </View>
        </View>
        <View style={styles.view}>
          <TextInput
            value={logInfo.shop}
            label={i18n.t(`log.shop`)}
            style={styles.input}
            onChangeText={text => {
              setLogInfo(new LogInfo({ ...logInfo, shop: text }));
            }}
          />
          <GenericSelect<Weather>
            label={i18n.t('log.weather.title')}
            style={styles.input}
            selectedValue={logInfo.weather}
            onValueChange={text => {
              setLogInfo(
                new LogInfo({
                  ...logInfo,
                  weather: text,
                }),
              );
            }}>
            <GenericSelectItem<Weather>
              key={'suuny'}
              leftIcon={<Ionicons name="sunny" size={24} color="orange" />}
              label={i18n.t('log.weather.item.sunny')}
              value="sunny"
            />
            <GenericSelectItem<Weather>
              key={'partly-sunny'}
              leftIcon={
                <Ionicons name="partly-sunny" size={24} color="wheat" />
              }
              label={i18n.t('log.weather.item.partlySunny')}
              value="partlySunny"
            />
            <GenericSelectItem<Weather>
              key={'cloudy'}
              leftIcon={<Ionicons name="cloudy" size={24} color="gray" />}
              label={i18n.t('log.weather.item.cloudy')}
              value="cloudy"
            />
            <GenericSelectItem<Weather>
              key={'rainy'}
              leftIcon={<Ionicons name="rainy" size={24} color="blue" />}
              label={i18n.t('log.weather.item.rainy')}
              value="rainy"
            />
            <GenericSelectItem<Weather>
              key={'snowy'}
              leftIcon={<Ionicons name="snow" size={24} color="skyblue" />}
              label={i18n.t('log.weather.item.snowy')}
              value="snowy"
            />
          </GenericSelect>
        </View>
      </View>
    );
  };

  const createSeaConditionView = () => {
    return (
      <View>
        <View style={styles.view}>
          <TimePicker
            value={logInfo.entryTime}
            label={i18n.t(`log.entryTime`)}
            style={styles.input}
            onChangeText={text => {
              setLogInfo(new LogInfo({ ...logInfo, entryTime: text }));
            }}
          />
          <TimePicker
            value={logInfo.exitTime}
            label={i18n.t(`log.exitTime`)}
            style={styles.input}
            onChangeText={text => {
              setLogInfo(new LogInfo({ ...logInfo, exitTime: text }));
            }}
          />
        </View>
        <View style={styles.view}>
          <GenericSelect<string>
            label={i18n.t('log.pressure.start')}
            style={styles.input}
            selectedValue={`${logInfo.tankStart}`}
            onValueChange={text => {
              setLogInfo(
                new LogInfo({
                  ...logInfo,
                  tankStart: parseInt(text),
                }),
              );
            }}>
            {pressureItems.map(num => (
              <GenericSelectItem<string>
                key={`pressure_start_${num}`}
                label={`${num}`}
                value={`${num}`}
              />
            ))}
          </GenericSelect>
          <GenericSelect<string>
            label={i18n.t('log.pressure.end')}
            style={styles.input}
            selectedValue={`${logInfo.tankEnd}`}
            onValueChange={text => {
              setLogInfo(
                new LogInfo({
                  ...logInfo,
                  tankEnd: parseInt(text),
                }),
              );
            }}>
            {pressureItems.map(num => (
              <GenericSelectItem<string>
                key={`pressure_end_${num}`}
                label={`${num}`}
                value={`${num}`}
              />
            ))}
          </GenericSelect>
        </View>
        <View style={styles.view}>
          <TextInput
            value={logInfo.waterTemp ? `${logInfo.waterTemp}` : ''}
            label={i18n.t(`log.waterTemp`)}
            keyboardType="number-pad"
            style={styles.input}
            onChangeText={text => {
              setLogInfo(
                new LogInfo({ ...logInfo, waterTemp: parseInt(text) }),
              );
            }}
          />
          <TextInput
            value={logInfo.visibility ? `${logInfo.visibility}` : ''}
            label={i18n.t(`log.visibility`)}
            keyboardType="number-pad"
            style={styles.input}
            onChangeText={text => {
              setLogInfo(
                new LogInfo({ ...logInfo, visibility: parseInt(text) }),
              );
            }}
          />
        </View>
      </View>
    );
  };

  const createEquipmentView = () => {
    return (
      <View>
        <View style={styles.view}>
          <GenericSelect<Suit>
            label={i18n.t('log.suit.title')}
            style={styles.input}
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
          </GenericSelect>
          <TextInput
            value={logInfo.waterTemp ? `${logInfo.waterTemp}` : ''}
            label={i18n.t(`log.weight`)}
            keyboardType="number-pad"
            style={styles.input}
            onChangeText={text => {
              setLogInfo(new LogInfo({ ...logInfo, weight: parseInt(text) }));
            }}
          />
        </View>
        <View style={styles.view}>
          <GenericSelect<TankKind>
            label={i18n.t('log.tank.title')}
            style={styles.input}
            selectedValue={logInfo.tank?.kind}
            onValueChange={text => {
              const tank = new Tank({ ...logInfo.tank, kind: text });
              setLogInfo(
                new LogInfo({
                  ...logInfo,
                  tank: tank,
                }),
              );
            }}>
            <GenericSelectItem<TankKind>
              key={'aluminum'}
              label={i18n.t('log.tank.kind.aluminum')}
              value="aluminum"
            />
            <GenericSelectItem<TankKind>
              key={'steel'}
              label={i18n.t('log.tank.kind.steel')}
              value="steel"
            />
            <GenericSelectItem<TankKind>
              key={'nitrox'}
              label={i18n.t('log.tank.kind.nitrox')}
              value="nitrox"
            />
          </GenericSelect>
          <TextInput
            value={logInfo.tank?.volume ? `${logInfo.tank.volume}` : ''}
            label={i18n.t(`log.tank.unit`)}
            keyboardType="number-pad"
            style={styles.input}
            onChangeText={text => {
              const tank = new Tank({
                ...logInfo.tank,
                volume: parseInt(text),
              });
              setLogInfo(
                new LogInfo({
                  ...logInfo,
                  tank: tank,
                }),
              );
            }}
          />
        </View>
        <View style={styles.view}>
          <Stack direction="row" space={4}>
            <Checkbox
              defaultIsChecked={daikon}
              value="daikon"
              size={'lg'}
              style={styles.checkBox}
              onChange={setDaikon}>
              <Ionicons name="watch" size={40} color="black" />
            </Checkbox>
            <Checkbox
              defaultIsChecked={camera}
              value="camera"
              size={'lg'}
              style={styles.checkBox}
              onChange={setCamera}>
              <Ionicons name="camera" size={40} color="black" />
            </Checkbox>
            <Checkbox
              defaultIsChecked={light}
              value="light"
              size={'lg'}
              style={styles.checkBox}
              onChange={setLight}>
              <Ionicons name="ios-flashlight-sharp" size={40} color="black" />
            </Checkbox>
          </Stack>
        </View>
      </View>
    );
  };

  const createBuddyView = () => {
    return <View></View>;
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, padding: 5 }}>
        {createLocationView()}
        <Divider my="5" />
        {createSeaConditionView()}
        <Divider my="5" />
        {createEquipmentView()}
        <Divider my="5" />
        {createBuddyView()}
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
  fab: {
    bottom: 30,
    position: 'absolute',
    backgroundColor: 'skyblue',
  },
  view: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  checkBox: {
    marginTop: 5,
    marginLeft: 5,
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
