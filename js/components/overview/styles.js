'use strict';

var React = require('react-native');
var { StyleSheet, Dimensions } = React;

var primary = require('../../themes/variable').brandPrimary;
var deviceWidth = Dimensions.get('window').width;

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null
    },
    overviewHeaderContainer: {
        padding: 20,
        paddingTop: 30,
        alignSelf: 'center',
        backgroundColor: primary,
        width: deviceWidth
    },
    overviewHeader: {
        fontSize: 22,
        lineHeight: 30,
        fontWeight: '900',
        alignSelf: 'center'
    },
    overviewHead: {
        opacity: 0.9,
        fontSize: 14,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    overviewContent: {
        padding: 20,
        backgroundColor: primary
    },
    overviewTopicsBox: {
        paddingBottom: 20,
    },
    overviewInfoHeader: {
        alignSelf: 'flex-start',
        fontSize: 14,
        fontWeight: '900'
    },
    overviewInfoPerc: {
        alignSelf: 'flex-end',
        fontSize: 14,
        fontWeight: '900'
    }
});