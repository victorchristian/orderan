import React, {Component} from "react";
import {Text, View, TextInput, StyleSheet} from "react-native";

class Barang extends Component{

  constructor(props){
    super(props);
    this.state ={
      inputannama:"",
      inputanjumlah:""
    };
  }

hinputannama =(event)=>{
  this.setState({inputannama:event})
}
hinputanjumlah =(event)=>{
  this.setState({inputanjumlah:event})
}

  render(){
    return(
      <View style={styles.lebar}>
      <TextInput onChangeText={this.hinputannama} placeholder="Masukkan Nama Barang"/>
      <TextInput onChangeText={this.hinputanjumlah} placeholder="Masukkan Jumlah Barang" keyboardType="numeric"/>
      <Text>{this.props.namabelanja}</Text>
      <Text>Nama Barang : {this.state.inputannama}</Text>
      <Text>Jumlah Barang : {this.state.inputanjumlah}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  lebar :{
    width:"100%",
  }
  })


export default Barang;
