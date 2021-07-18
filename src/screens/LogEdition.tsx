

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Button } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { FAB, TextInput } from 'react-native-paper';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import DatePicker from "../components/DatePicker";
import { InputType, Name } from "../class/InputType";
import { LogInfo } from '../class/LogInfo';
import { RouteParam } from '../class/RouteParam';
import LogEditionElement from '../components/LogEditionElement';

const LogEdition = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RouteParam, "LogInfo">>();

  const logInfoInit: Partial<LogInfo> = route.params == null ? new LogInfo({}) : route.params.logInfo;
  const [logInfo, setLogInfo] = useState(logInfoInit);



  // useEffect(() => {
  //   if (route.params == null || route.params.logInfo == null) {
  //     return;
  //   }
  //   setLogInfo(route.params.logInfo);
  //   alert(JSON.stringify(route.params.logInfo));
  // }, [logInfo]);




  const data = {};

  const onPressEditButton = () => {
    navigation.navigate('LogCustomization', { data });
  };

  const update = () => {
    //const result = logInfo.location != null ? new LogInfo(logInfo) : null;
    navigation.navigate('LogList', { logInfo: logInfo });
  };

  const inputTypeList: InputType[] = [
    new InputType("country", "text"),
    new InputType("date", "date"),
    new InputType("location", "text"),
    new InputType("point", "text"),
  ]



  return (
    <View style={{ padding: 10, flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={inputTypeList}
          keyExtractor={item => `${item.name}`}
          renderItem={({ item }) => {
            return <LogEditionElement inputType={item} value={logInfo[item.name] as string} logInfo={logInfo}
              handler={(text: string) => {
                setLogInfo(new LogInfo({ ...logInfo, [item.name]: text }));

                //alert(JSON.stringify(logInfo))
              }}
            />
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
