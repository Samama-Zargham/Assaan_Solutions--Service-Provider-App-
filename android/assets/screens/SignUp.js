import React, { Component } from 'react';
import { Image, TextInput, View, Text, TouchableOpacity, } from 'react-native';
import { COLORS, SPLASH, LOGIN, LOGO } from '../styles/Allstyles'
import Icon from 'react-native-vector-icons/Ionicons';
import { CommonActions } from '@react-navigation/native';

export default class SplashScreen extends Component {
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
                <Text style={[LOGO.h1txt, { alignSelf: "center" }]}>Enter working phone number </Text>
                <Text style={[LOGO.h1txt, { alignSelf: "center", color: COLORS.PRIMARY }]}>You want to register</Text>

                <View style={LOGIN.inputView}>
                    <Text style={LOGO.h2txt}>Enter Phone number</Text>
                    <TextInput
                        style={LOGO.TxtInput}
                        placeholder="Phone number" />
                </View>
                <TouchableOpacity
                    style={LOGO.btn}
                    activeOpacity={0.8}
                    onPress={() => {
                        this.props.navigation.navigate("SendOTP");
                    }}
                >
                    <Text style={LOGO.btntxt}>SEND OTP</Text>
                </TouchableOpacity>
            </View>

        );
    }
}

