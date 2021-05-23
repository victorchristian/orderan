/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, StatusBar,Dimensions} from "react-native";
import Header from "./Header"
import Barang from "./Component/Barang"


const Footer =()=>{
  var niomic = "@Niomic"
  return(
    <View>
    <Text>Footer {niomic}</Text>
    </View>
    )
}


export default class App extends Component<Props>{
  render(){
    return (
      <View style={styles.lebar}>
      <StatusBar backgroundColor="green"/>
      <Header/>
      <Barang namabelanja="================== Total Belanja ================="/>
      <Footer/>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  lebar :{
    width:"100%",
    height:"100%",
    backgroundColor:"#FFF5EE",
  },
  })
