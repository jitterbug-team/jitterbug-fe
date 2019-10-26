import React from 'react'
import axios from "axios/index"
import {SafeAreaView, FlatList, StyleSheet, Text} from 'react-native'
import TaskListItem from "../components/TaskListItem";

class TaskScreen extends React.Component {

    state = {
        tasks: []
    }

    componentDidMount() {
        self = this
        axios.get('https://jitterbug-service.herokuapp.com/task/location/Manchester')
            .then(function (response) {
                // handle success
                //console.log(response)

                self.setState({
                    tasks: response.data
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
                        <TaskListItem
                            pinUrl={item.personInNeed.image}
                            category={item.category}
                            description={item.description}
                            pinFirstName={item.personInNeed.firstName}
                            pinLastName={item.personInNeed.lastName}

                        />
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
