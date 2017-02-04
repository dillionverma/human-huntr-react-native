'use strict';

var React = require('react-native');
var { StyleSheet, Dimensions, Platform } = React;

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
        paddingBottom: 10,
        fontWeight: '900',
        alignSelf: 'center',
        textAlign: 'center'
    },
    overviewHead: {
        opacity: 0.8,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    timelineView: {
        paddingLeft: 30,
        backgroundColor: '#fff'
    },
    timelineContent: {
        paddingLeft: 35,
        borderLeftWidth: 1,
        borderColor: '#ccc',
        paddingBottom: 15
    },
    contentContainer: {
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20
    },
    timelineIcon: {
        alignSelf: 'center',
        color: '#999'
    },
    timelineContentHeading: {
        color: primary,
        fontSize: 12,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginTop: Platform.OS === 'android' ? 10 : 0
    },
    newsTypeView: {
        alignSelf: 'flex-end',
        flexDirection:'row',
        marginTop: Platform.OS === 'android' ? 10 : 0
    },
    timeIcon: {
        fontSize: 20,
        paddingRight: 10,
        color: '#666',
        marginLeft: Platform.OS === 'android' ? 15 : 0,
        paddingLeft: Platform.OS === 'android' ? 0 : 20,
        marginTop: Platform.OS === 'android' ? 5 : 0
    },
    time: {
        color: '#666',
        fontSize: 12,
        alignSelf: 'flex-start',
        fontWeight: 'bold'
    },
    timelineTextHeader: {
        color: '#222',
        fontSize: 14,
        fontWeight: '700',
        paddingTop: Platform.OS === 'android' ? 5 : 0
    },
    timelineTextComment: {
        color: '#aaa',
        fontSize: 12,
        fontWeight: '700',
        paddingLeft: 30
    }
});
