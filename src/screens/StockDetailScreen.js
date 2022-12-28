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
import StockPlotComponent from '../components/StockPlotComponent';

const StockDetailScreen: () => Node = (props) => {
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
        console.log(data);
        var timeTempData = [];
        for (const key in data["Time Series (5min)"])
        {
            timeTempData.push(parseFloat(data["Time Series (5min)"][key]["4. close"]));
        }
        timeData = timeTempData;
    }

    return(
        <SafeAreaView style={styles.container}>
          <View style = {styles.topContainer}>
              <Text style = {styles.titleFont}>
                {props.route.params.name}
              </Text>
          </View>
          <View style = {styles.trendContainer}>
            <StockPlotComponent data = {timeData}/>
          </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "lightgrey"
  },
  topContainer : {
    flex : 0.15,
    backgroundColor : "white"
  },
  trendContainer : {
    flex : 0.6,
    borderWidth : 1,
    backgroundColor : "white"
  },
  titleFont : {
    fontSize : 25,
    fontWeight : "bold",
    padding : 10,
  }
})

export default StockDetailScreen;
