
import React, { Component } from 'react';
import { Image, View, TouchableOpacity,Platform } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Content, Text, Button, Icon,Card } from 'native-base';

import { Grid, Col, Row } from 'react-native-easy-grid';
import Swiper from 'react-native-swiper';
import { openDrawer } from '../../actions/drawer';

import theme from '../../themes/base-theme';
import styles from './styles';

const {
  reset,
  pushRoute
} = actions;

const signUp = require('../../../images/BG-signUp.png');
const headerLogo = require('../../../images/Header-Logo.png');



class Home extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
    reset: React.PropTypes.func,
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
            <Container theme={theme} style={{backgroundColor: '#fff'}}>
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                <Header>
                  <View style={styles.header} >
                    <View style={styles.rowHeader}>
                      <Button
                        transparent
                        style={styles.btnHeader}
                        onPress={() => this.props.reset(this.props.navigation.key)}
                      >
                        <Icon name="ios-power" style={{lineHeight: 30}} />
                      </Button>

                      <Image source={headerLogo} style={styles.imageHeader} />

                      <Button transparent style={styles.btnHeader} onPress={this.props.openDrawer} >
                        <Icon name="ios-menu" />
                      </Button>
                    </View>
                  </View>
                </Header>

                    <Content style={{marginBottom:(Platform.OS === 'ios') ? -50 : -10}}>
                        <View>
                            <View>
                                <Swiper
                                    height={330}
                                    loop={true}
                                    dot={<View style={styles.swiperDot} />}
                                    activeDot={<View style={styles.swiperActiveDot}
                                    showsButtons={true} />}
                                >
                                    <TouchableOpacity  onPress={() => this.pushRoute('story')} style={styles.slide}>
                                        <Image style={styles.newsPoster} source={require('../../../images/NewsIcons/1.jpg')} >
                                            <View style={styles.swiperTextContent} >
                                            <Text numberOfLines={2} style={styles.newsPosterHeader}>
                                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                                            </Text>
                                            <Grid style={styles.swiperContentBox}>
                                                <Col style={{flexDirection:'row'}}>
                                                    <TouchableOpacity>
                                                        <Text style={styles.newsPosterLink}>SPACE.com</Text>
                                                    </TouchableOpacity>
                                                    <Icon name='ios-time-outline' style={styles.headertimeIcon} />
                                                    <Text style={styles.newsPosterLink}>20m ago</Text>
                                                </Col>
                                                <Col>
                                                    <TouchableOpacity style={styles.newsPosterTypeView}>
                                                        <Text style={styles.newsPosterTypeText}>SCIENCE</Text>
                                                    </TouchableOpacity>
                                                </Col>
                                            </Grid>
                                        </View>
                                        </Image>
                                    </TouchableOpacity>

                                    <TouchableOpacity  onPress={() => this.pushRoute('story')} style={styles.slide}>
                                        <Image style={styles.newsPoster} source={require('../../../images/NewsIcons/3.jpg')}>
                                            <View  style={styles.swiperTextContent}>
                                                <Text numberOfLines={2} style={styles.newsPosterHeader}>
                                                    Lorem Ipsum is simply dummy text of the printing
                                                </Text>
                                                <Grid style={styles.swiperContentBox}>
                                                    <Col style={{flexDirection:'row'}}>
                                                        <TouchableOpacity>
                                                            <Text style={styles.newsPosterLink}>CDC</Text>
                                                        </TouchableOpacity>
                                                        <Icon name='ios-time-outline' style={styles.headertimeIcon} />
                                                        <Text style={styles.newsPosterLink}>2hr ago</Text>
                                                    </Col>
                                                    <Col>
                                                        <TouchableOpacity style={styles.newsPosterTypeView}>
                                                            <Text style={styles.newsPosterTypeText}>ENVIRONMENT</Text>
                                                        </TouchableOpacity>
                                                    </Col>
                                                </Grid>
                                            </View>
                                        </Image>
                                    </TouchableOpacity>

                                    <TouchableOpacity  onPress={() => this.pushRoute('story')} style={styles.slide}>
                                        <Image style={styles.newsPoster} source={require('../../../images/NewsIcons/4.jpg')}>
                                            <View  style={styles.swiperTextContent}>
                                                <Text numberOfLines={2} style={styles.newsPosterHeader}>
                                                    Lorem Ipsum is simply dummy text of the printing
                                                </Text>
                                                <Grid style={styles.swiperContentBox}>
                                                    <Col style={{flexDirection:'row'}}>
                                                        <TouchableOpacity>
                                                            <Text style={styles.newsPosterLink}>SKY.com</Text>
                                                        </TouchableOpacity>
                                                        <Icon name='ios-time-outline' style={styles.headertimeIcon} />
                                                        <Text style={styles.newsPosterLink}>1day ago</Text>
                                                    </Col>
                                                    <Col>
                                                        <TouchableOpacity style={styles.newsPosterTypeView}>
                                                            <Text style={styles.newsPosterTypeText}>WORLD</Text>
                                                        </TouchableOpacity>
                                                    </Col>
                                                </Grid>
                                            </View>
                                        </Image>
                                    </TouchableOpacity>
                                </Swiper>
                            </View>
                        </View>

                        <Card style={{backgroundColor: '#fff'}}>
                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.pushRoute('story')}>
                                <View style={styles.newsContent}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>
                                        Lorem Ipsum is simply dummy text of the printing
                                    </Text>
                                    <Grid style={styles.swiperContentBox}>
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
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.pushRoute('story')}>
                                <View style={styles.newsContent}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>
                                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                                    </Text>
                                    <Grid style={styles.swiperContentBox}>
                                        <Col style={{flexDirection:'row'}}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>SPACE.com</Text>
                                            </TouchableOpacity>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.newsLink}>5h ago</Text>
                                        </Col>
                                        <Col>
                                            <TouchableOpacity style={styles.newsTypeView}>
                                                <Text style={styles.newsTypeText}>SCIENCE</Text>
                                            </TouchableOpacity>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.pushRoute('story')}>
                                <View style={styles.newsContent}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>
                                        It has survived not only five centuries
                                    </Text>
                                    <Grid style={styles.swiperContentBox}>
                                        <Col style={{flexDirection:'row'}}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>SKY.com</Text>
                                            </TouchableOpacity>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.newsLink}>2days ago</Text>
                                        </Col>
                                        <Col>
                                            <TouchableOpacity style={styles.newsTypeView}>
                                                <Text style={styles.newsTypeText}>WORLD</Text>
                                            </TouchableOpacity>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.pushRoute('story')}>
                                <View style={styles.newsContent}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>
                                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
                                    </Text>
                                    <Grid style={styles.swiperContentBox}>
                                        <Col style={{flexDirection:'row'}}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>ESPN</Text>
                                            </TouchableOpacity>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.newsLink}>12days ago</Text>
                                        </Col>
                                        <Col>
                                            <TouchableOpacity style={styles.newsTypeView}>
                                                <Text style={styles.newsTypeText}>SPORTS</Text>
                                            </TouchableOpacity>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.pushRoute('story')}>
                                <View style={styles.newsContent}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>
                                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested
                                    </Text>
                                    <Grid style={styles.swiperContentBox}>
                                        <Col style={{flexDirection:'row'}}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>ART.com</Text>
                                            </TouchableOpacity>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.newsLink}>23days ago</Text>
                                        </Col>
                                        <Col>
                                            <TouchableOpacity style={styles.newsTypeView}>
                                                <Text style={styles.newsTypeText}>ART</Text>
                                            </TouchableOpacity>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.pushRoute('story')}>
                                <View style={styles.newsContent}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>
                                        There are many variations of passages of Lorem Ipsum available
                                    </Text>
                                    <Grid style={styles.swiperContentBox}>
                                        <Col style={{flexDirection:'row'}}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>Money.com</Text>
                                            </TouchableOpacity>
                                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                                            <Text style={styles.newsLink}>2months ago</Text>
                                        </Col>
                                        <Col>
                                            <TouchableOpacity style={styles.newsTypeView}>
                                                <Text style={styles.newsTypeText}>FINANCE</Text>
                                            </TouchableOpacity>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>
                        </Card>
                    </Content>
                </Image>
            </Container>
        )
    }
}


function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    reset: key => dispatch(reset([{ key: 'login' }], key, 0)),
    pushRoute: (route, key) => dispatch(pushRoute(route, key))
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Home);
