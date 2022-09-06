import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenHome from '../screens/home/ScreenHome';
const Stack = createNativeStackNavigator();
const AppContainer = () => {
  //Name Screen
  enum NameScreen {
    SCREEN_HOME = 'ScreenHome',
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={NameScreen.SCREEN_HOME}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={NameScreen.SCREEN_HOME} component={ScreenHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;

const styles = StyleSheet.create({});
