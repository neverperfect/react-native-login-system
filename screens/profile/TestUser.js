import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class TestUser extends Component {


    render() {
      const { params } = this.props.navigation.state;
        return (
                <View style={styles.container}>
                <Image style={{height: 50, width: 50}} source={require('../../assets/snack-icon.png')} />
                    <Text style={styles.text}> Test User's Profile </Text>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2896d3',
        paddingLeft: 40,
        paddingRight: 40,
    },
    text: {
        color: '#fff',
    }
})