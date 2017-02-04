
import React, { Component} from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import { closeDrawer } from '../../actions/drawer';
import { actions } from 'react-native-navigation-redux-helpers';

import { Container, Content, Text, Icon, List, ListItem, Thumbnail } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';

import navigateTo from '../../actions/sideBarNav';
import styles from './style';

const singUp = require('../../../images/BG-signUp.png');

const {
  reset,
} = actions;

class SideBar extends Component {

  static propTypes = {
    reset: React.PropTypes.func,
    navigateTo: React.PropTypes.func,
    closeDrawer: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }
  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }
  reset() {
    this.props.reset(this.props.navigation.key);
  }

    render(){
        return (
            <Container>
                <Image source={require('../../../images/sid.png')} style={styles.background} >
                    <Content style={styles.drawerContent}>
                        <List  foregroundColor={'white'} >
                            <ListItem button onPress={() => this.navigateTo('home')} iconLeft style={styles.links} >
                                <Icon name='ios-grid-outline' />
                                <Text style={styles.linkText} >NEWS</Text>
                            </ListItem>
                            <ListItem button onPress={() => this.navigateTo('channels')}  iconLeft style={styles.links} >
                                <Icon name='ios-keypad-outline' />
                                <Text style={styles.linkText}>CHANNELS</Text>
                            </ListItem>
                            <ListItem button onPress={() => this.navigateTo('overview')}  iconLeft style={styles.links} >
                              <Icon name='ios-stats' />
                              <Text style={styles.linkText}> OVERVIEW</Text>
                            </ListItem>
                            <ListItem button onPress={() => this.navigateTo('calendar')}  iconLeft style={styles.links} >
                                <Icon name='ios-calendar-outline' />
                                <Text style={styles.linkText}>CALENDAR</Text>
                            </ListItem>
                            <ListItem button onPress={() => this.navigateTo('timeline')}  iconLeft style={styles.links} >
                                <Icon name='ios-timer-outline' />
                                <Text style={styles.linkText}>TIMELINE</Text>
                            </ListItem>
                            <ListItem button onPress={() => this.navigateTo('profile')} iconLeft style={styles.links} >
                                <Icon name='ios-person-outline' />
                                <Text style={styles.linkText}> PROFILE</Text>
                            </ListItem>
                            <ListItem button onPress={() => this.navigateTo('widgets')}  iconLeft style={styles.links} >
                                <Icon name='ios-grid' />
                                <Text style={styles.linkText}>WIDGETS</Text>
                            </ListItem>
                            <ListItem button onPress={() => this.navigateTo('settings')} iconLeft style={styles.links}>
                                <Icon name='ios-settings-outline' />
                                <Text style={styles.linkText}>SETTINGS</Text>
                            </ListItem>
                            <ListItem button onPress={() => this.navigateTo('feedback')} iconLeft style={styles.links} >
                                <Icon name='ios-paper-outline' />
                                <Text style={styles.linkText}>FEEDBACK</Text>
                            </ListItem>
                        </List>

                        <View style={styles.logoutContainer}>
                            <View style={styles.logoutbtn}  foregroundColor={'white'}>
                                <Grid>
                                    <Col>
                                        <TouchableOpacity onPress={() => this.navigateTo('login')} style={{alignSelf: 'flex-start'}}>
                                            <Text style={{fontWeight: 'bold', color: '#fff'}}>LOG OUT</Text>
                                            <Text note style={{color: '#fff'}} >Kumar Sanket</Text>
                                        </TouchableOpacity>
                                    </Col>
                                    <Col>
                                        <TouchableOpacity style={{alignSelf: 'flex-end'}}  onPress={() => this.navigateTo('profile')}>
                                            <Thumbnail source={require('../../../images/contacts/sanket.png')} style={styles.profilePic} />
                                        </TouchableOpacity>
                                    </Col>
                                </Grid>
                            </View>
                        </View>
                    </Content>
                </Image>
            </Container>
        );
    }
}

function bindAction(dispatch) {
  return {
    navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
    reset: key => dispatch(closeDrawer(),reset([{ key: 'login' }], key, 0))
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(SideBar);
