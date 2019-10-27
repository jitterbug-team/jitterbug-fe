import React from 'react'
import axios from "axios/index"
import {SafeAreaView, FlatList, StyleSheet, Text, View, ImageBackground, Button} from 'react-native'
import TaskListItem from "../components/TaskListItem";
import Global from "./../util/Globals"
import * as Font from 'expo-font';
import Image from "react-native-web/dist/exports/Image";

class RegisterScreen extends React.Component {

    state = {
        fontLoaded: false
    }

    componentDidMount() {
        Font.loadAsync({
            'pacifico': require('./../../assets/Pacifico-Regular.ttf'),
        }).then(() => {
            this.setState({
                fontLoaded: true
            })
        });
    }

    static navigationOptions = {
        header: null
    };

    onRegisterPressed = () => {
        this.props.navigation.navigate('AppTabs')
    }

    render() {
        if (this.state.fontLoaded) {
            return (
                <SafeAreaView style={styles.container}>
                    <View>
                        <View style={styles.logoContainer}>
                            <ImageBackground style={{width: 100, height: 100, alignSelf: 'center'}} source={require("./../../assets/bee.png")} />
                        </View>

                        <Text style={styles.logoText}>Jitterbug</Text>
                    </View>

                    <Button title='REGISTER'
                    onPress={this.onRegisterPressed}/>
                </SafeAreaView>
            );
        }
        return null
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Global.COLOUR.RED,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    logoText: {
        fontFamily: 'pacifico',
        fontSize: 34,
        letterSpacing: 4,
        color: Global.COLOUR.WHITE
    },

    logoContainer: {
        width: 160,
        height: 160,
        borderRadius: 160,
        backgroundColor: Global.COLOUR.WHITE,
        justifyContent: 'center'
    }
});

export default RegisterScreen
