
import React, { Component } from 'react';
import { Image, Platform, Alert, AsyncStorage, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Content, Text, InputGroup, Input, Button, Icon, View } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

import login from './login-theme';
import styles from './styles';

const {
  replaceAt,
  pushRoute
} = actions;

const bg = require('../../../images/BG.png');
const logo = require('../../../images/logo.png');

class Login extends Component {

  static propTypes = {
    replaceAt: React.PropTypes.func,
    pushRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.constructor.childContextTypes = {
      theme: React.PropTypes.object,
    };
  }


  async onLoginPress() {
      console.log('test0');
      console.log(this.state.email);
      console.log(this.state.password);


      console.log('test 45');

      
    
      try {

          console.log('test1');

          let response = await fetch('http://159.203.36.118/api/v1/sessions.json', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {
                    email: this.state.email,
                    password: this.state.password
                }
            })
        });

          

          console.log('test2');

          console.log(response);

          let responseJson = await response.json();

          console.log(responseJson);

          this.setState({authtoken: responseJson.data.auth_token});

          console.log('test3');

          if (responseJson.success == true) {
              

              const authToken = responseJson.data.auth_token;


              console.log(responseJson.data);


              try {
                  await AsyncStorage.setItem('authToken', responseJson.data.auth_token);
                  await AsyncStorage.setItem('userName', responseJson.data.name);
                  await AsyncStorage.setItem('loggedIn', 'true');
              } catch(error) {
                  Alert.alert('Error',error.text,[{text: 'OK'},])
              }

              this.pushRoute('start');

              
          } else {
              Alert.alert('Sign In Error',responseJson.info,[{text: 'OK'},])
          }
      } catch(error) {
          Alert.alert('Problem',error.text,[{text: 'OK'},])
      }
  }


  replaceRoute(route) {
    this.props.replaceAt('login', { key: route }, this.props.navigation.key);
  }

  pushRoute(route) {
    this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
  }

  render() {
    return (
      <Container>
        <Content theme={login} scrollEnabled={false}>
          <Image source={bg} style={styles.background} >
            <Image source={logo} style={Platform.OS === 'android' ? styles.aShadow : styles.iosShadow} />

            <View style={styles.bg}>
              <InputGroup borderType="rounded" style={[styles.inputGrp, { borderWidth: 0, paddingLeft: 15 }]}>
                <Icon name="ios-person-outline" />
                <Input
                  placeholder="Email"
                  onChangeText={email => this.setState({email: email })}
                  style={styles.input}
                />
              </InputGroup>

              <InputGroup borderType="rounded" style={[styles.inputGrp, { borderWidth: 0, paddingLeft: 15 }]}>
                <Icon name="ios-unlock-outline" />
                <Input
                  placeholder="Password"
                  secureTextEntry
                  onChangeText={password => this.setState({password: password })}
                  style={styles.input}
                />
              </InputGroup>

              <Button
                rounded primary block large
                style={styles.loginBtn}
                textStyle={Platform.OS === 'android' ? { marginTop: -5, fontSize: 16 } : { fontSize: 16, marginTop: -5, fontWeight: '900' }}
                onPress={this.onLoginPress.bind(this)}
              >
                  Sign In
              </Button>

              <View style={styles.otherLinksContainer}>
                <Grid>
                  <Col>
                    <Button transparent style={{ alignSelf: 'flex-start' }} onPress={() => this.pushRoute('signUp')}>
                      <Text style={styles.helpBtns}>
                          Create Account
                      </Text>
                    </Button>
                  </Col>
                  <Col>
                    <Button transparent style={{ alignSelf: 'flex-end' }} onPress={() => this.pushRoute('needhelp')}>
                      <Text style={styles.helpBtns}>
                          Need Help?
                      </Text>
                    </Button>
                  </Col>
                </Grid>
              </View>
            </View>

          </Image>

        </Content>
      </Container>
    );
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

export default connect(mapStateToProps, bindActions)(Login);










