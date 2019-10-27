import React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import Global from "./../util/Globals"

class TaskListItem extends React.Component {

    onTaskListItemPressed = () => {
        this.props.onTaskListItemPressed(this.props.taskId)
    }

    getFormattedExpiry() {
    }



    render() {
        console.log('this.props.showStatus', this.props.showStatus)
        return (
            <TouchableOpacity style={styles.container} onPress={this.onTaskListItemPressed}>
                <Image style={{width: 50, height: 50, borderRadius: 25, marginRight: 10}}
                       source={{uri: this.props.pinUrl}}/>

                <View style={styles.primaryContainer}>
                    <Text numberOfLines={1} style={styles.descriptionText}>{this.props.description}</Text>

                    <View style={styles.nameContainer}>
                        <Text>Requested by </Text>
                        <Text style={styles.firstNameText}>{this.props.pinFirstName}</Text>
                        <Text style={styles.lastNameText}>{this.props.pinLastName}</Text>
                    </View>

                    <View style={styles.categoryExpiryContainer}>
                        <View style={styles.categoryContainer}>
                            <Text style={styles.categoryText}>{this.props.category}</Text>
                        </View>
                        <Text style={styles.expiryText}> {this.props.showStatus ? null : 'Expires in 3 days'}</Text>
                        <Text style={styles.expiryText}> {this.props.showStatus ? null : `0.${Math.floor(Math.random() * 6) + 1} mi away`}</Text>
                    </View>

                    <View style={styles.categoryExpiryContainer}>
                        <View style={styles.categoryContainer}>
                            <Text style={styles.categoryText}>{this.props.category}</Text>
                        </View>
                        <Text style={styles.expiryText}> { this.props.showStatus && this.props.completed ? 'Completed' : this.props.showStatus ? "In Progress" : null} </Text>
                    </View>

                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        borderColor: Global.COLOUR.LIGHT_GREY,
        borderBottomWidth: 1,
        height: 120
    },

    nameContainer: {
        flexDirection: 'row',
        marginBottom: 14
    },

    firstNameText: {
        marginRight: 4,
        fontStyle: 'italic'
    },

    lastNameText: {
        fontStyle: 'italic'
    },

    categoryContainer: {
        width: 100,
        height: 25,
        padding: 4,
        backgroundColor: Global.COLOUR.RED,
        borderRadius: 6
    },

    categoryText: {
        color: Global.COLOUR.WHITE,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold'
    },

    descriptionText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Global.COLOUR.DARK_GREY,
        marginBottom: 4
    },

    categoryExpiryContainer: {
        flex: 1,
        flexDirection: 'row'
    },

    primaryContainer: {
        marginRight: 60
    },

    expiryText: {
        alignSelf: 'center',
        textAlign: 'right',
        marginLeft: 30
    },

    statusText: {
        alignSelf: 'center',
        textAlign: 'right',
        marginLeft: 60,
        marginTop: 20
    }
});

export default TaskListItem
