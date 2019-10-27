import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Dimensions, Image, View, FlatList} from "react-native"
import axios from "axios";
import Global from "../util/Globals";
import {withNavigation} from "react-navigation";
import TaskListItem from "../components/TaskListItem";
import {
    Text,
    Avatar
} from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

const IMAGE_SIZE = SCREEN_WIDTH - 80;

class ProfileScreen extends React.Component {

    static navigationOptions = {
        title: 'Profile',
    };


    constructor() {
        super();
        this.state = {
            helper: {},
            helperTasks: []
        }
    }

    getHelperId = () => {
        const helperId = '5db54f7ad6190c4e3f74ec04'
        return helperId
    }

    componentDidMount() {
        const helperId = this.getHelperId()
        const helper = {
            country: 'UK',
            firstName: 'Davide',
            lastName: 'Patti',
            email: 'davide.patti@gmail.com',
            phone: '07599478932',
            location: 'Manchester',
            image: 'https://scontent-lht6-1.cdninstagram.com/vp/c5d3f6d8d794eaffedaf6929d837b139/5E5A949B/t51.2885-15/sh0.08/e35/p640x640/61628400_369372150376356_8921712024887641085_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_cat=100 640w,https://scontent-lht6-1.cdninstagram.com/vp/d7333a3da55de840099fb49ef9bba563/5E55919B/t51.2885-15/sh0.08/e35/p750x750/61628400_369372150376356_8921712024887641085_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_cat=100 750w,https://scontent-lht6-1.cdninstagram.com/vp/8249a0e35ae67cce4c1505cfb96db44d/5E52116D/t51.2885-15/e35/61628400_369372150376356_8921712024887641085_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_cat=100 1080w'
        }

        this.setState({
            helper
        })

        axios.get(`https://jitterbug-service.herokuapp.com/task/helper/5db54f7ad6190c4e3f74ec04/completed/false`)
            .then((response) => {
                this.setState({
                    helperTasks: response.data
                })
            })

    }

    onTaskListItemPressed = (id) => {
        this.props.navigation.navigate('TaskDetails', {
            taskId: id,
            onGoBack: () => this.refreshPage()
        })
    }

    render() {
        console.log(this.state.helperTasks)
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={{
                                uri: this.state.helper.image
                            }}
                            style={{
                                width: IMAGE_SIZE,
                                height: IMAGE_SIZE,
                                borderRadius: 10
                            }}
                        />
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            marginTop: 20,
                            marginHorizontal: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text
                            style={{
                                flex: 1,
                                fontSize: 26,
                                color: 'black',
                                fontWeight: 'bold',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            {this.state.helper.firstName}
                        </Text>
                    </View>
                    <FlatList
                        data={this.state.helperTasks}
                        renderItem={({ item }) => (
                            <TaskListItem
                                id={item.id}
                                pinUrl={item.personInNeed.image}
                                category={item.category}
                                completed={item.completed}
                                showStatus={true}
                                accepted={true}
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

export default withNavigation(ProfileScreen)
