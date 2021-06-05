import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TestMenu = props => {
  return <Text style={styles.text}>Test Menu</Text>;
};

export default TestMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3EDFF',
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
  delete: {
    color: 'red',
    fontSize: 24,
  },
});
