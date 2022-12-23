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

import StockPlotComponent from './StockPlotComponent';

const WatchlistHorizontalComponent: () => Node = (props) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.nameContainer}>
                <Text style = {styles.stockName}>
                    {props.name}
                </Text>
            </View>
            <View style = {styles.trendContainer}>
                <StockPlotComponent data = {props.data}/>
            </View>
            <View style = {styles.priceContainer}>
                <Text style = {{paddingLeft : 5, fontWeight : "bold"}}>
                    {props.data[props.data.length - 1]}
                </Text>
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
        flex : 0.55,
        flexDirection : "column",
        alignContent : "center",
        justifyContent : "center",
    },
    priceContainer : {
        flex : 0.2,
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
