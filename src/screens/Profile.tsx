import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Title, Surface } from 'react-native-paper';
import i18n from '../i18n/initI18n';

interface HistoryInfo {
  dives: HistoryInfoElement,
  totalMinutes: HistoryInfoElement,
  maxDepth: HistoryInfoElement,
  maxMinutes: HistoryInfoElement
}

interface HistoryInfoElement {
  label: string,
  value: string
}

function Profile({ navigation }) {
  const historyInfo: HistoryInfo = {
    dives: {
      label: i18n.t("profile.dives"),
      value: i18n.t("profile.divesValue", { v: 13 }),
    },
    totalMinutes: {
      label: i18n.t("profile.totalTime"),
      value: i18n.t("profile.totalTimeValue", { v: 100 }),
    },
    maxDepth: {
      label: i18n.t("profile.maxDepth"),
      value: i18n.t("profile.maxDepthValue", { v: 40 }),
    },
    maxMinutes: {
      label: i18n.t("profile.maxTime"),
      value: i18n.t("profile.maxTimeValue", { v: 70 }),
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Surface style={styles.surface}>
        <Title style={[styles.title, { flex: 1 }]}>{i18n.t("profile.history")}</Title>
        <View style={{ flex: 2, flexDirection: "row", alignItems: "center" }}>
          <View style={[styles.view, { flex: 1, alignItems: "center" }]}>
            <Text style={styles.label}>{historyInfo.dives.label}</Text>
            <Text style={styles.value}>{historyInfo.dives.value}</Text>
          </View>
          <View style={[styles.view, { flex: 2, alignItems: "center" }]}>
            <Text style={styles.label}>{historyInfo.totalMinutes.label}</Text>
            <Text style={styles.value}>{historyInfo.totalMinutes.value}</Text>
          </View>
        </View>
        <View style={{ flex: 3, flexDirection: "row", alignItems: "center" }}>
          <View style={[styles.view, { flex: 1, alignItems: "center" }]}>
            <Text style={styles.label}>{historyInfo.maxDepth.label}</Text>
            <Text style={styles.value}>{historyInfo.maxDepth.value}</Text>
          </View>
          <View style={[styles.view, { flex: 2, alignItems: "center" }]}>
            <Text style={styles.label}>{historyInfo.maxMinutes.label}</Text>
            <Text style={styles.value}>{historyInfo.maxMinutes.value}</Text>
          </View>
        </View>
      </Surface>
    </View>
  );
}

const ITEM_WIDTH = Dimensions.get('window').width
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30
  },
  view: {
    flexGrow: 1,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 30
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  value: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  surface: {
    marginTop: 100,
    paddingTop: 10,
    width: ITEM_WIDTH / 1.1,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    borderRadius: 8,
  },
})

export default Profile;
