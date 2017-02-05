
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



class Create extends Component {

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
        location: '',
        radius: '',
        name: ''
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
                        <Icon name="ios-arrow-back" style={{lineHeight: 30}} />
                      </Button>
                      <Text style={{marginTop:6}} onPress={() => this.pushRoute('game')}> Create Game</Text>

                    </View>
                  </View>
                </Header>

                    <Content style={{marginBottom:(Platform.OS === 'ios') ? -50 : -10}}>

                        <InputGroup borderType="rounded" style={[styles.inputGrp, { borderWidth: 0, paddingLeft: 15 }]}>
                          <Icon name="ios-person-outline" />
                          <Input
                            placeholder="Name"
                            onChangeText={name => this.setState({name: name })}
                            style={styles.input}
                          />
                        </InputGroup>

                        <InputGroup borderType="rounded" style={[styles.inputGrp, { borderWidth: 0, paddingLeft: 15 }]}>
                          <Icon name="ios-unlock-outline" />
                          <Input
                            placeholder="Radius"
                            secureTextEntry
                            onChangeText={radius => this.setState({radius: radius })}
                            style={styles.input}
                          />
                        </InputGroup>

                        <Button
                            rounded primary block large
                            style={styles.loginBtn}
                            textStyle={Platform.OS === 'android' ? { marginTop: -5, fontSize: 16 } : { fontSize: 16, marginTop: -5, fontWeight: '900' }}
                            onPress={() => this.pushRoute('game')}
                          >
                              Start
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

export default connect(mapStateToProps, bindAction)(Create);
