import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons';


import Pagina1 from '../Pagina/Pagina1';

export default function Inicio({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.barra}>
        <FontAwesome5 name="inbox" size={30} color="black" />
        <Text>Caixa de Entrada</Text>
      </View>
      <Pagina1 navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    marginTop: Constants.statusBarHeight,

  },
  barra: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderTopWidth: 0.8,
    borderBottomWidth: 0.8,
    alignItems: 'center',
  }
});