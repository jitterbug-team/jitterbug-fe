import React from 'react';
import axios from "axios";
import { Button } from 'react-native-elements';
import { View, Dimensions, StyleSheet, ScrollView, Text, Image } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const IMAGE_SIZE = SCREEN_WIDTH - 280;

const CATEGORY_IMAGE_WIDTH = SCREEN_WIDTH - 20;
const CATEGORY_IMAGE_HEIGHT = SCREEN_HEIGHT - 440;

class TaskDetails extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Task',
        };
    };

    state = {
        task: []
    }

    componentDidMount() {
        const id = this.props.navigation.state.params.taskId;
        self = this
        axios.get(`https://jitterbug-service.herokuapp.com/task/${id}`)
            .then(function (response) {
                self.setState({
                    task: response.data
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    render (){
        console.log(this.state.tasks)
        const {name, description, categoryImage, personInNeed} = this.state.task
        const {firstName, image} = personInNeed ? personInNeed : ''
        return (
            <ScrollView style={styles.container} >
                <View  style={{ flex: 1, backgroundColor: 'rgba(47,44,60,1)' }}>
                    <View style={{alignItems: 'center'}}>
                        <Text
                            style={{
                                flex: 1,
                                fontSize: 26,
                                color: 'white',
                                fontWeight: 'bold'
                            }}
                        >
                            {name && name.toUpperCase()}
                        </Text>
                    </View>
                    <View style={
                        {
                            flex: 1,
                            justifyContent: 'space-between',
                            marginBottom: 20,
                            borderBottomEndRadius: 20
                        }
                    }>
                        <Image
                            source={{
                                uri: categoryImage,
                            }}
                            style={{
                                justifyContent: 'space-around',
                                width: CATEGORY_IMAGE_WIDTH,
                                marginLeft:10,
                                marginRight: 10,
                                height: CATEGORY_IMAGE_HEIGHT,
                                borderRadius: 10,
                            }}
                        />
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Image
                            source={{
                                uri: image,
                            }}
                            style={{
                                marginLeft:15,
                                width: IMAGE_SIZE,
                                height: IMAGE_SIZE,
                                borderRadius: 10,
                            }}
                        />
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                marginTop: 20,
                                marginHorizontal: 40,
                                alignItems: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    flex: 1,
                                    fontSize: 29,
                                    color: 'white',
                                }}
                            >
                                {firstName}
                            </Text>
                            <Text
                                style={{
                                    flex: 0.5,
                                    fontSize: 15,
                                    color: 'gray',
                                    textAlign: 'left',
                                    marginTop: 5,
                                }}
                            >
                                0.8 mi
                            </Text>
                        </View>
                    </View>
                    <View  style={{ alignItems: 'center', marginTop:20}}>
                        <Text
                            style={{
                                alignItems: 'center',
                                flex: 2,
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 20,
                                borderColor: 'black',

                            }}
                        >
                            {description}
                        </Text>
                    </View>
                    <View style={[styles.buttonsContainer, { marginBottom: 20 }]}>
                        <Button
                            title="Accept"
                            buttonStyle={{ backgroundColor: 'rgba(127, 220, 103, 1)' }}
                            containerStyle={{ height: 40 }}
                            titleStyle={{ color: 'white', marginHorizontal: 20 }}
                        />
                        <Button
                            title="Decline"
                            buttonStyle={{ backgroundColor: 'rgba(214, 61, 57, 1)' }}
                            containerStyle={{ height: 40 }}
                            type="outline"
                            titleStyle={{ color: 'white', marginHorizontal: 20 }}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}


export default TaskDetails

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    contentView: {
        flex: 1,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 18
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        backgroundColor: '#4F80E1',
        marginBottom: 20,
    },
    heading: {
        color: 'black',
        marginTop: 270,
        fontSize: 22,
        fontWeight: 'bold',
    },
    nameHeader: {
        color: 'white',
        fontSize: 22
    },
});
