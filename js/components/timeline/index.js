'use strict';

import React, { Component } from 'react';
import { Image, View, Platform } from 'react-native';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';

import { Container, Header, Content, Text, Icon } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import HeaderContent from './../headerContent/';

import theme from '../../themes/base-theme';
import styles from './styles';

class Timeline extends Component {

    render() {
        return (
            <Container theme={theme} style={styles.bg} >
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>
                        <HeaderContent />
                    </Header>
                    <View style={styles.overviewHeaderContainer}>
                        <Text style={styles.overviewHeader}>Wednesday</Text>
                        <Text note  style={styles.overviewHead}>September 07, 2016</Text>
                    </View>

                    <Content style={{marginBottom:(Platform.OS === 'ios') ? -50 : -10}}>
                        <View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text></Text>
                                </View>
                            </View>

                            <View style={styles.contentContainer}>
                                <Grid>
                                    <Col style={{flexDirection:'row'}}>
                                        <Icon name='ios-bookmark'  style={[styles.timelineIcon,{marginLeft: 2}]} />
                                        <View  style={{paddingLeft: 27}}>
                                            <Text style={styles.timelineContentHeading}>BOOKMARKED</Text>
                                        </View>
                                    </Col>
                                    <Col>
                                        <View style={styles.newsTypeView}>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.time}>09:34am</Text>
                                        </View>
                                    </Col>
                                </Grid>
                            </View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text style={styles.timelineTextHeader}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text></Text>
                                </View>
                            </View>
                            <View style={styles.contentContainer}>
                                <Grid>
                                    <Col style={{flexDirection:'row'}}>
                                        <Icon name='ios-chatboxes-outline' style={styles.timelineIcon} />
                                        <View style={{paddingLeft: 18}}>
                                            <Text style={styles.timelineContentHeading}>COMMENTED</Text>
                                        </View>
                                    </Col>
                                    <Col>
                                        <View  style={styles.newsTypeView}>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.time}>10:05am</Text>
                                        </View>
                                    </Col>
                                </Grid>
                            </View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text  style={styles.timelineTextHeader}>
                                        It has roots in a piece of classical Latin literature from 45 BC.
                                    </Text>
                                    <Text numberOfLines={2} style={styles.timelineTextComment}>
                                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text></Text>
                                </View>
                            </View>
                            <View style={styles.contentContainer}>
                                <Grid>
                                    <Col style={{flexDirection:'row'}}>
                                        <Icon name='ios-done-all' style={styles.timelineIcon} />
                                        <View style={{paddingLeft: 30}}>
                                            <Text style={styles.timelineContentHeading}>FOLLOWED</Text>
                                        </View>
                                    </Col>
                                    <Col>
                                        <View  style={styles.newsTypeView}>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.time}>05:36pm</Text>
                                        </View>
                                    </Col>
                                </Grid>
                            </View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text  style={styles.timelineTextHeader}>'SPORTS' channel</Text>
                                </View>
                            </View>
                        </View>

                        <View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text></Text>
                                </View>
                            </View>
                            <View style={styles.contentContainer}>
                                <Grid>
                                    <Col style={{flexDirection:'row'}}>
                                        <Icon name='ios-download-outline' style={styles.timelineIcon} />
                                        <View style={{paddingLeft: 25}}>
                                            <Text style={styles.timelineContentHeading}>SHARED</Text>
                                        </View>
                                    </Col>
                                    <Col>
                                        <View  style={styles.newsTypeView}>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.time}>06:00pm</Text>
                                        </View>
                                    </Col>
                                </Grid>
                            </View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text style={styles.timelineTextHeader}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </Text>
                                </View>
                            </View>
                        </View>


                        <View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text></Text>
                                </View>
                            </View>
                            <View style={styles.contentContainer}>
                                <Grid>
                                    <Col style={{flexDirection:'row'}}>
                                        <Icon name='ios-thumbs-up-outline' style={styles.timelineIcon} />
                                        <View style={{paddingLeft: 25}}>
                                            <Text style={styles.timelineContentHeading}>LIKED</Text>
                                        </View>
                                    </Col>
                                    <Col>
                                        <View  style={styles.newsTypeView}>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.time}>09:13pm</Text>
                                        </View>
                                    </Col>
                                </Grid>
                            </View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text  style={styles.timelineTextHeader}>
                                        Various versions have evolved over the years, sometimes by accident
                                    </Text>
                                </View>
                            </View>
                        </View>


                        <View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text></Text>
                                </View>
                            </View>
                            <View style={styles.contentContainer}>
                                <Grid>
                                    <Col style={{flexDirection:'row'}}>
                                        <Icon name='ios-copy-outline' style={styles.timelineIcon} />
                                        <View style={{paddingLeft: 25}}>
                                            <Text style={styles.timelineContentHeading}>SAVED</Text>
                                        </View>
                                    </Col>
                                    <Col>
                                        <View  style={styles.newsTypeView}>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.time}>11:03pm</Text>
                                        </View>
                                    </Col>
                                </Grid>
                            </View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text  style={styles.timelineTextHeader}>
                                        Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text></Text>
                                </View>
                            </View>
                            <View style={styles.contentContainer}>
                                <Grid>
                                    <Col style={{flexDirection:'row'}}>
                                        <Icon name='ios-archive-outline' style={styles.timelineIcon} />
                                        <View style={{paddingLeft: 25}}>
                                            <Text style={styles.timelineContentHeading}>ARCHIVED</Text>
                                        </View>
                                    </Col>
                                    <Col>
                                        <View  style={styles.newsTypeView}>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.time}>11:53pm</Text>
                                        </View>
                                    </Col>
                                </Grid>
                            </View>
                            <View style={styles.timelineView}>
                                <View style={styles.timelineContent}>
                                    <Text  style={styles.timelineTextHeader}>
                                        There are many variations of passages of Lorem Ipsum available
                                    </Text>
                                </View>
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
        openDrawer: () => dispatch(openDrawer())
    }
}

export default connect(null, bindAction)(Timeline);
