'use strict';

import React, { Component } from 'react';
import { Image, View, Switch, TouchableOpacity, Platform } from 'react-native';
import { connect } from 'react-redux';

import { actions } from 'react-native-navigation-redux-helpers';
import { openDrawer } from '../../actions/drawer';

import { Container, Header, Content, Text, Button, Icon, Thumbnail, InputGroup, Input } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';

import theme from '../../themes/base-theme';
import styles from './styles';
var primary = require('../../themes/variable').brandPrimary;

const {
  reset,
} = actions;

class Settings extends Component {

  static propTypes = {
    reset: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

    constructor(props) {
        super(props);
        this.state = {
            monSwitch: true,
            tueSwitch: false,
            wedSwitch: false,
            thuSwitch: false,
            friSwitch: false,
            satSwitch: false,
            sunSwitch: false,
            Username: '',
            email: '',
            password: '',
            offset: {
               x:0,
               y:0
        }
    };

    this.constructor.childContextTypes = {
        theme: React.PropTypes.object,
       }
    }

   resetRoute(route) {
        this.props.resetRoute(route);
    }

    render() {
        return (
            <Container theme={theme} >
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>
                        <View style={styles.header} >
                            <View style={styles.rowHeader}>
                                <Button transparent style={styles.btnHeader} onPress={this.props.openDrawer} >
                                    <Icon name='ios-menu' style={{fontSize: 32, lineHeight: 36}}  />
                                </Button>

                                <Image source={require('../../../images/Header-Logo.png')} style={styles.imageHeader}>
                                </Image>

                                <Button transparent style={styles.btnHeader} onPress={() => this.props.reset(this.props.navigation.key)}>
                                    <Icon name='ios-power' style={{fontSize: 32, lineHeight: 36}}  />
                                </Button>
                            </View>
                        </View>
                    </Header>

                    <Content style={{marginBottom:(Platform.OS === 'ios') ? -50 : -10}}>
                        <View  style={styles.bg}>
                            <Text style={styles.signupHeader}>SETTINGS</Text>
                            <View style={{marginTop: 20}}>
                                <Grid>
                                    <Col>
                                        <Button transparent style={styles.roundedButton}>
                                            <Icon name='ios-cloud-upload-outline' style={Platform.OS === 'android' ? {} : {lineHeight: 0}} />
                                        </Button>
                                    </Col>
                                    <Col>
                                        <TouchableOpacity style={{alignSelf: 'center'}}>
                                            <Thumbnail source={require('../../../images/contacts/sanket.png')} style={styles.profilePic} />
                                        </TouchableOpacity>
                                    </Col>
                                    <Col>
                                        <Button transparent style={styles.roundedButton}>
                                            <Icon name='ios-cloud-download-outline' style={Platform.OS === 'android' ? {} : {lineHeight: 0}} />
                                        </Button>
                                    </Col>
                                </Grid>
                            </View>
                            <View style={styles.signupContainer}>
                                <InputGroup borderType='rounded' style={styles.inputGrp}>
                                    <Icon name='ios-person-outline' />
                                    <Input placeholder='Username' placeholderTextColor='#fff' style={styles.input}/>
                                </InputGroup>
                                <InputGroup borderType='rounded' style={styles.inputGrp}>
                                    <Icon name='ios-mail-open-outline' />
                                    <Input placeholder='Email' placeholderTextColor='#fff' style={styles.input}/>
                                </InputGroup>
                                <InputGroup borderType='rounded' style={styles.inputGrp}>
                                    <Icon name='ios-unlock-outline' />
                                    <Input placeholder='Password' placeholderTextColor='#fff'secureTextEntry={true}  style={styles.input}/>
                                </InputGroup>
                            </View>
                        </View>
                        <View style={styles.notificationSwitchContainer}>
                            <Text style={styles.notificationHeader}>EMAIL NOTIFICATIONS</Text>
                            <View>
                                <Grid>
                                    <Col>
                                        <Text style={Platform.OS === 'android' ? styles.aswitchText : styles.switchText}>Monday</Text>
                                    </Col>
                                    <Col style={Platform.OS === 'android' ? styles.aswitchContainer : styles.switchContainer}>
                                        <Switch
                                            onValueChange={(value) => this.setState({monSwitch: value})}
                                            onTintColor={primary}
                                            style={styles.switch}
                                            thumbTintColor='#ccc'
                                            tintColor='#aaa'
                                            value={this.state.monSwitch} />
                                    </Col>
                                </Grid>
                                <Grid>
                                    <Col>
                                        <Text style={Platform.OS === 'android' ? styles.aswitchText : styles.switchText}>Tuesday</Text>
                                    </Col>
                                    <Col style={Platform.OS === 'android' ? styles.aswitchContainer : styles.switchContainer}>
                                        <Switch
                                            onValueChange={(value) => this.setState({tueSwitch: value})}
                                            onTintColor={primary}
                                            style={styles.switch}
                                            thumbTintColor='#ccc'
                                            tintColor='#aaa'
                                            value={this.state.tueSwitch} />
                                    </Col>
                                </Grid>
                                <Grid>
                                    <Col>
                                        <Text style={Platform.OS === 'android' ? styles.aswitchText : styles.switchText}>Wednesday</Text>
                                    </Col>
                                    <Col style={Platform.OS === 'android' ? styles.aswitchContainer : styles.switchContainer}>
                                        <Switch
                                            onValueChange={(value) => this.setState({wedSwitch: value})}
                                            onTintColor={primary}
                                            style={styles.switch}
                                            thumbTintColor='#ccc'
                                            tintColor='#aaa'
                                            value={this.state.wedSwitch} />
                                    </Col>
                                </Grid>
                                <Grid>
                                    <Col>
                                        <Text style={Platform.OS === 'android' ? styles.aswitchText : styles.switchText}>Thursday</Text>
                                    </Col>
                                    <Col style={Platform.OS === 'android' ? styles.aswitchContainer : styles.switchContainer}>
                                        <Switch
                                            onValueChange={(value) => this.setState({thuSwitch: value})}
                                            onTintColor={primary}
                                            style={styles.switch}
                                            thumbTintColor='#ccc'
                                            tintColor='#aaa'
                                            value={this.state.thuSwitch} />
                                    </Col>
                                </Grid>
                                <Grid>
                                    <Col>
                                        <Text style={Platform.OS === 'android' ? styles.aswitchText : styles.switchText}>Friday</Text>
                                    </Col>
                                    <Col style={Platform.OS === 'android' ? styles.aswitchContainer : styles.switchContainer}>
                                        <Switch
                                            onValueChange={(value) => this.setState({friSwitch: value})}
                                            onTintColor={primary}
                                            style={styles.switch}
                                            thumbTintColor='#ccc'
                                            tintColor='#aaa'
                                            value={this.state.friSwitch} />
                                    </Col>
                                </Grid>
                                <Grid>
                                    <Col>
                                        <Text style={Platform.OS === 'android' ? styles.aswitchText : styles.switchText}>Saturday</Text>
                                    </Col>
                                    <Col style={Platform.OS === 'android' ? styles.aswitchContainer : styles.switchContainer}>
                                        <Switch
                                            onValueChange={(value) => this.setState({satSwitch: value})}
                                            onTintColor={primary}
                                            style={styles.switch}
                                            thumbTintColor='#ccc'
                                            tintColor='#aaa'
                                            value={this.state.satSwitch} />
                                    </Col>
                                </Grid>
                                <Grid>
                                    <Col>
                                        <Text style={Platform.OS === 'android' ? styles.aswitchText : styles.switchText}>Sunday</Text>
                                    </Col>
                                    <Col style={Platform.OS === 'android' ? styles.aswitchContainer : styles.switchContainer}>
                                        <Switch
                                            onValueChange={(value) => this.setState({sunSwitch: value})}
                                            onTintColor={primary}
                                            style={styles.switch}
                                            thumbTintColor='#ccc'
                                            tintColor='#aaa'
                                            value={this.state.sunSwitch} />
                                    </Col>
                                </Grid>
                            </View>
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
        reset: key => dispatch(reset([{ key: 'login' }], key, 0))
    }
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Settings);
