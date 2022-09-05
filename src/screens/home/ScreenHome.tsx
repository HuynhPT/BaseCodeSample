import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconButton, MD3Colors} from 'react-native-paper';

const ScreenHome = () => {
  return (
    <View style={{flex: 1 ,alignItems:'center', justifyContent:'center'}}>
      <Text>ScreenHome</Text>
      <IconButton
        icon="camera"
        iconColor={MD3Colors.error50}
        size={20}
        onPress={() => console.log('Pressed')}
      />
    </View>
  );
};

export default ScreenHome;

const styles = StyleSheet.create({});
