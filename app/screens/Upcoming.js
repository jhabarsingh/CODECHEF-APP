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
import UpcomingRow from './UpcomingRow.js'
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
              keyExtractor={item => item.contest.toString()}
              renderItem={({ item }) => <UpcomingRow
                  content={item.contest}
                  text={"Link"}
                  url={item.url}
              />}
          />
      </SafeAreaView>
      )
};

const Upcoming = () => {
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    fetch(`https://codechef-api.herokuapp.com/upcoming-contest/`)
    .then((response) => {
    return response.json()
    })
    .then((data) => {
      let temp = []
      temp.push(data);
      setUpcoming(temp);
    })
  }, []);


  return (
    <View style={styles.container}>
      <CustomListview
        itemList={upcoming}
      />
    </View>
  );
}
export default Upcoming;