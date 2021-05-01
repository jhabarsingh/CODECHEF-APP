import React from 'react';

import { 
  SafeAreaView, 
  View, 
  Linking, 
  FlatList, 
  StyleSheet, 
  Text, 
  StatusBar, 
  ListItem, 
  Avatar
} from 'react-native';

import { useState, useEffect } from 'react';
import CustomRow from './CustomRow.js';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const CustomListview = ({ itemList }) => {
      return (
        <SafeAreaView style={styles.container}>
          <FlatList
              data={itemList}
              keyExtractor={item => item.event}
              renderItem={({ item }) => <CustomRow
                  title={item.event}
                  description={`${item.start_time} - ${item.end_time}`}
                  image_url={item.image}
                  url={item.url}
              />}
          />
      </SafeAreaView>
      )
};

const Contact = () => {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    fetch(`https://codechef-api.herokuapp.com/contests/`)
    .then((response) => {
    return response.json()
    })
    .then((data) => {
      setContests(data);
      console.log(contests);
    })
  }, []);


  return (
    <View style={styles.container}>
      <CustomListview
        itemList={contests}
      />
    </View>
  );
}
export default Contact;