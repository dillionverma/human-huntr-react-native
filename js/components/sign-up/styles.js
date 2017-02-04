'use strict';

var React = require('react-native');

var { StyleSheet, Dimensions, Platform } = React;

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

var primary = require('../../themes/variable').brandPrimary;

module.exports = StyleSheet.create({
    signupContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: (deviceWidth < 330) ? (Platform.OS === 'android' ? ((deviceHeight / 9) - 10): ((deviceHeight / 9) - 10)) : (Platform.OS === 'android' ? ((deviceHeight / 7) - 10): ((deviceHeight / 5) - 10))
    },
    signupHeader: {
        alignSelf: 'center',
        fontSize: 22,
        padding: 10,
        fontWeight: 'bold',
        marginTop: Platform.OS === 'android' ? (deviceHeight / 6) : ((deviceHeight / 6) + 10)
    },
    background: {
        flex: 1,
        width: null,
        height:null,
        backgroundColor: primary
    },
    inputGrp: {
        flexDirection: 'row',
        borderRadius: 25,
        backgroundColor: 'rgba(255,255,255,0.2)',
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
