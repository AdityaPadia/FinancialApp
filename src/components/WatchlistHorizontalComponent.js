import React, { useState, useEffect } from 'react';
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

import constants from '../../constants';
import StockPlotComponent from './StockPlotComponent';

const WatchlistHorizontalComponent: () => Node = (props) => {
    const [data, setData] = useState(null);
    const [timeIntervalData, setTimeIntervalData] = useState([]);
    var timeData = [];

    useEffect(() => {
        const fetchData = async () => {
            try
            {
                const baseURL = constants.alpha_vantage_api_intraday;
                const urlPart2 = constants.alpha_vantage_api_intraday_pt2;
                const apiKey = constants.alpha_vantage_api_key;

                const fullURL = baseURL + props.name + urlPart2 +  apiKey;
                const data = await fetch(fullURL);
                const json = await data.json();
                setData(json)
            }
            catch(error)
            {
                console.log(error);
            }
            
        }

        if (data == null)
        {
            fetchData();
        }
    })

    if (data != null)
    {
        var timeTempData = [];
        for (const key in data["Time Series (5min)"])
        {
            timeTempData.push(parseFloat(data["Time Series (5min)"][key]["4. close"]));
        }
        timeData = timeTempData;

    }

    return (
        <View style = {styles.container}>
            <View style = {styles.nameContainer}>
                <Text style = {styles.stockName}>
                    {props.name}
                </Text>
            </View>
            <View style = {styles.trendContainer}>
                <StockPlotComponent data = {timeData}/>
            </View>
            <View style = {styles.priceContainer}>
                <Text style = {{paddingLeft : 5, fontWeight : "bold"}}>
                    {timeData[timeData.length - 1]}
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
        flex : 0.2,
        flexDirection : "column",
        alignContent : "center",
        justifyContent : "center",
    },
    trendContainer : {
        flex : 0.6,
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
