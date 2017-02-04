'use strict';

import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Platform } from 'react-native';
import { connect } from 'react-redux';

import { actions } from 'react-native-navigation-redux-helpers';
import { openDrawer } from '../../actions/drawer';

import { Container, Header, Content, Text, Button, Icon, Tabs, Card, CardItem,Thumbnail } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import HeaderContent from './../headerContent/';

import theme from '../../themes/base-theme';
import styles from './style';

const {
  replaceAt,
  pushRoute
} = actions;
class TabThree extends Component {

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
            <Card foregroundColor='#222' style={styles.card}>
                <CardItem style={styles.cardHeader}  header>
                    <Thumbnail source={require('../../../images/contacts/sanket.png')} style={Platform.OS === 'android' ? {borderRadius: 40} : {}} />
                    <Text style={styles.cmtName}>Kumar Sanket</Text>
                    <Icon name='ios-time-outline'  style={styles.timeIcon} />
                    <Text style={styles.date}>May 24, 11:00 AM</Text>
                    <Icon name='ios-heart-outline' style={styles.likeIcon} />
                    <Text style={styles.date}>12</Text>
                </CardItem>

                <CardItem style={styles.cardItem} >
                    <Text>
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                    </Text>
                </CardItem>
            </Card>


            <Card foregroundColor='#222' style={styles.card}>
                <CardItem style={styles.cardHeader}  header>
                    <Thumbnail source={require('../../../images/contacts/saurav.png')}  style={Platform.OS === 'android' ? {borderRadius: 40} : {}}/>
                    <Text style={styles.cmtName}>Saurav Sahu</Text>
                    <Icon name='ios-time-outline' style={styles.timeIcon} />
                    <Text style={styles.date}>Feb 17, 04:30 PM</Text>
                    <Icon name='ios-heart-outline' style={styles.likeIcon} />
                    <Text style={styles.date}>5</Text>
                </CardItem>
                <CardItem style={styles.cardItem} >
                    <Text>
                        There are many variations of passages of Lorem Ipsum available.
                    </Text>
                </CardItem>
            </Card>

            <Card foregroundColor='#222' style={styles.card}>
                <CardItem style={styles.cardHeader}  header>
                    <Thumbnail source={require('../../../images/contacts/atul.png')}  style={Platform.OS === 'android' ? {borderRadius: 40} : {}}/>
                    <Text style={styles.cmtName}>Atul Ranjan</Text>
                    <Icon name='ios-time-outline' style={styles.timeIcon} />
                    <Text style={styles.date}>Feb 03, 01:00 PM</Text>
                    <Icon name='ios-heart-outline' style={styles.likeIcon} />
                    <Text style={styles.date}>5</Text>
                </CardItem>
                <CardItem style={styles.cardItem} >
                    <Text>
                        The generated Lorem Ipsum is therefore always free from repetition
                    </Text>
                </CardItem>
            </Card>

            <Card foregroundColor='#222' style={styles.card}>
                <CardItem style={styles.cardHeader}  header>
                    <Thumbnail source={require('../../../images/contacts/varun.png')}  style={Platform.OS === 'android' ? {borderRadius: 40} : {}}/>
                    <Text style={styles.cmtName}>Varun Sahu</Text>
                    <Icon name='ios-time-outline' style={styles.timeIcon} />
                    <Text style={styles.date}>Jan 12, 09:30 PM</Text>
                    <Icon name='ios-heart-outline' style={styles.likeIcon} />
                    <Text style={styles.date}>4</Text>
                </CardItem>
                <CardItem style={styles.cardItem} >
                    <Text>
                         Various versions have evolved over the years, sometimes by accident
                    </Text>
                </CardItem>
            </Card>
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

export default connect(mapStateToProps, bindActions)(TabThree);
