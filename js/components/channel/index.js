'use strict';

import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Platform } from 'react-native';
import { connect } from 'react-redux';

import { actions } from 'react-native-navigation-redux-helpers';
import { openDrawer } from '../../actions/drawer';

import { Container, Header, Content, Text, Button, Icon } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import HeaderContent from './../headerContent/';

import theme from '../../themes/base-theme';
import styles from './styles';
var primary = require('../../themes/variable').brandPrimary;

const {
  popRoute,
  pushRoute
} = actions;
class Channel extends Component {

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
            <Container theme={theme} >
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>
                        <HeaderContent />
                    </Header>

                    <Content style={{marginBottom:(Platform.OS === 'ios') ? -50 : -10}}>
                        <View>
                            <Image source={require('../../../images/NewsIcons/2.jpg')} style={styles.newsPoster}>
                                <View>
                                    <Text style={Platform.OS === 'android' ? styles.achannelHeader : styles.ioschannelHeader}>SCIENCE CHANNEL</Text>
                                    <Button
                                        rounded
                                        style={styles.followBtn}
                                        textStyle={Platform.OS === 'android' ?
                                            {color: primary, fontSize: 13, fontWeight: '900', textAlign: 'center'} :
                                            {color: primary, fontSize: 13, fontWeight: '900'}}
                                    >
                                        Following
                                    </Button>
                                    <TouchableOpacity style={{padding: 0}}>
                                        <Text style={styles.noOfFollowers}>234K Followers</Text>
                                    </TouchableOpacity>
                                </View>
                            </Image>
                        </View>

                        <View  foregroundColor={'white'} style={{backgroundColor: '#fff'}}>
                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.pushRoute('story')}>
                                <View style={styles.newsContentWrap}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>
                                        Lorem Ipsum is simply dummy text of the printing
                                    </Text>
                                    <Grid style={styles.newsContent}>
                                        <Col style={{flexDirection:'row'}}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>CNN</Text>
                                            </TouchableOpacity>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.newsLink}>May 24, 2016</Text>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.pushRoute('story')}>
                                <View style={styles.newsContentWrap}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>Contrary to popular belief, Lorem Ipsum is not simply random text.</Text>
                                    <Grid style={styles.newsContent}>
                                        <Col style={{flexDirection:'row'}}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>SPACE.com</Text>
                                            </TouchableOpacity>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.newsLink}>Apr 17, 2016</Text>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.pushRoute('story')}>
                                <View style={styles.newsContentWrap}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>
                                        It has survived not only five centuries
                                    </Text>
                                    <Grid style={styles.newsContent}>
                                        <Col style={{flexDirection:'row'}}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>CNN</Text>
                                            </TouchableOpacity>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.newsLink}>Feb 03, 2016</Text>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.pushRoute('story')}>
                                <View style={styles.newsContentWrap}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>It has survived not only five centuries</Text>
                                    <Grid style={styles.newsContent}>
                                        <Col style={{flexDirection:'row'}}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>SKY.com</Text>
                                            </TouchableOpacity>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.newsLink}>Dec 17, 2015</Text>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.pushRoute('story')}>
                                <View style={styles.newsContentWrap}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>Contrary to popular belief, Lorem Ipsum is not simply random text.</Text>
                                    <Grid style={styles.newsContent}>
                                        <Col style={{flexDirection:'row'}}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>SPACE.com</Text>
                                            </TouchableOpacity>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.newsLink}>Apr 17, 2016</Text>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.pushRoute('story')}>
                                <View style={styles.newsContentWrap}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>
                                        It has survived not only five centuries
                                    </Text>
                                    <Grid style={styles.newsContent}>
                                        <Col style={{flexDirection:'row'}}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>CNN</Text>
                                            </TouchableOpacity>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.newsLink}>Feb 03, 2016</Text>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.pushRoute('story')}>
                                <View style={styles.newsContentWrap}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>It has survived not only five centuries</Text>
                                    <Grid style={styles.newsContent}>
                                        <Col style={{flexDirection:'row'}}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>SKY.com</Text>
                                            </TouchableOpacity>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.newsLink}>Dec 17, 2015</Text>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Content>
                </Image>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: () => dispatch(openDrawer()),
        popRoute: key => dispatch(popRoute(key)),
        pushRoute: (route, key) => dispatch(pushRoute(route, key))
    }
}
const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Channel);
