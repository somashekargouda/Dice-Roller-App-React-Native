import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View, TouchableOpacity
} from 'react-native';

export default class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      uri:require("./assets/dice1.png"),
      uri2:require("./assets/dice1.png")

    }
  }

  getRandomNumber = () =>{
    return Math.floor(Math.random()*6)+1
  }

   getRandomNumber2 = () =>{
    return Math.floor(Math.random()*6)+1
  }

  playButtonPressed = () =>{
    let rNumber = this.getRandomNumber();
    let rNumber2 = this.getRandomNumber2();

    switch(rNumber){
      case 1: this.setState({uri:require("./assets/dice1.png")})
      break;
      case 2: this.setState({uri:require("./assets/dice2.png")})
      break;
      case 3: this.setState({uri:require("./assets/dice3.png")})
      break;
      case 4: this.setState({uri:require("./assets/dice4.png")})
      break;
      case 5: this.setState({uri:require("./assets/dice5.png")})
      break;
      case 6: this.setState({uri:require("./assets/dice6.png")})
      break;
    }

    
    switch(rNumber2){
      case 1: this.setState({uri2:require("./assets/dice1.png")})
      break;
      case 2: this.setState({uri2:require("./assets/dice2.png")})
      break;
      case 3: this.setState({uri2:require("./assets/dice3.png")})
      break;
      case 4: this.setState({uri2:require("./assets/dice4.png")})
      break;
      case 5: this.setState({uri2:require("./assets/dice5.png")})
      break;
      case 6: this.setState({uri2:require("./assets/dice6.png")})
      break;
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <View style= {styles.imagecontainer} >
      <Image style={{height:100, width:100}} source={this.state.uri}  />
      <Image style={{height:100, width:100}} source={this.state.uri2}  />
      </View>
      <TouchableOpacity
      onPress={this.playButtonPressed}
      >
      <Text style={styles.btntext} >Play Game</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B2B52',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btntext:{
    fontWeight:"bold",
    marginTop:35,
    color:"white",
    fontSize:20,
    borderWidth:2,
    padding:10,
    borderRadius:5,
    borderColor:"white"
  },
  imagecontainer:{
    flexDirection:"row"
  }
});
