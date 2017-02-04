'use strict';

var React = require('react-native');
var { StyleSheet, Dimensions, Platform } = React;

var primary = require('../../themes/variable').brandPrimary;
var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null
    },
    bgHead: {
        backgroundColor: primary,
        flex: 1
    },
    channelBtn1: {
        borderWidth: 1,
        borderColor: Platform.OS === 'android' ? '#ddd' : 'rgba(255,255,255,0.5)'
    },
    na: {},
    channelImg: {
        height: (deviceHeight/4) + 10,
        width: (deviceWidth/2)
    },
    ioschannelImgText: {
        fontSize: 12,
        fontWeight: '900',
        padding: 20,
        paddingLeft: 0,
        paddingBottom: 0,
        marginBottom: 0,
        marginLeft: 20,
        marginTop: (deviceHeight/6) + 10
    },
    achannelImgText: {
        fontSize: 12,
        fontWeight: '900',
        marginLeft: 20,
        marginTop: (deviceHeight/4) - 20
    }
});
