'use strict';

import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Platform } from 'react-native';
import { connect } from 'react-redux';

import { actions } from 'react-native-navigation-redux-helpers';
import { openDrawer } from '../../actions/drawer';

import { Container, Header, Content, Text, Button, Icon, Tabs } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import HeaderContent from './../headerContent/';

import theme from '../../themes/base-theme';
import styles from './styles';

import TabOne from './tabOne';
import TabTwo from './tabTwo';
import TabThree from './tabThree';

import CustomTabBar from './CustomTabBar';

const {
  popRoute,
  pushRoute
} = actions;
class Channels extends Component {


      static propTypes = {
        popRoute: React.PropTypes.func,
        pushRoute: React.PropTypes.func,
        navigation: React.PropTypes.shape({
          key: React.PropTypes.string,
        }),
      }

      popRoute() {
        this.props.popRoute(this.props.navigation.key);
      }

      pushRoute(route) {
        this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
      }

    render() {
        return (
            <Container theme={theme}>
                    <Header>
                        <HeaderContent />
                    </Header>
                    <View style={styles.bgHead}>

                                        <Tabs renderTabBar={() => <CustomTabBar someProp={'here'} />}>
                                            <TabOne tabLabel='Following' />
                                            <TabTwo tabLabel='Popular' />
                                            <TabThree tabLabel='Explore' />
                                        </Tabs>
                    </View>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        popRoute: key => dispatch(popRoute(key)),
        pushRoute: (route, key) => dispatch(pushRoute(route, key))
    }
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Channels);
