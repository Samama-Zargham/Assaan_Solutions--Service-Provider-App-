import React, { Component } from 'react';
import { Image, TextInput, View, Text, TouchableOpacity, } from 'react-native';
import { COLORS, SPLASH, LOGIN, LOGO } from '../styles/Allstyles'

export default class SplashScreen extends Component {
    constructor() {
        super();
        this.state = {
            focus: false,
        }
    }
    render() {
        return (
            <View style={LOGO.container}>
                <View style={LOGO.headr} />
                <Image
                    style={[LOGO.headerLogo, { marginTop: 20 }]}
                    source={require("../src/imgs/Mylogo.png")}
                    resizeMode="center"
                />
                <Text style={[LOGO.h1txt, { alignSelf: "center" }]}>Welcome to</Text>
                <Text style={[LOGO.h1txt, { alignSelf: "center", color: COLORS.PRIMARY }]}>Assan Solutions</Text>
                <Text style={[LOGO.h1txt, { alignSelf: "center", }]}>A Marketplace for Service Providers</Text>
                <TouchableOpacity
                    onPressIn={() => this.setState({ focus:  false  })}
                    style={this.state.focus == true ? [LOGO.btn1, { marginTop: 50 }] : [LOGO.btn, { marginTop: 50 }]}
                    activeOpacity={0.8}
                    onPress={() => {
                        this.props.navigation.navigate("LoginScreen");
                    }}
                >
                    <Text style={this.state.focus == true ? LOGO.btntxt1 : LOGO.btntxt}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPressIn={() => this.setState({ focus:  true  })}
                    style={this.state.focus == false ? LOGO.btn1 : LOGO.btn}
                    activeOpacity={0.8}
                    onPress={() => {
                        this.props.navigation.navigate("SignUp");
                    }}
                >
                    <Text style={this.state.focus == false ? LOGO.btntxt1 : LOGO.btntxt}>Sign Up</Text>
                </TouchableOpacity>
            </View>

        );
    }
}

