
import React, { useState,createContext } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from '../components/homeComponent/header';
import Body from '../components/homeComponent/body';

const home = ()=>{
  
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Header/>
        </View>
        <View style={styles.body}>
          <Body />
        </View>
    
    </SafeAreaView>          
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  header:{
    height:54,
    backgroundColor:'white',
    elevation:20,
    shadowColor:'black',
  },
  body:{
    marginVertical:4
  },

});

export default home;
