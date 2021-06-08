import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/screens';
import {registerLoggerForDebug} from 'remx';

registerLoggerForDebug(console.log);

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        id: 'sideMenu',
        left: {
          component: {
            id: 'Drawer',
            name: 'navigation.Drawer',
          },
        },
        center: {
          stack: {
            children: [
              {
                component: {
                  name: 'blog.PostsList',
                  options: {
                    topBar: {
                      title: {
                        text: 'Blog Page',
                      },
                    },
                  },
                },
              },
            ],
          },
        },
      },
    },
  });
});
