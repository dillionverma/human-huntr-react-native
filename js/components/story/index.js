'use strict';

import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Platform, Slider } from 'react-native';
import { connect } from 'react-redux';

import { actions } from 'react-native-navigation-redux-helpers';
import { openDrawer } from '../../actions/drawer';

import { Container, Header, Content, Text, Button, Icon } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import Lightbox from 'react-native-lightbox';
import Modal from 'react-native-simple-modal';
import Swiper from 'react-native-swiper';

import theme from '../../themes/base-theme';
import styles from './styles';
import * as Animatable from 'react-native-animatable';
var primary = require('../../themes/variable').brandPrimary;

const {
  popRoute,
  pushRoute
} = actions;
const renderPagination = (index, total, context) => {
    return (
        <View style={{position: 'absolute', bottom: -25, right: 10}}>
            <Text>
                <Text style={{color: '#007aff', fontSize: 20}}>
                    {index + 1}
                </Text>
                /{total}
            </Text>
        </View>
    )
}

class Story extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    pushRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }
    constructor(props) {
        super(props);
        this.state = {
            animationType: 'slideInDown',
            open: false,
            value: 0,
        };
    }

    modalO() {
        this.setState({open: true});
    }

    modalX() {
        this.setState({open: false});
    }

    popRoute() {
      this.props.popRoute(this.props.navigation.key);
    }

    pushRoute(route) {
      this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
    }

    render() {
        return (
            <Container theme={theme} style={{backgroundColor: '#fff'}}>
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>
                        <Grid style={styles.headerContainer}>
                            <Col style={styles.headerBtns}>
                                <Button transparent onPress={() => this.popRoute()}>
                                    <Icon name='ios-arrow-back' style={styles.headerIcons} />
                                </Button>
                            </Col>
                            <Col style={styles.headerBtns}>
                                <Button transparent  onPress={() => this.pushRoute('comments')}>
                                    <Icon name='ios-chatboxes-outline' style={styles.headerIcons} />
                                </Button>
                            </Col>
                            <Col style={styles.headerBtns}>
                                <Button transparent  onPress={() => this.modalO()}>
                                    <Text style={styles.headerTextIcon}>Aa</Text>
                                </Button>
                            </Col>
                            <Col style={styles.headerBtns} >
                                <Button transparent>
                                    <Icon name='ios-bookmarks-outline'  style={styles.headerIcons} />
                                </Button>
                            </Col>
                            <Col style={styles.headerBtns}>
                                <Button transparent>
                                    <Icon name='ios-download-outline' style={styles.headerIcons} />
                                </Button>
                            </Col>
                        </Grid>
                    </Header>

                    <Content>
                        <View style={{flex: 1}}>
                            <View >
                                <Image source={require('../../../images/NewsIcons/5.jpg')} style={styles.newsPoster}>
                                    <TouchableOpacity>
                                        <View style={styles.newsPosterContent}>
                                            <Text numberOfLines={2} style={styles.newsPosterHeader}>
                                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </Image>
                            </View>
                            <View style={{backgroundColor: '#fff'}}>
                                <View style={styles.newsContent}>
                                    <Grid style={{paddingBottom: 20}}>
                                        <Col style={{flexDirection:'row'}}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>CDC</Text>
                                            </TouchableOpacity>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.newsLink}>1h ago</Text>
                                        </Col>
                                        <Col>
                                            <TouchableOpacity style={styles.newsTypeView}>
                                                <Text style={styles.newsTypeText}>ENVIRONMENT</Text>
                                            </TouchableOpacity>
                                        </Col>
                                    </Grid>
                                    <Text  style={styles.newsHeader}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </Text>
                                </View>

                                <View style={{padding: 20}}>
                                    <View style={styles.newsCommentContainer}>
                                        <Text  style={styles.newsComment}>
                                            It has roots in a piece of classical Latin literature from 45 BC,
                                            making it over 2000 years old. Richard McClintock, a Latin professor
                                            at Hampden-Sydney College
                                        </Text>
                                        <Text style={styles.newsComment}>- JOHN</Text>
                                    </View>
                                    <Text  style={[styles.newsHeader, {paddingBottom: 20,paddingTop: 20,fontWeight: '700'}]}>
                                        So, is Lorem Ipsum, dummy text of the printing and typesetting industry helpfull?
                                    </Text>
                                    <View style={{paddingBottom: 20}}>
                                        <Text  style={styles.newsHeader}>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                                        </Text>
                                    </View>
                                    <View style={{paddingBottom: 20,paddingTop: 10}}>
                                        <Text  style={styles.newsHeader}>
                                            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                                        </Text>
                                    </View>
                                </View>

                                <View style={styles.wrapper}>
                                    <Swiper
                                        height={240}
                                        loop={true}
                                        dot={<View style={styles.swiperDot} />}
                                        activeDot={<View style={styles.swiperActiveDot}
                                        showsButtons={true} />}
                                    >
                                        <Lightbox  navigator={this.props.navigator}>
                                            <View style={styles.slide}>
                                                <Image style={styles.newsPoster} source={require('../../../images/NewsIcons/1.jpg')} />
                                            </View>
                                        </Lightbox>
                                        <Lightbox  navigator={this.props.navigator}>
                                            <View style={styles.slide}>
                                                <Image style={styles.newsPoster} source={require('../../../images/NewsIcons/3.jpg')} />
                                            </View>
                                        </Lightbox>
                                        <Lightbox  navigator={this.props.navigator}>
                                            <View style={styles.slide}>
                                                <Image style={styles.newsPoster} source={require('../../../images/NewsIcons/4.jpg')} />
                                            </View>
                                        </Lightbox>
                                        <Lightbox  navigator={this.props.navigator}>
                                            <View style={styles.slide}>
                                                <Image style={styles.newsPoster} source={require('../../../images/NewsIcons/5.jpg')} />
                                            </View>
                                        </Lightbox>
                                    </Swiper>
                                </View>

                                <View style={{alignSelf: 'center'}}>
                                    <Button transparent iconRight onPress={() => this.popRoute('home')} textStyle={{color: '#222', fontWeight: '700'}}>
                                        NEXT STORY
                                        <Icon name='ios-arrow-forward' style={styles.forwardBtn}/>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </Content>

                    <Modal
                    offset={this.state.offset}
                    open={this.state.open}
                    modalDidOpen={() => console.log('modal did open')}
                    modalDidClose={() => this.setState({open: false})}
                    onRequestClose={() => this.setState({open: false})}
                    style={styles.modal}>

                        <View>
                            <View style={styles.modalContentBox}>
                                <Grid style={{flex: 10,padding: 20}}>
                                    <Col style={{paddingLeft: 30}}>
                                        <Button transparent style={styles.dayButton}>
                                            <Icon
                                                name='ios-sunny-outline'
                                                style={{color: primary,fontSize: 26}}
                                            />
                                        </Button>
                                    </Col>
                                    <Col style={{paddingLeft: 80}}>
                                        <Button transparent style={styles.nightButton}>
                                            <Icon
                                                name='ios-moon-outline'
                                                style={ {fontSize: 26} }
                                            />
                                        </Button>
                                    </Col>
                                </Grid>
                            </View>
                            <View style={styles.modalContentBox}>
                                <Grid style={{padding: 20, paddingBottom: 15}}>
                                    <Col>
                                        <Text
                                            style={Platform.OS === 'android' ?
                                                {fontSize: 12,marginTop: 5} :
                                                {fontSize: 12}}
                                        >
                                            CHOOSE TYPESPACE
                                        </Text>
                                    </Col>
                                    <Col>
                                        <Button transparent iconRight style={{marginTop: -5}}>
                                            SANS SERIF
                                            <Icon name='ios-arrow-forward' style={{fontSize: 28}} />
                                        </Button>
                                    </Col>
                                </Grid>
                            </View>
                            <View>
                                <Grid style={{flexDirection: 'row',paddingTop: 20}}>
                                    <Col>
                                        <Text style={styles.modalSmallText}>A</Text>
                                    </Col>
                                    <Col style={{alignSelf: 'flex-end'}}>
                                        <Text style={styles.modalLargeText}>A</Text>
                                    </Col>
                                </Grid>
                                <Slider
                                    {...this.props} minimumTrackTintColor='#fff'
                                    onValueChange={(value) => this.setState({value: value})} />
                            </View>
                        </View>
                    </Modal>
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

export default connect(mapStateToProps, bindAction)(Story);
