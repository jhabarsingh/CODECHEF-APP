import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, SafeAreaView } from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button';
import { block } from 'react-native-reanimated';
import { Icon } from 'react-native-elements'

import UserDetail from './UserDetail';

class Inputs extends Component {
   state = {
      profile: null,
      contests: null,
      questions: null,
      data: null,
      done1: false,
      done2: false,
      done3: false,

   }
   handleProfile = (text) => {
      this.setState({ profile: text })
   }
   
   save = (profile) => {
     fetch(`https://codechef-api.herokuapp.com/user/?username=${profile}`)
     .then((response) => {
      return response.json()
     })
     .then((datas) => {
       if("details" in datas) {
         alert("User doesn't exist")
       }
       else {
          this.setState({data: datas})
          this.setState({done1: true});
       }
     })


      fetch(`https://codechef-api.herokuapp.com/user/contests/?username=${profile}`)
      .then((response) => {
      return response.json()
      })
      .then((datas) => {
         this.setState({contests: datas})
         this.setState({done2: true});
      })

      fetch(`https://codechef-api.herokuapp.com/user/questions/?username=${profile}`)
      .then((response) => {
      return response.json()
      })
      .then((datas) => {
         this.setState({questions: datas})
          this.setState({done3: true});
      })
   }


   render() {
      return (
         (this.state.done1 && this.state.done2 && this.state.done3) == false ? (
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
         ) : 
         (
            <View>
               <Button
                  icon={
                     <Icon
                     reverse
                     onPress = {
                        () => this.setState({done1: false,done2: false, done3: false})
                     }

                     name='reload'
                     type='ionicon'
                     color='#517fa4'
                     style={{flex: 1}}
                     />
                  }
                  style={{backgroundColor: "lightgreen"}}
               >
               </Button>
               
               <SafeAreaView>
                  <UserDetail
                        data={this.state.data}
                        contests={this.state.contests}
                        questions={this.state.questions}
                     />
               </SafeAreaView>

            </View>
         )
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
   submitButton1: {
      backgroundColor: '#7a42f4',
      padding: 20,
      margin: 5,
      height: 40,
      flex: 1
   },
   submitButtonText:{
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold'
   }
})