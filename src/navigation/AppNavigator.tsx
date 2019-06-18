import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { AppIcon } from './AppIcon';
import { AScreen } from '../a/AScreen';
import { BScreen } from '../b/BScreen';
import { CScreen } from '../c/CScreen';
import { DScreen } from '../d/DScreen';
import { EScreen } from '../e/EScreen';

const bottomTabNavigator = createMaterialBottomTabNavigator(
  {
    aScreen: {
      screen: AScreen,
      navigationOptions: {
        title: "精选",
        tabBarIcon: ({ tintColor }) => <AppIcon name="A" color={tintColor} />
      }
    },
    bScreen: {
      screen: BScreen,
      navigationOptions: {
        title: "资讯",
        tabBarIcon: ({ tintColor }) => <AppIcon name="B" color={tintColor} />
      }
    },
    cScreen: {
      screen: CScreen,
      navigationOptions: {
        title: "服务",
        tabBarIcon: ({ tintColor }) => <AppIcon name="C" color={tintColor} />
      }
    },
    dScreen: {
      screen: DScreen,
      navigationOptions: {
        title: "学习",
        tabBarIcon: ({ tintColor }) => <AppIcon name="D" color={tintColor} />
      }
    },
    eScreen: {
      screen: EScreen,
      navigationOptions: {
        title: "我的",
        tabBarIcon: ({ tintColor }) => <AppIcon name="E" color={tintColor} />
      }
    }
  },
  {
    shifting: false,
    initialRouteName: "aScreen",
    activeTintColor: "red",
    inactiveTintColor: "gray",
    barStyle: {
      backgroundColor: "white"
    },
  }
);

export default createAppContainer(bottomTabNavigator);
