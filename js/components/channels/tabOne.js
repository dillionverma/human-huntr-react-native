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

const {
  pushRoute
} = actions;
class TabOne extends Component {

          static propTypes = {
            popRoute: React.PropTypes.func,
            pushRoute: React.PropTypes.func,
            navigation: React.PropTypes.shape({
              key: React.PropTypes.string,
            }),
          }


          pushRoute(route) {
            this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
          }
    render() {
        return (
            <Container>
            <Content theme={theme} style={{marginBottom:(Platform.OS === 'ios') ? -50 : -10}}>
            <View>
                <Grid>
                    <Row>
                        <Col>
                            <TouchableOpacity onPress={() => this.pushRoute('channel')}>
                                <Image source={require('../../../images/NewsIcons/9.jpg')} style={styles.channelImg}>
                                    <Text style={Platform.OS === 'android' ? styles.achannelImgText : styles.ioschannelImgText}>FASHION</Text>
                                </Image>
                            </TouchableOpacity>
                        </Col>
                        <Col>
                            <TouchableOpacity onPress={() => this.pushRoute('channel')}>
                                <Image source={require('../../../images/NewsIcons/2.jpg')} style={styles.channelImg}>
                                    <Text style={Platform.OS === 'android' ? styles.achannelImgText : styles.ioschannelImgText}>SCIENCE</Text>
                                </Image>
                            </TouchableOpacity>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TouchableOpacity onPress={() => this.pushRoute('channel')}>
                                <Image source={require('../../../images/NewsIcons/8.jpg')} style={styles.channelImg}>
                                    <Text style={Platform.OS === 'android' ? styles.achannelImgText : styles.ioschannelImgText}>AUTO</Text>
                                </Image>
                            </TouchableOpacity>
                        </Col>
                        <Col>
                            <TouchableOpacity onPress={() => this.pushRoute('channel')}>
                                <Image source={require('../../../images/NewsIcons/7.jpg')} style={styles.channelImg}>
                                    <Text style={Platform.OS === 'android' ? styles.achannelImgText : styles.ioschannelImgText}>TECHNOLOGY</Text>
                                </Image>
                            </TouchableOpacity>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TouchableOpacity onPress={() => this.pushRoute('channel')}>
                                <Image source={require('../../../images/NewsIcons/6.jpg')} style={styles.channelImg}>
                                    <Text style={Platform.OS === 'android' ? styles.achannelImgText : styles.ioschannelImgText}>FINANCES</Text>
                                </Image>
                            </TouchableOpacity>
                        </Col>
                        <Col>
                            <TouchableOpacity onPress={() => this.pushRoute('channel')}>
                                <Image source={require('../../../images/NewsIcons/1.jpg')} style={styles.channelImg}>
                                    <Text style={Platform.OS === 'android' ? styles.achannelImgText : styles.ioschannelImgText}>ENVIRONMENT</Text>
                                </Image>
                            </TouchableOpacity>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TouchableOpacity onPress={() => this.pushRoute('channel')}>
                                <Image source={require('../../../images/NewsIcons/11.jpg')} style={styles.channelImg}>
                                    <Text style={Platform.OS === 'android' ? styles.achannelImgText : styles.ioschannelImgText}>SPORTS</Text>
                                </Image>
                            </TouchableOpacity>
                        </Col>
                        <Col>
                            <TouchableOpacity onPress={() => this.pushRoute('channel')}>
                                <Image source={require('../../../images/NewsIcons/12.jpg')} style={styles.channelImg}>
                                    <Text style={Platform.OS === 'android' ? styles.achannelImgText : styles.ioschannelImgText}>ART</Text>
                                </Image>
                            </TouchableOpacity>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TouchableOpacity onPress={() => this.pushRoute('channel')}>
                                <Image source={require('../../../images/NewsIcons/10.jpg')} style={styles.channelImg}>
                                    <Text style={Platform.OS === 'android' ? styles.achannelImgText : styles.ioschannelImgText}>ANIMATION</Text>
                                </Image>
                            </TouchableOpacity>
                        </Col>
                        <Col>
                            <TouchableOpacity onPress={() => this.pushRoute('channel')}>
                                <Image source={require('../../../images/NewsIcons/13.jpg')} style={styles.channelImg}>
                                    <Text style={Platform.OS === 'android' ? styles.achannelImgText : styles.ioschannelImgText}>EDUCATION</Text>
                                </Image>
                            </TouchableOpacity>
                        </Col>
                    </Row>
                </Grid>
            </View>
            </Content>
            </Container>
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

export default connect(mapStateToProps, bindActions)(TabOne);
