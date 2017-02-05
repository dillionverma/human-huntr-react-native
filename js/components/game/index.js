
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
import MapView from 'react-native-maps';

const {
  reset,
  pushRoute
} = actions;

const timer = require('react-native-timer');


class Game extends Component {

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
        time: 0,
      };
    }

    componentWillUnmount() {
      clearInterval(this._interval);
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
      this._interval = setInterval(() => {
        this.setState({
          time: this.state.time+1
        })
      }, 1000);
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


                      <Button transparent style={styles.btnHeader} onPress={this.props.openDrawer} >
                        <Icon name="ios-menu" />
                      </Button>
                    </View>
                  </View>
                </Header>


                  <Content style={{marginBottom:(Platform.OS === 'ios') ? -50 : -10}}>


                    <View style={styles.container2}>

                      <MapView style={styles.map}
                        initialRegion={{
                          latitude: 44.22622955408341,
                          longitude: -76.49622785865934,
                          latitudeDelta: 0.0922,
                          longitudeDelta: 0.0421,
                        }}>
                        
                        <MapView.Circle
                          center={{latitude: 44.22622955408341, longitude: -76.49622785865934}}
                          radius={500}
                          fillColor="rgba(0, 0, 0, 0.1)"
                          strokeColor="rgba(0, 0, 0, 0.1)"/>
                        <MapView.Marker
                          coordinate={{latitude: 44.22622955408341, longitude: -76.49622785865934}}
                          image={require('../../../images/current_location.png')} />
                        <MapView.Marker
                          coordinate={{latitude: 44.2268058, longitude: -76.4974636}}
                          image={require('../../../images/friend_location.png')} />
                        <MapView.Marker
                          coordinate={{latitude: 44.2258017, longitude: -76.4950162}}
                          image={require('../../../images/enemy_location.png')} />
                        <MapView.Circle
                          center={{latitude: 44.22622955408341, longitude: -76.49622785865934}}
                          radius='50'
                          fillColor="rgba(8, 141, 225, 0.3)"
                          strokeColor="rgba(8, 141, 225, 0.9)"/>
                        </MapView>

                        <View style={styles.bottomContainer}>
                          <Text>{this.state.time}</Text>
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
    reset: key => dispatch(reset([{ key: 'login' }], key, 0)),
    pushRoute: (route, key) => dispatch(pushRoute(route, key))
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Game);
