import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InformData from './src/layout/InformData'
import MedianResult from './src/layout/MedianResult'

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoute='InformData'>

        <Stack.Screen
          name='InformData'
          component={InformData}
          options={{
            headerShown:false
            }}
          />
        
        <Stack.Screen
          name='MedianResult'
          component={MedianResult}
          options={{
            headerShown:false
            }}
          />
        
      </Stack.Navigator>      

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
