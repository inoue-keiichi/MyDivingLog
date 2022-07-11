import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LogList from './LogList';
import LogEdition from './LogEdition';
import LogCustomization from './LogCustomization';
import i18n from '../i18n/initI18n';

const Stack = createStackNavigator();

function Log({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LogList"
        component={LogList}
        options={{
          title: i18n.t('log.list'),
          headerStyle: {
            backgroundColor: 'skyblue',
          },
        }}
      />
      <Stack.Screen
        name="LogEdition"
        component={LogEdition}
        options={{
          title: i18n.t('log.edition'),
          headerStyle: {
            backgroundColor: 'skyblue',
          },
        }}
      />
      <Stack.Screen
        name="LogCustomization"
        component={LogCustomization}
        options={{
          title: 'Log Customization',
          headerStyle: {
            backgroundColor: 'skyblue',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default Log;
