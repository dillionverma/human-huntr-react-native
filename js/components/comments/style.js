
'use strict';

var React = require('react-native');
var { StyleSheet, Platform,Dimensions } = React;

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;
var primary = require('../../themes/variable').brandPrimary;

module.exports = StyleSheet.create({
    container: {
        width: null,
        height: null,
        flex: 1
    },
    headerContainer: {
      marginTop: (Platform.OS === 'android') ? -5 : undefined,
      marginLeft: (Platform.OS === 'android') ? -5 : undefined
    },
    headerBtns : {
        padding: 10,
        alignSelf: 'center'
    },
    headerIcons : {
        fontSize: 30,
        paddingTop: (Platform.OS === 'android') ? 10 : undefined
    },
    headerTextIcon: {
        fontSize: 28,
        paddingTop: 10,
        marginTop: Platform.OS === 'android' ? -10 : 0
    },
    commentHeadbg: {
        backgroundColor: primary,
        flex: 1
    },
    commentHeader : {
        alignSelf: 'center',
        fontWeight: '900',
        fontSize: 20,
        marginTop: 20
    },
    channelBtn1: {
        borderWidth: 1,
        borderColor: Platform.OS === 'android' ? '#ddd' : 'rgba(255,255,255,0.5)'
    },
    card: {
        backgroundColor: '#fff',
        borderWidth: 0
    },
    cardHeader: {
        backgroundColor: 'transparent',
        borderBottomWidth: 0,
        paddingBottom: 10,
        height: 65
    },
    cardItem: {
        backgroundColor: 'transparent',
        paddingTop: 5,
        paddingLeft: 50
    },
    timeIcon: {
        fontSize: 16,
        marginLeft: (deviceWidth < 330) ? 5 : 15,
        marginRight: (deviceWidth < 330) ? (Platform.OS === 'android' ? -8 : -8) : (Platform.OS === 'android' ? -20 : -20),
        color: '#666',
        marginTop: Platform.OS === 'android' ? 2 : 1
    },
    date: {
        textAlign: 'right',
        fontWeight: '300',
        fontSize: 12,
        color: '#666',
        lineHeight: 16,
        marginLeft: Platform.OS === 'android' ? 10 : 0,
        // marginTop: Platform.OS === 'android' ? 5 : -5
    },
    likeIcon: {
        fontSize: 16,
        marginRight: (deviceWidth < 330) ? -75 : -110,
        marginLeft: 20,
        marginTop: Platform.OS === 'android' ? 0 : 1
    },
    commentBox: {
        backgroundColor: '#EEE',
        flexDirection: 'row',
        height: 55,
        alignItems: 'center'
    },
    attachIconContainer: {
        padding: 10,
        // paddingTop: 10
    },
    attachIcon : {
        color: '#797979',
        fontSize: 27
    },
    input: {
        color: '#222'
    },
    arrowForwardIcon: {
        alignSelf: 'flex-end',
        color: primary
    },
    arrowForwardIconContainer: {
        paddingRight: 20,
        paddingTop: 5
    },
    cmtName: {
      fontSize: (deviceWidth < 330) ? 15 : 17
    }
});
