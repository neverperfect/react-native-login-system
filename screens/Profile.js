import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { createAppContainer, createStackNavigator } from "react-navigation";
import QRCode from 'react-native-qrcode-svg';

export default class Profile extends Component {

  scan = () => {
      this.props.navigation.navigate('Scan')
    }


    render() {
      const { params } = this.props.navigation.state;
        return (
                <View style={styles.container}>
                    <Text style={styles.text}> Welcome Back {params.username} </Text>
                    <Text style={styles.text}> Your QR Code: </Text>
                    <View style={{padding:20}}>
                    <QRCode
                    value={params.username}
                    />
                    </View>
                    <View style={{padding:20}}>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={ this.scan }>
                        <Text>Scan another QR Code</Text>
                    </TouchableOpacity>
                    </View>
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
    },
        btn: {
        alignSelf: 'stretch',
        backgroundColor: '#01c853',
        padding: 20,
        alignItems: 'center',
    }
})