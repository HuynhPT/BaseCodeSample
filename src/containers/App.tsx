import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppContainer from './AppContainer';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <View style={styles.mContainer}>
        <StatusBar
          backgroundColor={'transparent'}
          barStyle="dark-content"
          hidden={false}
          translucent={true}
        />
        <AppContainer />
      </View>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  mContainer: {
    flex: 1,
  },
});
