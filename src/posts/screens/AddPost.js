import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import {Navigation} from 'react-native-navigation';

class AddPost extends Component {
  static propTypes = {
    componentId: PropTypes.string,
  };

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
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

  onChangeText = text => {
    Navigation.mergeOptions(this.props.componentId, {
      topBar: {
        rightButtons: [
          {
            id: 'saveBtn',
            text: 'Save',
            enabled: !!text,
          },
        ],
      },
    });
  };

  navigationButtonPressed({buttonId}) {
    if (buttonId === 'cancelBtn') {
      Navigation.dismissModal(this.props.componentId);
    } else if (buttonId === 'saveBtn') {
      alert('saveBtn');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>AddPost Screen</Text>
        <TextInput
          placeholder="Start writing to enable the save btn"
          onChangeText={this.onChangeText}
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
