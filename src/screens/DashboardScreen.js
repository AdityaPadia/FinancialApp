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

import { useNavigation } from '@react-navigation/native';
import SearchScreen from './SearchScreen';

const DashboardScreen: () => Node = () => {

    const navigation = useNavigation();

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
