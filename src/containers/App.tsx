import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppContainer from './AppContainer';

const App = () => {
  return (
    <View style={styles.mContainer}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="dark-content"
        hidden={false}
        translucent={true}
      />
      <AppContainer />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mContainer: {
    flex: 1,
  },
});
