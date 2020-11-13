import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage,
} from 'react-native';
import { createAppContainer, createStackNavigator } from "react-navigation";

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

    login = () => {
      const username = this.state.username
      console.log(this.state.username, this.state.password)
        if ((this.state.username === 'adhiariawan' && this.state.password === '123password')
        || this.state.username === 'testuser' && this.state.password === 'root') {
          this.props.navigation.navigate('Profile', {
              username: this.state.username,
            })
        } else {
          alert('Username or Password wrong')
        }
    }


    render() {
        return (
            <KeyboardAvoidingView behaviour='padding' style={styles.wrapper}>
                <View style={styles.container}>
                    <Text style={styles.header}> LOGIN </Text>
                    <TextInput
                        style={styles.textInput} placeholder='Username'
                        onChangeText={(username) => this.setState({ username })}
                        underlineColorAndroid='transparent'
                    />     
                    <TextInput
                        style={styles.textInput} placeholder='Password'
                        onChangeText={(password) => this.setState({ password })}
                        underlineColorAndroid='transparent'
                        secureTextEntry={true}
                    />      
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={ this.login }>
                        <Text>Login</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2896d3',
        paddingLeft: 40,
        paddingRight: 40,
    },
    header: {
        fontSize: 24,
        marginBottom: 60,
        color: '#fff',
        fontWeight: 'bold',
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    btn: {
        alignSelf: 'stretch',
        backgroundColor: '#01c853',
        padding: 20,
        alignItems: 'center',
    }
})
