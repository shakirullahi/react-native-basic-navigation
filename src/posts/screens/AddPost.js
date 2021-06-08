import React, {Component} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import {Navigation} from 'react-native-navigation';
import * as postsActions from '../posts.actions';
import {Text, TextField, View} from 'react-native-ui-lib';

class AddPost extends Component {
  static propTypes = {
    componentId: PropTypes.string,
  };

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {
      title: '',
      text: '',
    };

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onSavePressed = this.onSavePressed.bind(this);
  }

  static options() {
    return {
      topBar: {
        title: {
          text: 'Add Post',
        },
        rightButtons: [
          {
            id: 'saveBtn',
            text: 'Save',
            enabled: false,
          },
        ],
        leftButtons: [
          {
            id: 'cancelBtn',
            text: 'Cancel',
          },
        ],
      },
    };
  }

  onChangeTitle = title => {
    this.setState({title});
    Navigation.mergeOptions(this.props.componentId, {
      topBar: {
        rightButtons: [
          {
            id: 'saveBtn',
            text: 'Save',
            enabled: !!title,
          },
        ],
      },
    });
  };

  onChangeText = text => {
    this.setState({text});
  };

  navigationButtonPressed({buttonId}) {
    if (buttonId === 'cancelBtn') {
      // alert('aaa');
      // Navigation.dismissModal(this.props.componentId);
      Navigation.mergeOptions(this.props.componentId, {
        sideMenu: {
          left: {
            visible: true,
          },
        },
      });
    } else if (buttonId === 'saveBtn') {
      this.onSavePressed();
    }
  }

  onSavePressed = () => {
    postsActions.addPost({
      title: this.state.title,
      body: this.state.text,
      userId: 1,
    });
    Navigation.dismissModal(this.props.componentId);
  };

  render() {
    return (
      <View flex centerV>
        <Text flex center>
          AddPost Screen
        </Text>
        <TextField
          text70
          containerStyle={{marginBottom: 12}}
          floatingPlaceholder
          placeholder="Add a Catchy Title"
          onChangeText={this.onChangeTitle}
          floatOnFocus
        />
        <TextField
          text70
          floatingPlaceholder
          placeholder="This is the beginning of a great post"
          onChangeText={this.onChangeText}
          expandable
        />
      </View>
    );
  }
}

export default AddPost;

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
});
