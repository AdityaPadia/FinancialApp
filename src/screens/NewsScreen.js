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
  FlatList
} from 'react-native';
import NewsComponent from '../components/NewsComponent';

import { useNavigation } from '@react-navigation/native';

const NewsScreen: () => Node = (props) => {
    const navigation = useNavigation();

    const [data, setData] = useState(null);
    var newsTempData = [];
    var newsTempTitleData = [];
    var newsTempAuthorData = [];
    var newsTempSummaryData = [];
    var newsTempURLData = [];
    var newsTempImageURLData = [];

    useEffect(() => {
        const fetchData = async () => {
            try
            {
                const baseURL = constants.alpha_vantage_news_url;
                const urlPart2 = constants.alpha_vantage_news_url_pt2;
                const apiKey = constants.alpha_vantage_api_key;
                const fullURL = baseURL + props.route.params.name + urlPart2 +  apiKey;
                console.log(fullURL)
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

        for (var i = 0; i < data.feed.length; i++)
        {
            newsTempData.push(data.feed[i]);
            newsTempTitleData.push(data.feed[i].title);
            newsTempAuthorData.push(data.feed[i].authors);
            newsTempSummaryData.push(data.feed[i].summary);
            newsTempURLData.push(data.feed[i].url)
            newsTempImageURLData.push(data.feed[i].banner_image);
        }

    }

    const renderItem = ({item}) => {
        console.log(item.title);
        console.log(item.banner_image);
        console.log(item.summary);

        <NewsComponent name = {item.title} imageURL = {item.banner_image} summary = {item.summary} onPress = {() => navigation.navigate("Browser")}/>
    }

    return(
        // <SafeAreaView style = {styles.container}>
        //     <FlatList
        //     data={newsTempData}
        //     renderItem={renderItem}
        //     style = {styles.scrollContainer}
        //     />
        // </SafeAreaView>
        <SafeAreaView style = {styles.container}>
            <ScrollView style = {styles.scrollContainer}>
                <NewsComponent name = {newsTempTitleData[0]} imageURL = {newsTempImageURLData[0]} summary = {newsTempSummaryData[0]} onPress={() => navigation.navigate("Browser", {uri : newsTempURLData[0]})} />
                <NewsComponent name = {newsTempTitleData[1]} imageURL = {newsTempImageURLData[1]} summary = {newsTempSummaryData[1]} onPress={() => navigation.navigate("Browser", {uri : newsTempURLData[1]})} />
                <NewsComponent name = {newsTempTitleData[2]} imageURL = {newsTempImageURLData[2]} summary = {newsTempSummaryData[2]} onPress={() => navigation.navigate("Browser", {uri : newsTempURLData[2]})} />
                <NewsComponent name = {newsTempTitleData[3]} imageURL = {newsTempImageURLData[3]} summary = {newsTempSummaryData[3]} onPress={() => navigation.navigate("Browser", {uri : newsTempURLData[3]})} />
                <NewsComponent name = {newsTempTitleData[4]} imageURL = {newsTempImageURLData[4]} summary = {newsTempSummaryData[4]} onPress={() => navigation.navigate("Browser", {uri : newsTempURLData[4]})} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "white",
        alignItems : "center",
        justifyContent : "center",
    },
    scrollContainer : {
        width : "90%"
    }
});

export default NewsScreen;