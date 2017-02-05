
import React, { Component } from 'react';
import { Image, View, TouchableOpacity,Platform, ScrollView, Alert } from 'react-native';
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
  pushRoute,
  popRoute
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
        latitude1: 44.22622955408341,
        longitude1: -76.49572785865934,
        latitude2: 44.2268058,
        longitude2: -76.4974636,
        latitude3: 44.2258017, 
        longitude3: -76.4950162,
        latitude4: 44.22622955408341,
        longitude4: -76.49642785865934,
        latitude5: 0,
        longitude5: 0,
        alert: false,
        tagger: 'Run',
      };
    }


    popRoute() {
      this.props.popRoute(this.props.navigation.key);
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
        if (this.state.time < 9) {
          this.setState({
            time: this.state.time+1,
            latitude1: this.state.latitude1,
            longitude1: this.state.longitude1,
            latitude2: this.state.latitude2 + 0.00005,
            longitude2: this.state.longitude2 - 0.00005,
            latitude3: this.state.latitude3 + 0.00005,
            longitude3: this.state.longitude3 - 0.00005,
          })
        } else if (this.state.time < 18) {
          this.setState({
            time: this.state.time+1,
            latitude1: this.state.latitude1,
            longitude1: this.state.longitude1 - 0.00002,
            latitude2: this.state.latitude2 + 0.00005,
            longitude2: this.state.longitude2 - 0.00005,
            latitude3: this.state.latitude3,
            longitude3: this.state.longitude3 - 0.00005,
          })
        } else if (this.state.tagger == 'You are it') {
          if (this.state.time < 29) {
            this.setState({
              time: this.state.time+1,
              latitude1: this.state.latitude1,
              longitude1: this.state.longitude1 - 0.00002,
              latitude2: this.state.latitude2 + 0.00005,
              longitude2: this.state.longitude2 - 0.00005,
              latitude3: this.state.latitude3,
              longitude3: this.state.longitude3 - 0.00005,
            })
          } else if (this.state.time < 30) {
            console.log('test')
            this.setState({
              time: this.state.time+1,
              latitude1: this.state.latitude1,
              longitude1: this.state.longitude1 - 0.00004,
              latitude2: this.state.latitude2,
              longitude2: this.state.longitude2,
              latitude3: this.state.latitude3,
              longitude3: this.state.longitude3,
              latitude4: 0,
              longitude4: 0,
              latitude5: this.state.latitude4,
              longitude5: this.state.longitude4,
            })
          } else {
            this.setState({
              time: this.state.time+1,
            })
          }
        } else {
          if (this.state.alert == false) {
            this.sendAlert()
            this.setState({
              alert: true,
            })
          }
          this.setState({
            time: this.state.time,
          })
        }
        
      }, 1000);
    }


    sendAlert() {
      Alert.alert(
        'You got tagged!',
        '',
        [
          {text: 'Keep playing', onPress: () => this.setTagger()}
        ]
      )
    }

    setTagger() {
      this.setState({
        tagger: 'You are it'
      })

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
                      <Text style={styles.it} > {this.state.tagger}</Text>
                      <Button
                        transparent
                        style={styles.btnHeader}
                        onPress={() =>
                          Alert.alert(
                            'Settings',
                            '',
                            [
                              {text: 'Quit Game', onPress: () => this.popRoute()}
                            ]
                          )
                         }
                      >

                        <Icon name="ios-settings" style={{lineHeight: 30}} />
                      </Button>




                    </View>
                  </View>
                </Header>

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
                          coordinate={{latitude: this.state.latitude1, longitude: this.state.longitude1}}
                          image={require('../../../images/current_location.png')} />
                        <MapView.Marker
                          coordinate={{latitude: this.state.latitude2, longitude: this.state.longitude2}}
                          image={require('../../../images/friend_location.png')} />
                        <MapView.Marker
                          coordinate={{latitude: this.state.latitude3, longitude: this.state.longitude3}}
                          image={require('../../../images/enemy_location.png')} />
                        <MapView.Marker
                          coordinate={{latitude: this.state.latitude4, longitude: this.state.longitude4}}
                          image={require('../../../images/friend_location.png')} />
                        <MapView.Marker
                          coordinate={{latitude: this.state.latitude5, longitude: this.state.longitude5}}
                          image={require('../../../images/enemy_location.png')} />
                      </MapView>


                      <View style={styles.cameraButton}>

                      </View>


                        <View style={styles.bottomContainer}>
                          <View style={styles.textWrap}>
                            <Text style={styles.btn} >Players: 4</Text>
                          </View>
                          <View style={styles.textWrap}>
                            <Text style={styles.btn} >{this.state.time} Seconds</Text>
                          </View>
                        </View>


                      </View>


                </Image>
            </Container>
        )
    }
}



function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    reset: key => dispatch(reset([{ key: 'login' }], key, 0)),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
    popRoute: key => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Game);
