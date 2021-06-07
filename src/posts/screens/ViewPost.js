import React, {Component} from 'react';
import {StyleSheet, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';
import * as postsActions from '../posts.actions';
import {
  Colors,
  Typography,
  Spacings,
  View,
  Text,
  Card,
} from 'react-native-ui-lib';
import {ThemeManager} from 'react-native-ui-lib';

Colors.loadColors({
  primaryColor: '#2364AA',
  secondaryColor: '#81C3D7',
  textColor: '##221D23',
  errorColor: '#E63B2E',
  successColor: '#ADC76F',
  warnColor: '##FF963C',
});

Typography.loadTypographies({
  heading: {fontSize: 36, fontWeight: '600'},
  subheading: {fontSize: 28, fontWeight: '500'},
  body: {fontSize: 18, fontWeight: '400'},
});

Spacings.loadSpacings({
  page: 20,
  card: 12,
  gridGutter: 16,
});

// with plain object
ThemeManager.setComponentTheme('Card', {
  borderRadius: 8,
});

// with a dynamic function
ThemeManager.setComponentTheme('Button', (props, context) => {
  // 'square' is not an original Button prop, but a custom prop that can
  // be used to create different variations of buttons in your app
  if (props.square) {
    return {
      borderRadius: 0,
    };
  }
});

const ViewPost = props => {
  const onPostDeletePressed = () => {
    Navigation.pop(props.componentId);
    postsActions.deletePost(props.post.id);
  };

  const {title} = props.post;

  return (
    <View flex spread padding-24>
      <View>
        <Text text30 purple10>
          {title}
        </Text>
        <Text text70 dark20 marginT-12>
          {title}
        </Text>
      </View>
      <Button title="Delete Post" onPress={onPostDeletePressed} color={'red'} />
    </View>
    // <View style={styles.container}>
    //   <Text style={styles.text}>ViewPost Screen</Text>
    //   <Text style={styles.text}>{props.post.title}</Text>
    //   <Text
    //     style={styles.delete}
    //     onPress={() => {
    //       onPostDeletePressed(props.post.id);
    //     }}>
    //     Delete
    //   </Text>
    // </View>
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
