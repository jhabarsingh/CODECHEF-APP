/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {

  return (
    <View style={{backgroundColor: 'white'}}>
      <Text style={{ color: "red" }}>Some Text</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
    backgroundColor: "black"
  },

  innerText: {
    backgroundColor: "red"
  }
});

export default App;
