import React, { Component } from 'react';
import { Image, TextInput, View, Text, TouchableOpacity, } from 'react-native';
import { COLORS, SPLASH, LOGIN, LOGO } from '../styles/Allstyles'
import Icon from 'react-native-vector-icons/Ionicons';
import { CommonActions } from '@react-navigation/native';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          password: '',
        };
      }
    render() {
        return (
            <View style={LOGO.container}>
                <View style={LOGO.headr} />
                <TouchableOpacity
                    onPress={() => (this.props.navigation.dispatch(CommonActions.goBack()))}
                    style={LOGO.backIcon}>
                    <Icon name='chevron-back' size={24} color={COLORS.WHITE} />
                </TouchableOpacity>
                <Image
                    style={[LOGO.headerLogo, { marginTop: 30 }]}
                    source={require("../src/imgs/Mylogo.png")}
                    resizeMode="center"
                />
                <Text style={[LOGO.h1txt, { alignSelf: "center" }]}>Sign Up Account </Text>

                <View style={LOGIN.inputView}>
                    <Text style={LOGO.h2txt}>Set UserName</Text>
                    <TextInput
                        style={LOGO.TxtInput}
                        placeholder="Enter username" />
                </View>
                <View style={LOGIN.inputView}>
                    <Text style={LOGO.h2txt}>Set your Password</Text>
                    <TextInput
                        secureTextEntry={true}
                        style={LOGO.TxtInput}
                        placeholder="Enter password" />
                </View>
                <TouchableOpacity
                    style={LOGO.btn}
                    activeOpacity={0.8}
                    onPress={() => {
                        this.props.navigation.navigate("TabHome");
                    }}
                >
                    <Text style={LOGO.btntxt}>SIGN UP</Text>
                </TouchableOpacity>
            </View>

        );
    }
}

