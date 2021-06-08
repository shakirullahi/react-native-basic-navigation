import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import * as postsActions from '../posts.actions';
import {View, Text, Button} from 'react-native-ui-lib';

class ViewPost extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);

    this.onPostDeletePressed = this.onPostDeletePressed.bind(this);
  }

  onPostDeletePressed = () => {
    Navigation.pop(this.props.componentId);
    postsActions.deletePost(this.props.post.id);
  };

  navigationButtonPressed({buttonId}) {
    // alert('aaa');
    if (buttonId === 'sideMenu') {
      // Navigation.dismissModal(this.props.componentId);
      Navigation.mergeOptions(this.props.componentId, {
        sideMenu: {
          left: {
            visible: true,
          },
        },
      });
    }
  }

  render() {
    const {title} = this.props.post;
    return (
      <View flex spread padding-40>
        <View>
          <Text text30 purple10>
            {title}
          </Text>
          <Text text70 dark20 marginT-12>
            {title}
          </Text>
        </View>
        <Button
          text80
          red20
          bg-red70
          fullWidth
          label="Delete Post"
          onPress={this.onPostDeletePressed}
          color={'red'}
        />
      </View>
    );
  }
}

ViewPost.options = {
  topBar: {
    leftButtons: [
      {
        id: 'sideMenu',
        text: 'SideMenu',
      },
    ],
  },
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
