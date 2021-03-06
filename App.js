import React from 'react';
import {StyleSheet} from 'react-native';
import {createAppContainer,} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import TaskScreen from "./app/screens/TaskScreen"
import {FontAwesome5} from "react-native-vector-icons"
import Global from "./app/util/Globals"
import ProfileScreen from "./app/screens/ProfileScreen";
import SettingsScreen from "./app/screens/SettingsScreen";
import {createStackNavigator} from 'react-navigation-stack';
import TaskDetails from "./app/screens/TaskDetails";
import RegisterScreen from "./app/screens/RegisterScreen";

const TaskNavigator = createStackNavigator({
        Task: {
            screen: TaskScreen
        },
        TaskDetails: {
            screen: TaskDetails
        }
    });
const ProfileNavigator = createStackNavigator({
    Profile: {
        screen: ProfileScreen
    }
});

const TabNavigator = createBottomTabNavigator({
    Task: TaskNavigator,
    Profile: ProfileNavigator,
    Settings: SettingsScreen
}, {
    defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, horizontal, tintColor}) => {
            const {routeName} = navigation.state;
            if (routeName === 'Task') {
                return <FontAwesome5 name="list" color={focused ? Global.COLOUR.RED : Global.COLOUR.GREY} size={24}/>
            } else if (routeName === 'Settings') {
                return <FontAwesome5 name="cog" color={focused ? Global.COLOUR.RED : Global.COLOUR.GREY} size={24}/>
            } else if (routeName === 'Profile') {
                return <FontAwesome5 name="user" color={focused ? Global.COLOUR.RED : Global.COLOUR.GREY} size={24}/>
            }
        }
    }),
    tabBarOptions: {
        activeTintColor: Global.COLOUR.RED,
        inactiveTintColor: Global.COLOUR.GREY,
        showLabel: false
    }
});

const RootNavigator = createStackNavigator({
        Register: {
            screen: RegisterScreen
        },
        AppTabs: {
            screen: TabNavigator
        }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            header: null
        })
    });


export default createAppContainer(RootNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
