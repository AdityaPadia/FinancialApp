import React from 'react';
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
  Image
} from 'react-native';

const WatchlistHorizontalComponent: () => Node = () => {
    return (
        <View style = {styles.container}>
            <View style = {styles.nameContainer}>
                <Text style = {styles.stockName}>
                    NIFTY
                </Text>
            </View>
            <View style = {styles.trendContainer}>

            </View>
            <View style = {styles.priceContainer}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        borderWidth : 1,
        width : "95%",
        height : 70,
        alignSelf : "center",
        backgroundColor : "white",
        borderRadius : 10,
        marginVertical : 5,
        flexDirection : "row"
    },
    nameContainer : {
        flex : 0.25,
        flexDirection : "column",
        alignContent : "center",
        justifyContent : "center",
    },
    trendContainer : {
        flex : 0.5,
        flexDirection : "column",
        alignContent : "center",
        justifyContent : "center",
    },
    priceContainer : {
        flex : 0.25,
        flexDirection : "column",
        alignContent : "center",
        justifyContent : "center",
    },

    stockName : {
        alignSelf : "center",
        fontWeight : "bold",

    }
})

export default WatchlistHorizontalComponent;
