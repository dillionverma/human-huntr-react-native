'use strict';

var React = require('react-native');

var { StyleSheet, Dimensions, Platform } = React;

var deviceHeight = Dimensions.get('window').height;
var primary = require('../../themes/variable').brandPrimary;

module.exports = StyleSheet.create({
    signupContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: Platform.OS === 'android' ? (deviceHeight / 4) : ((deviceHeight / 4) - 20)
    },
    signupHeader: {
        alignSelf: 'center',
        fontSize: 22,
        padding: 10,
        fontWeight: 'bold',
        marginTop: Platform.OS === 'android' ? (deviceHeight / 4) : ((deviceHeight / 3) + 10)
    },
    background: {
        flex: 1,
        width: null,
        height:deviceHeight,
        backgroundColor: primary
    },
    inputGrp: {
        flexDirection: 'row',
        borderRadius: 25,
        backgroundColor: 'rgba(0,0,0,0.2)',
        marginBottom: 20,
        borderWidth: 0,
        paddingLeft: 15
    },
    input: {
        paddingLeft: 15
    },
    signupBtn: {
        height: 50,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#ddd'
    },
    termsText: {
        alignSelf: 'center',
        marginTop: 20,
        paddingBottom: 100,
        opacity: 0.8,
        fontSize: 14,
        fontWeight: 'bold'
    }
});
