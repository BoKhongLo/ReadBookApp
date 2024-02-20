import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import HomePage from './src/Screens/HomePage';
import AppStyle from './src/style';

import data from './assets/data/books';

export default function App() {
  return (
    <SafeAreaView style={AppStyle.screens.container}>
        <HomePage data={data} />
        <StatusBar style="auto" />
    </SafeAreaView>
  );
}