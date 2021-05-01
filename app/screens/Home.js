import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { AsyncStorage } from 'react-native';
import { block } from 'react-native-reanimated';


class Inputs extends Component {
   state = {
      profile: '',
      data: ''
   }
   handleProfile = (text) => {
      this.setState({ profile: text })
   }
   
   save = (profile) => {
     fetch(`https://codechef-api.herokuapp.com/user/?username=${profile}`)
     .then((response) => {
      return response.json()
     })
     .then((data) => {
       if("details" in data) {
         alert("User doesn't exist")
       }
       else {
        this.data = data;
        console.log(this.data)
       }
     })
   }


   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Codechef Profile"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleProfile}/>
          
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.save(this.state.profile)
               }>
               <Text style = {styles.submitButtonText}> Search </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23,
      flex:1,
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center'
   },
   input: {
      margin: 15,
      height: 40,
      width: 250,
      textAlign: 'center',
      borderColor: '#7a42f4',
      borderWidth: 1,
      padding: 10
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      width: 250,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold'
   }
})