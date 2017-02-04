
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Icon, View, Button } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

const {
  popRoute,
} = actions;

const headerLogo = require('../../../images/Header-Logo.png');

class HeaderContent extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }

  render() {
    return (
      <View style={styles.header} >
        <View style={styles.rowHeader}>
          <Button transparent style={styles.btnHeader} onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Image source={headerLogo} style={styles.imageHeader} />
          <Button transparent style={styles.btnHeader} onPress={this.props.openDrawer} >
            <Icon name="ios-menu" />
          </Button>
        </View>
      </View>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: key => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(HeaderContent);
