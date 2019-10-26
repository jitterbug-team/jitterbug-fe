import React from 'react'
import axios from "axios/index"
import {SafeAreaView, FlatList, StyleSheet, Text} from 'react-native'
import TaskListItem from "../components/TaskListItem";

class TaskScreen extends React.Component {

    static navigationOptions = {
        title: 'Available Tasks',
    };

    state = {
        tasks: []
    }

    componentDidMount() {
        self = this
        axios.get('https://jitterbug-service.herokuapp.com/task/location/Manchester')
            .then(function (response) {
                console.log(response.data)
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

    onTaskListItemPressed = (id) => {
        this.props.navigation.navigate('TaskDetails', {taskId: id})
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={this.state.tasks}
                    renderItem={({ item }) => (
                        <TaskListItem
                            id={item.id}
                            pinUrl={item.personInNeed.image}
                            category={item.category}
                            description={item.description}
                            pinFirstName={item.personInNeed.firstName}
                            pinLastName={item.personInNeed.lastName}
                            onTaskListItemPressed={() => this.onTaskListItemPressed(item.id)}
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
        flex: 1
    }
});

export default TaskScreen
