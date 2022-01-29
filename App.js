import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {AppProvider} from './context';
import MainComponent from './MainComponent';

const App = props => {
  return (
    <AppProvider>
      <MainComponent />
    </AppProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
