
import React, { Component } from 'react';
import { Image, View, TouchableOpacity,Platform } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header,Content, Text, InputGroup, Input, Button, Icon, Card } from 'native-base';

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



class Start extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
    reset: React.PropTypes.func,
    pushRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

    constructor(props) {
      super(props);
      this.state = {
        location: ''
      };
    }


    componentDidMount() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          var initialPosition = JSON.stringify(position);
          this.setState({location: initialPosition});
          console.log('initial Position');
          console.log(initialPosition);
        },
        (error) => alert(JSON.stringify(error)),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
      );
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
                        <Button
                            rounded primary block large
                            style={styles.loginBtn}
                            textStyle={Platform.OS === 'android' ? { marginTop: -5, fontSize: 16 } : { fontSize: 16, marginTop: -5, fontWeight: '900' }}
                            onPress={() => this.pushRoute('create')}
                          >
                              Start
                        </Button>

                        <Button
                            rounded primary block large
                            style={styles.loginBtn}
                            textStyle={Platform.OS === 'android' ? { marginTop: -5, fontSize: 16 } : { fontSize: 16, marginTop: -5, fontWeight: '900' }}
                          >
                              Join
                        </Button>


                        <Button
                            rounded primary block large
                            style={styles.loginBtn}
                            textStyle={Platform.OS === 'android' ? { marginTop: -5, fontSize: 16 } : { fontSize: 16, marginTop: -5, fontWeight: '900' }}
                          >
                              Profile
                        </Button>


                        <Button
                            rounded primary block large
                            style={styles.loginBtn}
                            textStyle={Platform.OS === 'android' ? { marginTop: -5, fontSize: 16 } : { fontSize: 16, marginTop: -5, fontWeight: '900' }}
                          >
                              Settings
                        </Button>

                        
                        

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

export default connect(mapStateToProps, bindAction)(Start);
