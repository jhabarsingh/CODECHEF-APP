// ./navigation/DrawerNavigator.js

import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { 
  MainStackNavigator,
  ContactStackNavigator, 
  AboutStackNavigator, 
  UpcomingStackNavigator,
  ReportBugStackNavigator,
  UserStackNavigator
} from "./StackNavigator";

// import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MainStackNavigator} />
      <Drawer.Screen name="Contact" component={ContactStackNavigator} />
      <Drawer.Screen name="About" component={AboutStackNavigator} />
      <Drawer.Screen name="Upcoming Contests" component={UpcomingStackNavigator} />
      <Drawer.Screen name="Report Bug" component={ReportBugStackNavigator} />
      <Drawer.Screen name="User" component={UserStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;