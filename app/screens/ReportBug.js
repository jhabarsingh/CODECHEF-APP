import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View, Button, Linking} from 'react-native';  
import { Card, Icon} from 'react-native-elements'

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
      <Card>
  <Card.Title style={{fontSize: 20, fontWeight: 'bold'}} >Report Bug !</Card.Title>
  <Card.Divider/>
  <Card.Image source={require('../assets/bugs.png')}>
  </Card.Image>
  <Card.Divider />

  <View>
    <Text
      style={{marginBottom: 10, color: 'black', fontSize: 12, fontWeight: 'bold'}}>
        It is an open source project available on github 
      </Text>

      <Text
      style={{marginBottom: 10, color: 'black', fontSize: 12, fontWeight: 'bold'}}>
        If you find any bug you can create an issue in it's github Repository 
      </Text>

      <Button
        icon={<Icon name='code' color='#ffffff' />}
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        onPress={() => Linking.openURL("https://github.com/jhabarsingh/CODECHEF-APP")}
        title='Github Link' />
  </View>
</Card>

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