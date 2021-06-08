import {Navigation} from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent(
    'blog.PostsList',
    () => require('./posts/screens/PostsList').default,
  );
  Navigation.registerComponent(
    'blog.AddPost',
    () => require('./posts/screens/AddPost').default,
  );
  Navigation.registerComponent(
    'blog.ViewPost',
    () => require('./posts/screens/ViewPost').default,
  );
  Navigation.registerComponent(
    'blog.TestMenu',
    () => require('./posts/screens/TestMenu').default,
  );
  Navigation.registerComponent(
    'navigation.Drawer',
    () => require('./sideMenu/Drawer').default,
  );
}
