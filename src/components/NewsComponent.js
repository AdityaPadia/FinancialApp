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

const NewsComponent: () => Node = (props) => {
    const imageURL = props.imageURL
    return (
        <TouchableOpacity style = {styles.container} onPress = {props.onPress}>
            <View style = {styles.textContainer}>
                <View style = {styles.headingContainer}>
                    <Text style = {{fontWeight : "bold", padding : 5,}}>
                        {props.name}
                    </Text>
                </View>
                <View style = {styles.subHeadingContainer}>
                    <Text style = {{flex : 1, paddingHorizontal : 5}} numberOfLines = {2}>
                        {props.summary}
                    </Text>
                </View>
            </View>
            <View style = {styles.imageContainer}>
                <Image 
                source={{uri : props.imageURL}} 
                style = {{flex : 1}}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        height : 120,
        margin : 5,
        flexDirection : "row",
        paddingBottom : 10,
        borderBottomWidth : 1,
    },
    textContainer : {
        flex : 0.7,
        flexDirection : "column"
    },
    imageContainer : {
        flex : 0.3,
    },
    headingContainer : {
        flex : 0.6
    },
    subHeadingContainer : {
        flex : 0.4
    }
});

export default NewsComponent;