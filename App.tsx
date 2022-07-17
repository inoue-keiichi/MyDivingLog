import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Log from './src/screens/Log';
import Profile from './src/screens/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import i18n from './src/i18n/initI18n';
import { NativeBaseProvider, Text, Box } from 'native-base';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <PaperProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Log"
              component={Log}
              options={{
                tabBarLabel: i18n.t('log.title'),
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="book" size={32} color="green" />
                ),
              }}
            />
            <Tab.Screen
              name="History"
              component={Profile}
              options={{
                tabBarLabel: i18n.t('profile.title'),
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="user" size={32} color="green" />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </PaperProvider>
  );
}

export default App;
