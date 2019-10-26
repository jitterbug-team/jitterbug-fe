import React from 'react'
import axios from "axios/index"
import {SafeAreaView, FlatList, StyleSheet, Text, View, Image} from 'react-native'

class TaskListItem extends React.Component {

    render() {
        return (
            <View style={styles.container} onPress={() => this.props.onPress()}>
                <Image src={this.props.pinUrl}/>
                <View>
                    <Text>{this.props.category}</Text>
                    <Text>{this.props.description}</Text>
                    <Text>{this.props.pinFirstName}</Text>
                    <Text>{this.props.pinLastName}</Text>
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
