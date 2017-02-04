
'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Image, View,Platform } from 'react-native';

import {openDrawer} from '../../actions/drawer';

import {Container, Header, Content, Text, Button, Icon} from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import HeaderContent from './../headerContent/';

import theme from '../../themes/base-theme';
import styles from './styles';

var primary = require('../../themes/variable').brandPrimary;

class Widgets extends Component {

    render() {
        return (
            <Container theme={theme}>
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>
                        <View style={styles.header} >
                            <View style={styles.rowHeader}>
                                <Button transparent style={styles.btnHeader} onPress={this.props.openDrawer} >
                                    <Icon name='ios-menu' style={{fontSize: 32, lineHeight: 36}} />
                                </Button>

                                <Image source={require('../../../images/Header-Logo.png')} style={styles.imageHeader}>
                                </Image>

                                <Button transparent style={styles.btnHeader}>
                                    <Icon name='ios-add' style={{fontSize: 32, lineHeight: 36}} />
                                </Button>
                            </View>
                        </View>
                    </Header>

                    <Content style={{marginBottom:(Platform.OS === 'ios') ? -50 : -10}}>
                        <View style={styles.overviewHeaderContainer}>
                            <Text style={styles.overviewHeader}>WIDGETS</Text>
                        </View>

                        <Image source={require('../../../images/Widgets/widget1.png')} style={styles.mainWidget}>
                            <Grid style={styles.mainWidgetContainer}>
                                <Col>
                                    <Icon name='ios-cloud-outline' style={{fontSize: 40}} />
                                    <Text style={{fontWeight: '700'}}>Mostly Cloudy</Text>
                                    <Text style={{opacity: 0.7,fontWeight: '700'}}>New York</Text>
                                </Col>
                                <Col style={{alignItems: 'flex-end'}}>
                                    <View style={{flexDirection: 'row'}}>
                                        <Text style={styles.weather}>76</Text>
                                        <Icon name='ios-radio-button-off' style={{fontSize: 16,marginTop: 5}} />
                                    </View>
                                </Col>
                            </Grid>

                            <Grid style={styles.weatherInfoContainer}>
                                <Col style={{alignItems: 'center'}}>
                                    <Text style={styles.weatherInfo}>65</Text>
                                    <Text style={styles.weatherTime}>8 AM</Text>
                                </Col>
                                <Col style={{alignItems: 'center'}}>
                                    <Text style={styles.weatherInfo}>86</Text>
                                    <Text style={styles.weatherTime}>12 PM</Text>
                                </Col>
                                <Col style={{alignItems: 'center'}}>
                                    <Text style={styles.weatherInfo}>79</Text>
                                    <Text style={styles.weatherTime}>4 PM</Text>
                                </Col>
                                <Col style={{alignItems: 'center'}}>
                                    <Text style={styles.weatherInfo}>62</Text>
                                    <Text style={styles.weatherTime}>8 PM</Text>
                                </Col>
                                <Col style={{alignItems: 'center'}}>
                                    <Text style={styles.weatherInfo}>59</Text>
                                    <Text style={styles.weatherTime}>12 AM</Text>
                                </Col>
                                <Col style={{alignItems: 'center'}}>
                                    <Text style={styles.weatherInfo}>52</Text>
                                    <Text style={styles.weatherTime}>4 AM</Text>
                                </Col>
                            </Grid>
                        </Image>

                        <Grid>
                            <Col>
                                <Image source={require('../../../images/Widgets/widget2.png')} style={styles.otherWidget}>
                                    <View style={styles.otherWidgetContainer}>
                                        <Text style={styles.widgetName}>
                                            KUMAR SANKET
                                        </Text>
                                        <Text style={[{color: 'blue'},styles.ratingPerc]}>+0.51%</Text>
                                        <Text style={styles.ratingNum}>5,055.55</Text>
                                        <Button
                                            transparent
                                            rounded small
                                            style={styles.detailsBtn}
                                            textStyle={Platform.OS === 'android' ?
                                                {color: primary,fontSize: 12,fontWeight: '900',textAlign: 'center'} :
                                                {color: primary,fontSize: 12,fontWeight: '900',textAlign: 'center'}}
                                        >
                                            Details
                                        </Button>
                                    </View>
                                </Image>
                            </Col>
                            <Col>
                                <Image source={require('../../../images/Widgets/widget3.png')} style={styles.otherWidget}>
                                    <View  style={styles.otherWidgetContainer}>
                                        <Text style={styles.widgetName}>
                                            KUMAR PRATIK
                                        </Text>
                                        <Text style={[{color: 'red'},styles.ratingPerc]}>-0.31%</Text>
                                        <Text style={styles.ratingNum}>4,567.00</Text>
                                        <Button
                                            transparent
                                            rounded small
                                            style={styles.detailsBtn}
                                            textStyle={Platform.OS === 'android' ?
                                                {color: primary,fontSize: 12,fontWeight: '900',textAlign: 'center'} :
                                                {color: primary,fontSize: 12,fontWeight: '900',textAlign: 'center'}}
                                        >
                                            Details
                                        </Button>
                                    </View>
                                </Image>
                            </Col>
                        </Grid>
                    </Content>
                </Image>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer())
    }
}

export default connect(null, bindAction)(Widgets);
