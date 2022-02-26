import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import MyCard from './MyCard';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the first React Native application of @pedrohhcunha!</Text>
      <ScrollView>
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  title: {
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16
  }
});
