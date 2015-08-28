/**
 * Sample React Native App, with
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Display = require('react-native-device-display');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var listener;
var device = getDevice();
var orientation = getOrientation();
function getDevice() {
  return Display.isPhone() ? "Phone" : Display.isTablet() ? "Tablet" : "Unknown";
}
function getOrientation() {  
  return Display.isLandscape() ? "Landscape" : Display.isPortrait() ? "Portrait" : "Unknown";
}
var reactNativeUniversal = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.device}>
          You're using a {device} in {orientation} mode
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});

console.log("Display is:",Display);
//Initializes 'styles' variable that holds the style for the current device.
var styles = (function() {
  if(Display.isTablet()) {
    return getIpadStyle();
  }
  else if(Display.isPhone()) {
    return getIphoneStyle();
  }
  else {
    throw new Error("device not detected!"); //Alt: show default layout
  }
})();


function getIpadStyle() {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    device: {
      textAlign: 'center',
      color: 'blue',
      marginBottom: 5,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    }
  });
}
function getIphoneStyle() {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    device: {
      textAlign: 'center',
      color: 'green',
      marginBottom: 5,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    }
  });
}



AppRegistry.registerComponent('reactNativeUniversal', () => reactNativeUniversal);
