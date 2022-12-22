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
  Image,
  TextInput,
  Keyboard
} from 'react-native';

const SearchScreen: () => Node = () => {
    return (
        <SafeAreaView style = {styles.conatiner} onPress = {() => Keyboard.dismiss()}>
                <View style = {styles.topBarContainer}>
                    <View style = {styles.textInputContainer}>
                        <TextInput placeholder='Search' placeholderTextColor={"black"}>

                        </TextInput>
                    </View>
                </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    conatiner : {
        flex : 1,
        backgroundColor: "lightgrey"
    },
    topBarContainer: {
        flex : 0.1,
        backgroundColor : "white",
        justifyContent : "center"
    },
    textInputContainer : {
        alignSelf : "center",
        justifyContent : "center",
        borderWidth : 1,
        width : "90%",
        flex : 0.5,
        borderRadius : 15,
        textAlign : "center",
        alignItems : "center"
    }
})

export default SearchScreen;