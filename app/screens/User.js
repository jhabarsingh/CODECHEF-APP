import React, { Component} from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import { block } from 'react-native-reanimated';

import { useState, useEffect } from 'react';

import UserDetail from './UserDetail.js';


const User = () => {
    const [data, setData] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [contests, setContests] = useState([]);
    useEffect(() => {
        fetch(`https://codechef-api.herokuapp.com/user/?username=jhabarsingh`)
        .then((response) => {
        return response.json()
        })
        .then((datas) => {
            setData(datas);
            console.log(datas);
        })

        fetch(`https://codechef-api.herokuapp.com/user/contests/?username=jhabarsingh`)
        .then((response) => {
        return response.json()
        })
        .then((datas) => {
            setContests(datas);
            console.log(datas);
        })

        fetch(`https://codechef-api.herokuapp.com/user/questions/?username=jhabarsingh`)
        .then((response) => {
        return response.json()
        })
        .then((datas) => {
            setQuestions(datas);
            console.log(datas);
        })
    }, []);

    return (
        <SafeAreaView>
           <UserDetail
                data={data}
                contests={contests}
                questions={questions}
            />
        </SafeAreaView>
    )
}

export default User

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