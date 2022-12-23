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
  Image
} from 'react-native';

import axios from 'axios';
import constants from '../../constants';

import WatchlistHorizontalComponent from '../components/WatchlistHorizontalComponent';

import { useNavigation } from '@react-navigation/native';



const DashboardScreen: () => Node = () => {
    const [data, setData] = useState(null);
    const [timeIntervalData, setTimeIntervalData] = useState([]);
    var timeData = [];

    const navigation = useNavigation();

    useEffect(() => {
        const fetchData = async () => {
            try
            {
                const baseURL = constants.alpha_vantage_api_intraday;
                const apiKey = constants.alpha_vantage_api_key;

                const fullURL = baseURL + apiKey;
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
        <SafeAreaView style = {styles.container}>
            <View style = {styles.dashboardTopContainer}>
                <Text style = {styles.title}>
                    Dashboard
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Search")}
                    >
                    <Image source={require("../assets/images/magglass.png")} style = {styles.magglass}>

                    </Image>
                </TouchableOpacity>
            </View>
            <View style = {styles.watchlistContainer}>
                <Text style = {styles.subtitle}>
                    Your Watchlist
                </Text>
                <ScrollView style = {styles.scrollContainer}>
                    <WatchlistHorizontalComponent name = "IBM" data = {timeData}/>
                    <WatchlistHorizontalComponent name = "IBM" data = {timeData}/>
                    <WatchlistHorizontalComponent name = "IBM" data = {timeData}/>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: "lightgrey",
        flex : 1,
    },
    dashboardTopContainer : {
        flex : 0.15,
        backgroundColor : "white",
        flexDirection : "row",
    },
    title : {
        fontSize : 30,
        fontWeight : "bold",
        margin : 10,
        flex : 0.95,
        marginTop : 20,
    },
    subtitle : {
        fontWeight : "bold",
        fontSize : 18,
    },
    magglass : {
        height : "25%",
        width : 35,
        marginTop : 20,
        alignSelf : "flex-end",
    },
    watchlistContainer : {
        paddingTop : 10,
        margin : 10,
        flex : 0.8
    },
    scrollContainer : {
        margin : 10,
        flex : 0.9,
    }
});

export default DashboardScreen;
