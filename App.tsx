import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Log from './screens/Log';
import History from './screens/History';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import { FontAwesome, Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Log"
            component={Log}
            options={{
              tabBarLabel: 'Log',
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="book" size={32} color="green" />
              ),
            }} />
          <Tab.Screen
            name="History"
            component={History}
            options={{
              tabBarLabel: 'History',
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="trophy" size={32} color="green" />
              ),
            }} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
