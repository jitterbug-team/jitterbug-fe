import React from 'react'
import axios from "axios/index"
import {SafeAreaView, FlatList, StyleSheet, Text} from 'react-native'

class TaskScreen extends React.Component {

    state = {
        tasks: [
            {
                name: "abc123"
            },
            {
                name: "abc456"
            },
            {
                name: "abc789"
            }
        ]
    }

    componentDidMount() {
        axios.get('/tasks')
            .then(function (response) {
                // handle success
                this.setState({
                    tasks: response.data.tasks
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

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Available Tasks</Text>
                <FlatList
                    data={this.state.tasks}
                    renderItem={({ item }) => (
                        <Text>{item.name}</Text>
                    )}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default TaskScreen