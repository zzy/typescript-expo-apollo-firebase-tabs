import {
  createAppContainer,
  createMaterialTopTabNavigator
} from 'react-navigation';
import { PolicyScreen } from './PolicyScreen';
// import { LawScreen } from './LawScreen';
// import { NewsScreen } from './NewsScreen';
// import { NoticeScreen } from './NoticeScreen';

const tabNavigator = createMaterialTopTabNavigator(
  {
    policyScreen: {
      screen: PolicyScreen,
      navigationOptions: {
        title: "政策"
      }
    },
    lawScreen: {
      screen: PolicyScreen,
      navigationOptions: {
        title: "法规"
      }
    },
    newsScreen: {
      screen: PolicyScreen,
      navigationOptions: {
        title: "新闻"
      }
    },
    noticeScreen: {
      screen: PolicyScreen,
      navigationOptions: {
        title: "公告"
      }
    },

  },
  {
    tabBarOptions: {
      activeTintColor: "#FF7F00",
      inactiveTintColor: "white",
      labelStyle: {
        fontSize: 16,
        paddingBottom: 0,
        marginBottom: 0
      },
      tabStyle: {
        height: 40,
      },
      style: {
        backgroundColor: "#36648B",
        paddingTop: 10,
        paddingBottom: 0,
        marginBottom: 0
      },
    }
  }
);

export const BScreen = createAppContainer(tabNavigator);
