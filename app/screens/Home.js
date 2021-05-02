import React, { Component } from 'react'
import { LogBox, View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button';
import { block } from 'react-native-reanimated';
import { Icon } from 'react-native-elements'
import { Card, Avatar, Badge } from 'react-native-elements'


import UserDetail from './UserDetail';
import ContestDetail from './ContestDetail';

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
         this.setState({contests: datas.data})
         this.setState({done2: true});
      })

      fetch(`https://codechef-api.herokuapp.com/user/questions/?username=${profile}`)
      .then((response) => {
      return response.json()
      })
      .then((datas) => {
         console.log(datas);
          this.setState({done3: true});
      })
   }

   componentDidMount() {
      LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
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
            <SafeAreaView>
               <ScrollView>
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
               
                  <UserDetail
                        data={this.state.data}
                        contests={this.state.contests}
                        questions={this.state.questions}
                     />
                     <Card>
                     <Badge style={{fontSize:5, width:10, padding: 10, margin:10}} value={this.state.contests == null ? 0: this.state.contests.length } status="error" />
                        <Card.Title>CONTESTS 
                        </Card.Title>
                              <FlatList
                              data={this.state.contests}
                              keyExtractor={item => item.name.toString()}
                              renderItem={({ item }) => <ContestDetail
                                    name={item.name}
                                    day={item.day}
                                    month={item.month}
                                    year={item.year}
                                    rating={item.rating}
                                    color={item.color}
                              />
                              }
                           />
                     </Card>
                  </View>
                  </ScrollView>
            </SafeAreaView>
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