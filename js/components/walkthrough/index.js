'use strict';

import React, { Component } from 'react';
import { Platform } from 'react-native';
import { connect } from 'react-redux';

import { actions } from 'react-native-navigation-redux-helpers';

import { Container, Content, Text, Button, Icon, View } from 'native-base';
import Swiper from 'react-native-swiper';

import theme from '../../themes/base-theme';
import styles from './styles';

const {
  replaceAt,
  pushRoute
} = actions;
class Walkthrough extends Component {

  static propTypes = {
    replaceAt: React.PropTypes.func,
    pushRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

    replaceRoute(route) {
      this.props.replaceAt('login', { key: route }, this.props.navigation.key);
    }
    render() {
        return (
            <Container>
                <Content theme={theme}  scrollEnabled={false}>
                    <Swiper
                        loop={false}
                        dot={<View style={styles.swiperDot} />}
                        activeDot={<View style={styles.swiperActiveDot} />}
                    >
                        <View style={styles.slides}>
                            <Text style={Platform.OS === 'android' ? styles.apaginationText : styles.iospaginationText}>
                                1 of 3
                            </Text>
                            <Icon name='ios-paper-outline' style={styles.imageIcons} />
                            <Text numberOfLines={2} style={Platform.OS === 'android' ? styles.aText : styles.iosText}>
                                Explore the latest news from your mobile device
                            </Text>
                            <Button
                                transparent rounded
                                onPress={() => this.replaceRoute('login')}
                                style={styles.Button}  >
                                Skip To App
                            </Button>
                        </View>

                        <View style={styles.slides}>
                            <Text style={Platform.OS === 'android' ? styles.apaginationText : styles.iospaginationText}>
                                2 of 3
                            </Text>
                            <Icon name='ios-information-circle-outline' style={styles.imageIcons} />
                            <Text numberOfLines={2} style={Platform.OS === 'android' ? styles.aText : styles.iosText}>
                                Lorem Ipsum industrys standard dummy text
                            </Text>
                            <Button
                                transparent rounded
                                onPress={() => this.replaceRoute('login')}
                                style={styles.Button}
                            >
                                Skip To App
                            </Button>
                        </View>

                        <View style={styles.slides}>
                            <Text style={Platform.OS === 'android' ? styles.apaginationText : styles.iospaginationText}>
                                3 of 3
                            </Text>
                            <Icon name='ios-volume-up-outline' style={styles.imageIcons} />
                            <Text numberOfLines={2} style={Platform.OS === 'android' ? styles.aText : styles.iosText}>
                                Lorem Ipsum is not simply random text
                            </Text>
                            <Button
                                transparent rounded
                                onPress={() => this.replaceRoute('login')}
                                style={styles.Button}
                            >
                                Continue To App
                            </Button>
                        </View>
                    </Swiper>
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

export default connect(mapStateToProps, bindActions)(Walkthrough);
