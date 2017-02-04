'use strict';

import React, { Component } from 'react';
import { Platform,Dimensions,StyleSheet,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { actions } from 'react-native-navigation-redux-helpers';

import { Container, Content, Text, Button, Icon, View } from 'native-base';
import Swiper from 'react-native-swiper';

import theme from '../../themes/base-theme';

var deviceWidth = require('Dimensions').get('window').width;
var TAB_UNDERLINE_REF = 'TAB_UNDERLINE';
const {
  replaceAt,
  pushRoute
} = actions;
class CustomTabBar extends Component {
  propTypes: {
   goToPage: React.PropTypes.func,
   activeTab: React.PropTypes.number,
   tabs: React.PropTypes.array
 }
  static propTypes = {
    replaceAt: React.PropTypes.func,
    pushRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }
  renderTabOption(name, page) {
    var isTabActive = this.props.activeTab === page;

    return (
      <TouchableOpacity key={name} onPress={() => this.props.goToPage(page)} style={[styles.tab,{borderWidth: isTabActive ? 2 : 0,borderColor: isTabActive ? '#FFF' : 'transparent',borderRadius: isTabActive ? 30 : undefined}]}>
        <Text style={{color: '#fff', fontWeight: isTabActive ? '900' : '500'}}>{name}</Text>
      </TouchableOpacity>
    );
  }

    replaceRoute(route) {
      this.props.replaceAt('login', { key: route }, this.props.navigation.key);
    }
    render() {
      var numberOfTabs = this.props.tabs.length;
    var tabUnderlineStyle = {
      position: 'absolute',
      width: deviceWidth / numberOfTabs,
      height: 4,
      backgroundColor: 'navy',
      bottom: 0,
    };
        return (
          <View style={styles.tabs}>
            {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
          </View>
        )
    }
}

function bindActions(dispatch) {
  return {
    replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key)),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

var primary = require('../../themes/variable').brandPrimary;
var styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 8,
    marginHorizontal: 5
  },

  tabs: {
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 10,
    borderWidth: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0
  },
});

export default connect(mapStateToProps, bindActions)(CustomTabBar);
