import React, {Component} from "react";
import {Text, View, TextInput, StyleSheet} from "react-native";

class Header extends Component{

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

  render(){
    return(
      <View style={styles.lebar}>
      <Text>TUGAS 2 REACT NATIVE</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  lebar :{
    width:"100%",
  }
  })


export default Header;
