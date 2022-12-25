import React, { useEffect, useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import WebView from 'react-native-webview';

const WebviewScreen:() => Node = (props) => {
    console.log(props.route.params.uri);
    return(
        <WebView 
        source={{uri : props.route.params.uri}}/>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,

    }
})

export default WebviewScreen;