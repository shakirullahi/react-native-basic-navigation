import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';

const ViewPost = props => {
  const deletePost = () => {
    Navigation.pop(props.componentId);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ViewPost Screen</Text>
      <Text style={styles.delete} onPress={deletePost}>
        Delete
      </Text>
    </View>
  );
};

export default ViewPost;

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
