import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { FAB, Card, Title, Paragraph, Button } from 'react-native-paper';
import { LogInfo } from '../class/LogInfo';
import LogCard from '../components/LogCard';
import { RouteParam } from '../class/RouteParam';

const logInfoListInit: LogInfo[] = [
  new LogInfo({ date: new Date("6/30/2021").toLocaleDateString(), country: "Japan", location: "Ose", point: "Wannai" }),
  new LogInfo({ date: new Date().toLocaleDateString(), country: "Japan", location: "Ose", point: "Wannai" }),
]

const LogList = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RouteParam, "LogInfo">>();
  const [logInfoList, setLogInfoList] = useState(logInfoListInit);

  useEffect(() => {
    if (route.params == null || route.params.logInfo === undefined || route.params.logInfo == null) {
      return;
    }

    const target = logInfoList.find(logInfo => logInfo.id === route.params.logInfo.id);
    if (target === undefined) {
      setLogInfoList([...logInfoList, route.params.logInfo])
    } else {
      target.update(route.params.logInfo);
      const tmp = [...logInfoList];
      const index = tmp.findIndex(e => e.id === target.id);
      tmp[index] = target;
      setLogInfoList(tmp)
    }
  }, [route.params]);

  const onPressEditButton = () => {
    navigation.navigate('LogEdition');
  };

  return (
    <View style={styles.view}>
      <FlatList
        data={logInfoList}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => {
          return <LogCard logInfo={item} />
        }}
        numColumns={2}
        contentContainerStyle={styles.listContainer} />
      <FAB small icon="plus" style={styles.fab} onPress={() => onPressEditButton()} />
    </View>

  );
}

export default LogList;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
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
