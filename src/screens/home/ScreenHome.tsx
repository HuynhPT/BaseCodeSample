import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconButton, MD3Colors} from 'react-native-paper';

const ScreenHome = () => {
  const data = [
    {id: 1, title: 'A'},
    {id: 2, title: 'A'},
    {id: 3, title: 'A'},
    {id: 4, title: 'A'},
    {id: 5, title: 'A'},
  ];
  function renderScoll() {
    return (
      <View style={{marginTop: 50}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            color: 'black',
            marginLeft: 10,
          }}>
          List 1
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'red',
              opacity: 0.6,
              alignItems: 'center',
              justifyContent: 'center',
              margin: 20,
            }}>
            <Text style={{fontSize: 20, color: 'black'}}>A</Text>
          </View>
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'red',
              opacity: 0.6,
              alignItems: 'center',
              justifyContent: 'center',
              margin: 20,
            }}>
            <Text style={{fontSize: 20, color: 'black'}}>A</Text>
          </View>

          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'red',
              opacity: 0.6,
              alignItems: 'center',
              justifyContent: 'center',
              margin: 20,
            }}>
            <Text style={{fontSize: 20, color: 'black'}}>A</Text>
          </View>

          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'red',
              opacity: 0.6,
              alignItems: 'center',
              justifyContent: 'center',
              margin: 20,
            }}>
            <Text style={{fontSize: 20, color: 'black'}}>A</Text>
          </View>
        </ScrollView>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            color: 'black',
            marginLeft: 10,
          }}>
          List 2
        </Text>
      </View>
    );
  }

  function renderItem({item}: any) {
    return (
      <View style={{}}>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'red',
            opacity: 0.6,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 30,
          }}>
          <Text style={{fontSize: 20, color: 'black'}}>{item.title}</Text>
        </View>
      </View>
    );
  }

  function renderView() {
    return (
      <>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            color: 'black',
            marginLeft: 10,
          }}>
          View
        </Text>
        <View
          style={{
            backgroundColor: 'gray',
            width: '85%',
            margin: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <View style={{flex: 1}}>
            <FlatList
              data={[
                {id: 1, title: 'A'},
                {id: 2, title: 'A'},
                {id: 3, title: 'A'},
              ]}
              numColumns={2}
              renderItem={({item}: any) => {
                return (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'space-evenly',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        width: 30,
                        height: 30,
                        backgroundColor: 'pink',
                        margin: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text>{item.title}</Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: 'pink',
                margin: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>A</Text>
            </View>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: 'pink',
                margin: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>A</Text>
            </View>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: 'pink',
                margin: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>A</Text>
            </View>
          </View>
        </View>
      </>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
      }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '500',
          color: 'black',
          marginLeft: 10,
        }}>
        Demo Screen
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        ListHeaderComponent={renderScoll}
        numColumns={2}
        ListFooterComponent={renderView}
      />
    </View>
  );
};

export default ScreenHome;

const styles = StyleSheet.create({});
