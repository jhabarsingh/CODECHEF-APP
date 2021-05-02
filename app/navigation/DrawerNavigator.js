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
      <Drawer.Screen name="Codechef Profile" component={MainStackNavigator} />
      <Drawer.Screen name="Codechef Contests" component={UpcomingStackNavigator} />
      <Drawer.Screen name="All Contests" component={ContactStackNavigator} />
      <Drawer.Screen name="Announements" component={AboutStackNavigator} />
      <Drawer.Screen name="Report Bugs" component={ReportBugStackNavigator} />
      <Drawer.Screen name="Developer" component={UserStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;