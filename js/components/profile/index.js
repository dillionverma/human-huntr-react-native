'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, TouchableOpacity, Platform } from 'react-native';

import { actions } from 'react-native-navigation-redux-helpers';
import { openDrawer } from '../../actions/drawer';
import navigateTo from '../../actions/sideBarNav';
import { Container, Header, Content, Text, Icon, Thumbnail } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import HeaderContent from './../headerContent/';

import theme from '../../themes/base-theme';
import styles from './styles';


const {
  pushRoute
} = actions;

class Profile extends Component {

    static propTypes = {
      navigateTo: React.PropTypes.func,
      navigation: React.PropTypes.shape({
        key: React.PropTypes.string,
      }),
    }


    navigateTo(route) {
      this.props.navigateTo(route, 'home');
    }

    _renderItem = (data, i) => <View style={[{backgroundColor: data}, styles.item]} key={i}/>


    render() {
        return (
            <Container theme={theme}>
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>
                        <HeaderContent />
                    </Header>

                    <View style={styles.profileInfoContainer}>
                        <TouchableOpacity style={{alignSelf: 'center'}}>
                            <Thumbnail source={require('../../../images/contacts/dillion.png')} style={styles.profilePic} />
                        </TouchableOpacity>
                        <View style={styles.profileInfo}>
                            <TouchableOpacity>
                                <Text style={styles.profileUser}>Dillion Verma</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text note  style={styles.profileUserInfo}>UW Double Degree Student</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.linkTabs}>
                        <Grid>
                            <Col>
                                <TouchableOpacity  style={styles.linkTabs_header}>
                                    <Text style={styles.linkTabs_tabCounts}>13</Text>
                                    <Text note style={styles.linkTabs_tabName}>Points</Text>
                                </TouchableOpacity>
                            </Col>
                            <Col>
                                <TouchableOpacity  style={styles.linkTabs_header}>
                                    <Text style={styles.linkTabs_tabCounts}>12</Text>
                                    <Text note style={styles.linkTabs_tabName}>Hats</Text>
                                </TouchableOpacity>
                            </Col>
                        </Grid>
                    </View>
                    

                    <Content style={{marginBottom:(Platform.OS === 'ios') ? -50 : -10}}>
                        <View style={{backgroundColor: '#fff'}}>
                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.navigateTo('home')}>
                                <Image source={require('../../../images/Selfies/1.jpg')} style={styles.newsImage} />
                                <View style={styles.newsContent}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>
                                        Looking good :) 
                                    </Text>
                                    <Grid style={{marginTop: 25}}>
                                        <Col>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>Feb 5</Text>
                                            </TouchableOpacity>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.navigateTo('home')}>
                                <Image source={require('../../../images/Selfies/2.jpg')} style={styles.newsImage} />
                                <View style={styles.newsContent}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>
                                        Great Pic !
                                    </Text>
                                    <Grid style={{marginTop: 25}}>
                                        <Col>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>Feb 5</Text>
                                            </TouchableOpacity>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.navigateTo('home')}>
                                <Image source={require('../../../images/Selfies/3.jpg')} style={styles.newsImage} />
                                <View style={styles.newsContent}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>Second great game of Man Hunt. </Text>
                                    <Grid style={{marginTop: 25}}>
                                        <Col>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>Feb 4</Text>
                                            </TouchableOpacity>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.navigateTo('home')}>
                                <Image source={require('../../../images/Selfies/4.jpg')} style={styles.newsImage} />
                                <View style={styles.newsContent}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>
                                        First Selfie !
                                    </Text>
                                    <Grid style={{marginTop: 25}}>
                                        <Col>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>Feb 4</Text>
                                            </TouchableOpacity>
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
        openDrawer: ()=>dispatch(openDrawer()),
        navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute))
    }
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Profile);
