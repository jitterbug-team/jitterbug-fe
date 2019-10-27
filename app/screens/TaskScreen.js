import React from 'react'
import axios from "axios/index"
import {SafeAreaView, FlatList, StyleSheet, Text, ScrollView} from 'react-native'
import TaskListItem from "../components/TaskListItem";
import { withNavigation } from 'react-navigation';



class TaskScreen extends React.Component {

    static navigationOptions = {
        title: 'Available Tasks',
    };

    state = {
        tasks: []
    }

    refreshPage = () =>{
        axios.get('https://jitterbug-service.herokuapp.com/task/location/Manchester')
            .then((response) => {
                console.log(response.data)
                this.setState({
                    tasks: response.data
                })
            })
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
        this.props.navigation.navigate('TaskDetails', {
            taskId: id,
            onGoBack: () => this.refreshPage()
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={{ flex: 1}} >
                <FlatList
                    data={this.state.tasks}
                    renderItem={({ item }) => (
                        <TaskListItem
                            id={item.id}
                            pinUrl={item.personInNeed.image}
                            category={item.category}
                            showStatus={false}
                            description={item.description}
                            pinFirstName={item.personInNeed.firstName}
                            pinLastName={item.personInNeed.lastName}
                            onTaskListItemPressed={() => this.onTaskListItemPressed(item.id)}
                        />
                    )}
                    keyExtractor={item => item.id}
                />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default withNavigation(TaskScreen)
