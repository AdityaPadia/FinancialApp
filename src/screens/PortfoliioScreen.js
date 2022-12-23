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

import WatchlistHorizontalComponent from '../components/WatchlistHorizontalComponent';

const PortfolioScreen: () => Node = () => {
    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.portfolioSummaryContainer}>
                <View style = {styles.portfolioSummary}>
                    <View style = {styles.valueContainer}>
                        <Text style = {styles.headingText}>
                            Current Value
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
                    <WatchlistHorizontalComponent />
                    <WatchlistHorizontalComponent />
                    <WatchlistHorizontalComponent />
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