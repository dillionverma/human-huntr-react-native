'use strict';

import React, { Component } from 'react';
import { Image, View, Platform } from 'react-native';
import { connect } from 'react-redux';

import { actions } from 'react-native-navigation-redux-helpers';
import { openDrawer } from '../../actions/drawer';

import { Container, Header, Content, Text, Button, Icon, InputGroup, Input } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';

import theme from '../../themes/base-theme';
import styles from './styles';
var primary = require('../../themes/variable').brandPrimary;

const {
  reset,
} = actions;
class Feedback extends Component {

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


    render() {
        return (
            <Container theme={theme} contentOffset={this.state.offset} scrollEnabled={false} >
                <Image source={require('../../../images/BG-signUp.png')} style={styles.container} >
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

                    <Content>
                        <View style={styles.contentIconsContainer}>
                            <Grid>
                                <Col>
                                    <Button transparent style={styles.roundedButton}>
                                        <Icon name='ios-call-outline' style={{fontSize: 30}} />
                                    </Button>
                                </Col>
                                <Col>
                                    <Button transparent style={styles.roundedCustomButton}>
                                        <Icon name='ios-mail-outline' style={{fontSize: 28,color: primary}} />
                                    </Button>
                                </Col>
                                <Col>
                                    <Button transparent style={styles.roundedButton}>
                                        <Icon name='ios-pin-outline' style={{fontSize: 28}} />
                                    </Button>
                                </Col>
                            </Grid>
                        </View>
                        <View style={styles.feedbackHeaderContainer}>
                            <Text style={styles.feedbackHeader}>SEND FEEDBACK</Text>
                            <Text note  style={styles.feedbackHead}>Your feedback is very important to us.</Text>
                        </View>
                        <View style={styles.feedbackContainer}>
                            <InputGroup borderType='rounded' style={styles.inputGrp}>
                                <Icon name='ios-person-outline' />
                                <Input placeholder='Username' placeholderTextColor='#fff' style={styles.input}/>
                            </InputGroup>
                            <InputGroup borderType='rounded' style={styles.inputGrp}>
                                <Icon name='ios-mail-outline' />
                                <Input placeholder='Email' placeholderTextColor='#fff' style={styles.input}/>
                            </InputGroup>


                            <Grid style={styles.feedbackInputBox}>
                                <Col style={styles.inputBox}>
                                    <Input placeholder='Write something...' placeholderTextColor='#fff' style={styles.input} />
                                </Col>
                                <Col style={styles.inputBoxIcon}>
                                    <Icon name='ios-arrow-forward'  style={styles.forwardIcon} />
                                </Col>
                            </Grid>
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

export default connect(mapStateToProps, bindAction)(Feedback);
