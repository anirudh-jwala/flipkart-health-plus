import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              HomeScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              CategoriesScreen: 'two',
            },
          },
          TabThree: {
            screens: {
              ArticlesScreen: 'three',
            },
          },
          TabFour: {
            screens: {
              ProfileScreen: 'four',
            },
          },
        },
      },
      Cart: 'cart',
      Notification: 'notification',
      Search: 'search',
      NotFound: '*',
    },
  },
};

export default linking;
