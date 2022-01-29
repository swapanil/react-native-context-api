import React, {useContext} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {ThemeContext} from './context';

const MainComponent = props => {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.background}]}>
      <Text onPress={toggleTheme} style={{color: theme.foreground}}>
        toggleTheme
      </Text>
    </SafeAreaView>
  );
};

export default MainComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
