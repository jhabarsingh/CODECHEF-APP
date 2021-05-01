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
import AnnouncementRow from './AnnouncementRow.js';

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
              renderItem={({ item }) => <AnnouncementRow
                  content={item.content}
                  text={item.url_text}
                  url={item.url}
              />}
          />
      </SafeAreaView>
      )
};

const Contact = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetch(`https://codechef-api.herokuapp.com/announcements/`)
    .then((response) => {
    return response.json()
    })
    .then((data) => {
      setAnnouncements(data.announcements);
      console.log(announcements);
    })
  }, []);


  return (
    <View style={styles.container}>
      <CustomListview
        itemList={announcements}
      />
    </View>
  );
}
export default Contact;