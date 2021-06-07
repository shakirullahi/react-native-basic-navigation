import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import * as postsActions from '../posts.actions';

const ViewPost = props => {
  const onPostDeletePressed = id => {
    Navigation.pop(props.componentId);
    postsActions.deletePost(id);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ViewPost Screen</Text>
      <Text style={styles.text}>{props.post.title}</Text>
      <Text
        style={styles.delete}
        onPress={() => {
          onPostDeletePressed(props.post.id);
        }}>
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
