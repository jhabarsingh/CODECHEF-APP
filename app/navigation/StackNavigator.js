// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Upcoming from '../screens/Upcoming';
import ReportBug from '../screens/ReportBug';
import User from '../screens/User'

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
}

const AboutStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

const UpcomingStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Upcoming" component={Upcoming} />
    </Stack.Navigator>
  );
}

const ReportBugStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="ReportBug" component={ReportBug} />
    </Stack.Navigator>
  );
}

const UserStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
}


export { 
  MainStackNavigator, 
  ContactStackNavigator, 
  AboutStackNavigator, 
  UpcomingStackNavigator,
  ReportBugStackNavigator,
  UserStackNavigator
};