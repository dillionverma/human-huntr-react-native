
import _ from 'lodash/core';
import React, { Component } from 'react';
import { BackAndroid, StatusBar, NavigationExperimental,Platform } from 'react-native';
import { connect } from 'react-redux';
import { Drawer } from 'native-base';
import { actions } from 'react-native-navigation-redux-helpers';

import { closeDrawer } from './actions/drawer';

import Login from './components/login/';
import Home from './components/home/';
import SignUp from './components/sign-up/';
import Feedback from './components/feedback/';
import Comments from './components/comments/';
import Profile from './components/profile/';
import Calendar from './components/calendar/';
import Walkthrough from './components/walkthrough/';
import SideBar from './components/sideBar';
import Settings from './components/settings';
import Channel from './components/channel';
import Channels from './components/channels';
import Overview from './components/overview';
import Story from './components/story';
import Timeline from './components/timeline';
import Widgets from './components/widgets';
import NeedHelp from './components/needhelp';
import SplashPage from './components/splashscreen/';
import { statusBarColor } from "./themes/base-theme";

const {
  popRoute,
} = actions;

const {
  CardStack: NavigationCardStack,
} = NavigationExperimental;


class AppNavigator extends Component {

  static propTypes = {
    drawerState: React.PropTypes.string,
    popRoute: React.PropTypes.func,
    closeDrawer: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
      routes: React.PropTypes.array,
    }),
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      const routes = this.props.navigation.routes;

      if (routes[routes.length - 1].key === 'home' || routes[routes.length - 1].key === 'login') {
        return false;
      }

      this.props.popRoute(this.props.navigation.key);
      return true;
    });
  }

  componentDidUpdate() {
    if (this.props.drawerState === 'opened') {
      this.openDrawer();
    }

    if (this.props.drawerState === 'closed') {
      this._drawer.close();
    }
  }

  popRoute() {
    this.props.popRoute();
  }

  openDrawer() {
    this._drawer.open();
  }

  closeDrawer() {
    if (this.props.drawerState === 'opened') {
      this.props.closeDrawer();
    }
  }

  _renderScene(props) { // eslint-disable-line class-methods-use-this
    switch (props.scene.route.key) {
      case 'splashscreen':
        return <SplashPage />;
      case 'login':
        return <Login />;
      case 'home':
        return <Home />;
    case 'feedback':
        return <Feedback />;
    case 'comments':
        return <Comments />;
    case 'signUp':
        return <SignUp />;
    case 'profile':
        return <Profile />;
    case 'walkthrough':
        return <Walkthrough />;
    case 'sideBar':
        return <SideBar />;
    case 'settings':
        return <Settings />;
    case 'channel':
        return <Channel />;
    case 'channels':
        return <Channels />;
    case 'calendar':
        return <Calendar />;
    case 'overview':
        return <Overview />;
    case 'story':
        return <Story />;
    case 'timeline':
        return <Timeline />;
    case 'widgets':
        return <Widgets />;
    case 'needhelp':
        return <NeedHelp />;
    default :
        return <Walkthrough  />;
    }
  }

  render() {  // eslint-disable-line class-methods-use-this
    return (
      <Drawer
        ref={(ref) => { this._drawer = ref; }}
        type="overlay"
        tweenDuration={150}
        content={<SideBar navigator={this._navigator} />}
        tapToClose
        acceptPan={false}
        onClose={() => this.closeDrawer()}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        styles={{
          drawer: {
            shadowColor: '#000000',
            shadowOpacity: 0.8,
            shadowRadius: 3,
          },
        }}
        tweenHandler={(ratio) => {  //eslint-disable-line
          return {
            drawer: { shadowRadius: ratio < 0.2 ? ratio * 5 * 5 : 5 },
            main: {
              opacity: (2 - ratio) / 2,
            },
          };
        }}
        negotiatePan
      >
        <StatusBar
          backgroundColor={statusBarColor}
          barStyle="light-content"
        />
        <NavigationCardStack
          navigationState={this.props.navigation}
          renderOverlay={this._renderOverlay}
          renderScene={this._renderScene}
        />
      </Drawer>
    );
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
    popRoute: (key) => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  drawerState: state.drawer.drawerState,
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(AppNavigator);
