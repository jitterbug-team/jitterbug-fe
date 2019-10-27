import React from 'react';
import { StyleSheet} from 'react-native';
import {createAppContainer,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TaskScreen from "./app/screens/TaskScreen"
import {FontAwesome5} from "react-native-vector-icons"
import Global from "./app/util/Globals"
import ProfileScreen from "./app/screens/ProfileScreen";
import SettingsScreen from "./app/screens/SettingsScreen";
import { createStackNavigator } from 'react-navigation-stack';
import TaskDetails from "./app/screens/TaskDetails";

const TaskNavigator = createStackNavigator({
  Task: {
    screen: TaskScreen
  },
  TaskDetails:{
    screen: TaskDetails
  }
});

const TabNavigator = createBottomTabNavigator({
  Task: TaskNavigator,
  Profile: ProfileScreen,
  Settings: SettingsScreen
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      if (routeName === 'Task') {
        return <FontAwesome5 name="list" color={focused ? Global.COLOUR.RED : Global.COLOUR.GREY} size={24}/>
      }
      else if (routeName === 'Settings') {
        return <FontAwesome5 name="cog" color={focused ? Global.COLOUR.RED : Global.COLOUR.GREY} size={24}/>
      }
      else if (routeName === 'Profile') {
        return <FontAwesome5 name="user" color={focused ? Global.COLOUR.RED : Global.COLOUR.GREY} size={24}/>
      }
    },
  }),
  tabBarOptions: {
    activeTintColor: Global.COLOUR.RED,
    inactiveTintColor: Global.COLOUR.GREY,
    showLabel: false
  },
});

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
