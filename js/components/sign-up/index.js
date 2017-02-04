'use strict';

import React, { Component } from 'react';
import { Image, Platform, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { actions } from 'react-native-navigation-redux-helpers';

import { Container, Content, Text, Button, Icon, InputGroup, Input, View } from 'native-base';

import theme from '../login/login-theme';
import styles from './styles';

const {
  reset,
} = actions;

class SignUp extends Component {


    static propTypes = {
      reset: React.PropTypes.func,
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

       resetRoute(route) {
            this.props.resetRoute(route);
        }

    render() {
        return (
            <Container>
                    <View theme={theme}>
                        <Image source={require('../../../images/BG-signUp.png')} style={styles.background} >
                            <Content padder scrollEnabled={false}>
                                <Text style={styles.signupHeader}>
                                    CREATE ACCOUNT
                                </Text>
                                <View style={styles.signupContainer}>
                                    <InputGroup borderType='rounded' style={styles.inputGrp}>
                                        <Icon name='ios-person-outline' />
                                        <Input placeholder='Username'  style={styles.input}/>
                                    </InputGroup>

                                    <InputGroup borderType='rounded' style={styles.inputGrp}>
                                        <Icon name='ios-mail-open-outline' />
                                        <Input placeholder='Email'  style={styles.input}/>
                                    </InputGroup>

                                    <InputGroup borderType='rounded' style={styles.inputGrp}>
                                        <Icon name='ios-unlock-outline' />
                                        <Input placeholder='Password' secureTextEntry={true}  style={styles.input}/>
                                    </InputGroup>

                                    <Button
                                        rounded transparent  block
                                        onPress={() => this.props.reset(this.props.navigation.key)}
                                        style={styles.signupBtn}
                                    >
                                        Continue
                                    </Button>

                                    <TouchableOpacity>
                                        <Text style={styles.termsText}>Terms & Conditions</Text>
                                    </TouchableOpacity>
                                </View>
                            </Content>
                        </Image>
                    </View>
            </Container>
        )
    }
}


function bindAction(dispatch) {
    return {
        reset: key => dispatch(reset([{ key: 'login' }], key, 0))
    }
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(SignUp);
