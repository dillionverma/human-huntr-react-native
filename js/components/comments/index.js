'use strict';

import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Platform } from 'react-native';
import { connect } from 'react-redux';

import { actions } from 'react-native-navigation-redux-helpers';

import { Container, Header, Content, Text, Input, Button, Icon, Card, CardItem, Thumbnail,Tabs } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';

import theme from '../../themes/base-theme';
import styles from './style';
var primary = require('../../themes/variable').brandPrimary;

import CustomTabBar from '../channels/CustomTabBar';
import TabOne from './tabOne';
import TabTwo from './tabTwo';
import TabThree from './tabThree';

const {
  popRoute,
  pushRoute
} = actions;
class Comments extends Component {

    static propTypes = {
      popRoute: React.PropTypes.func,
      pushRoute: React.PropTypes.func,
      navigation: React.PropTypes.shape({
        key: React.PropTypes.string,
      }),
    }

    constructor(props) {
        super(props);
        this.state = {
            offset: {
                x:0,
                y:0
            }
        };
        this.constructor.childContextTypes = {
            theme: React.PropTypes.object,
        }
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
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>
                        <Grid style={styles.headerContainer}>
                            <Col style={styles.headerBtns}>
                                <Button transparent onPress={() => this.popRoute()}>
                                    <Icon name='ios-arrow-back' style={styles.headerIcons} />
                                </Button>
                            </Col>
                            <Col style={styles.headerBtns}>
                                <Button transparent>
                                    <Icon name='ios-chatboxes-outline' style={styles.headerIcons} />
                                </Button>
                            </Col>
                            <Col style={styles.headerBtns}>
                                <Button transparent>
                                    <Text style={styles.headerTextIcon}>Aa</Text>
                                </Button>
                            </Col>
                            <Col style={styles.headerBtns} >
                                <Button transparent>
                                    <Icon name='ios-bookmarks-outline'  style={styles.headerIcons} />
                                </Button>
                            </Col>
                            <Col style={styles.headerBtns}>
                                <Button transparent>
                                    <Icon name='ios-download-outline' style={styles.headerIcons} />
                                </Button>
                            </Col>
                        </Grid>
                    </Header>

                    <View style={styles.commentHeadbg}>
                        <Text style={styles.commentHeader}>23 COMMENTS</Text>
                        <Tabs renderTabBar={() => <CustomTabBar someProp={'here'} />}>
                            <TabOne tabLabel='Best' />
                            <TabTwo tabLabel='Newest' />
                            <TabThree tabLabel='Oldest' />
                        </Tabs>
                    </View>

                    <View style={styles.commentBox}>
                        <View style={styles.attachIconContainer}>
                            <Icon name='ios-attach' style={styles.attachIcon} />
                        </View>
                        <Input placeholder='Write something...' placeholderTextColor='#797979' style={styles.input}/>
                        <TouchableOpacity style={styles.arrowForwardIconContainer}>
                            <Icon name='ios-arrow-forward'  style={styles.arrowForwardIcon} />
                        </TouchableOpacity>
                    </View>
                </Image>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
      popRoute: key => dispatch(popRoute(key)),
      pushRoute: (route, key) => dispatch(pushRoute(route, key))
    }
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Comments);
