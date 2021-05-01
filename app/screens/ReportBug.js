import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View, Button, Linking} from 'react-native';  
  
const instructions = Platform.select({  
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',  
  android:  
    'Double tap R on your keyboard to reload,\n' +  
    'Shake or press menu button for dev menu',  
});  
  
type Props = {};  
export default class App extends Component<Props> {  
  render() {  
    return (  
      <View style={styles.container}>  
        <Text style={styles.welcome}>Report Bug !</Text>  
        <Text style={styles.instructions}>It is an open source project available on github </Text>
        <Text style={styles.instructions1}>If you find any bug you can create an issue in it's github Repository</Text>  
        <Button
            title="Github Link"
            onPress={() => Linking.openURL("https://github.com/jhabarsingh/CODECHEF-APP")}
        >
        </Button>  
      </View>  
    );  
  }  
}  
  
const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
    backgroundColor: '#F5FCFF',  
  },  
  welcome: {  
    fontSize: 20,  
    textAlign: 'center',  
    margin: 10,  
  },  
  instructions: {  
    textAlign: 'center',  
    color: '#333333',  
    marginBottom: 5,
    padding: 5 ,
    fontStyle: 'italic' 
  },  
  instructions1: {
    fontWeight: 'bold',
    textAlign: 'center',  
    color: 'black',  
    padding: 5,
    marginBottom: 10,
    fontStyle: 'italic'        
}
}); 