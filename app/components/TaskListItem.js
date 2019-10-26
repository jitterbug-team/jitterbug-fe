import React from 'react'
import axios from "axios/index"
import {SafeAreaView, FlatList, StyleSheet, Text} from 'react-native'

class TaskListItem extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Image src={this.props.user.url}/>

                <View>
                    <Text>{this.props.name}</Text>
                    <Text>{this.props.category}</Text>
                    <Text>{this.props.description}</Text>
                    <Text>{this.props.user.name}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    }
});

export default TaskListItem