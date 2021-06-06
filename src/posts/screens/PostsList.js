import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {connect} from 'remx';
import {postsStore} from '../posts.store';
import * as postsActions from '../posts.actions';

class PostsList extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);

    this.pushViewPostScreen = this.pushViewPostScreen.bind(this);
  }

  componentDidMount() {
    postsActions.fetchPosts();
  }

  static get options() {
    return {
      topBar: {
        rightButtons: [
          {
            id: 'addPost',
            text: 'Add  ',
          },
        ],
      },
    };
  }

  static propTypes = {
    componentId: PropTypes.string,
    posts: PropTypes.array,
  };

  navigationButtonPressed({buttonId}) {
    if (buttonId === 'addPost') {
      this.showAddPostModal();
    }
  }

  pushViewPostScreen() {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'blog.ViewPost',
        passProps: {
          somePropToPass: 'Some props that we are passing',
          post,
        },
        options: {
          topBar: {
            title: {
              text: 'Post1',
            },
          },
        },
      },
    });
  }

  showAddPostModal() {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: 'blog.AddPost',
            },
          },
        ],
      },
    });
  }

  renderItem = ({item}) => (
    <Text onPress={() => this.pushViewPostScreen(item)}>{item.title}</Text>
  );

  postKeyExtractor = item => `${item.id}-key`;

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>PostsList Screen</Text>
        <FlatList
          data={this.props.posts}
          keyExtractor={this.postKeyExtractor}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps)(PostsList);

function mapStateToProps() {
  return {
    posts: postsStore.getPosts(),
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3EDFF',
    alignItems: 'stretch',
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
});
