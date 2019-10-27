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
        return (
            <TouchableOpacity style={styles.container} onPress={this.onTaskListItemPressed}>
                <Image style={{width: 60, height: 60, borderRadius: 30, marginRight: 10}}
                       source={{uri: this.props.pinUrl}}/>

                <View style={{marginBottom:100}}>
                    <Text style={styles.descriptionText}>{this.props.description}</Text>

                    <View style={styles.nameContainer}>
                        <Text style={styles.firstNameText}>Requested by </Text>
                        <Text style={styles.firstNameText}>{this.props.pinFirstName}</Text>
                        <Text style={styles.lastNameText}>{this.props.pinLastName}</Text>
                    </View>

                    <View style={styles.categoryExpiryContainer}>
                        <View style={styles.categoryContainer}>
                            <Text style={styles.categoryText}>{this.props.category}</Text>
                        </View>
                        <Text style={styles.categoryContainer} >Expires in {this.getFormattedExpiry()}</Text>
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
        borderColor: Global.COLOUR.GREY,
        borderBottomWidth: 1,
        height: 120
    },

    nameContainer: {
        flexDirection: 'row'
    },

    firstNameText: {
        marginRight: 4,
        fontStyle: 'italic',
        color: Global.COLOUR.WHITE,
    },

    expiryText: {
        marginRight: 4,
        fontStyle: 'italic',
        color: Global.COLOUR.WHITE,
    },

    lastNameText: {
        fontStyle: 'italic',
        color: Global.COLOUR.WHITE
    },

    categoryContainer: {
        marginTop: 10,
        marginRight: 20,
        width: 110,
        height: 25,
        padding: 4,
        backgroundColor: Global.COLOUR.RED,
        borderRadius: 6
    },

    categoryText: {
        color: Global.COLOUR.BLUE,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold'
    },

    descriptionText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Global.COLOUR.WHITE,
        marginBottom: 2
    },

    categoryExpiryContainer: {
        flex: 1,
        flexDirection: 'row'
    }
});

export default TaskListItem
