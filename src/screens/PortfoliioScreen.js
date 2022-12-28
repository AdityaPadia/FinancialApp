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

import WatchlistHorizontalComponent from '../components/WatchlistHorizontalComponent';
import HoldingsHorizontalComponent from '../components/HoldingsHorizontalComponent';
import { useNavigation } from '@react-navigation/native';

const PortfolioScreen: () => Node = () => {

    const sharesData = [10, 15, 30, 5];
    var currentValue = 0;
    const [curValue, setCurValue] = useState(0);
    const [todaysPNL, setTodaysPNL] = useState(0);

    const navigation = useNavigation();

    const getData = (childData) => {
        if (!isNaN(childData))
        {
            currentValue += childData;
            currentValue.toPrecision(1)
            setCurValue(currentValue);
        }
    }

    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.portfolioSummaryContainer}>
                <View style = {styles.portfolioSummary}>
                    <View style = {styles.valueContainer}>
                        <Text style = {styles.headingText}>
                            Current Value:  ${'\t',curValue}
                        </Text>
                    </View>
                    <View style = {styles.valueContainer}>
                        <Text style = {styles.headingText}>
                            Today's P&L
                        </Text>
                    </View>
                </View>
            </View>
            <View style = {styles.watchlistContainer}>
                <Text style = {styles.subtitle}>
                    Your Holdings
                </Text>
                <ScrollView style = {styles.scrollContainer}>
                    <HoldingsHorizontalComponent name = "IBM" shares = {sharesData[0]} setValue = {getData} onPress = {() => {navigation.navigate("Details", {
                        name : "IBM"
                    })}}/>
                    <HoldingsHorizontalComponent name = "META" shares = {sharesData[1]} setValue = {getData} onPress = {() => {navigation.navigate("Details", {
                        name : "META"
                    })}}/>
                    <HoldingsHorizontalComponent name = "GOOGL" shares = {sharesData[2]} setValue = {getData} onPress = {() => {navigation.navigate("Details", {
                        name : "GOOGL"
                    })}}/>
                    <HoldingsHorizontalComponent name = "NFLX" shares = {sharesData[3]} setValue = {getData} onPress = {() => {navigation.navigate("Details", {
                        name : "NFLX"
                    })}}/>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : "white",
        flex : 1,
    },
    portfolioSummaryContainer : {
        flex : 0.25,
        alignItems : "center",
        justifyContent : "center"
    },
    portfolioSummary : {
        width : "90%",
        flex : 0.9,
        borderWidth : 1,
    },
    valueContainer : {
        flex : 0.5,
        justifyContent : "center",
        padding : 10,
    },
    headingText : {
        fontSize : 18,
    },
    subtitle : {
        fontSize : 16,
        margin : 10,
        fontWeight : "bold"
    },
    watchlistContainer : {
        paddingTop : 10,
        flex : 0.75,
        backgroundColor : "lightgrey"
    },
})

export default PortfolioScreen;