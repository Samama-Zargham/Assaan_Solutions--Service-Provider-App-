import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import ICON from 'react-native-vector-icons/Ionicons';
import { CommonActions } from '@react-navigation/native';
import { COLORS, SPLASH, HOME, LOGO, LOGIN } from '../styles/Allstyles'
import { MAINHOME } from "../styles/styles"
import Icon, { Icons } from '../components/Icons';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onSearch: false
        }
    }

    render() {
        return (
            <View style={LOGO.container}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={LOGO.headr} />
                    <TouchableOpacity
                        onPress={() => (this.props.navigation.dispatch(CommonActions.goBack()))}
                        style={LOGO.backIcon}>
                        <ICON name='chevron-back' size={24} color={COLORS.WHITE} />
                    </TouchableOpacity>
                    <Text style={[LOGO.h1txt, { alignSelf: "center", color: COLORS.WHITE, position: "absolute", top: 20 }]}>Booking Service</Text>

                    <Text style={[HOME.SerIconTxt, { alignSelf: "center" }]}>Enter Booking Information</Text>
                    <Text style={[HOME.SerIconTxt, { alignSelf: "center", color: COLORS.PRIMARY }]}>Don't enter fake Information</Text>

                    <View style={LOGIN.inputView}>
                        <Text style={LOGO.h2txt}>Name</Text>
                        <TextInput
                            style={LOGO.TxtInput}
                            placeholder="Enter Name" />
                    </View>
                    <View style={LOGIN.inputView}>
                        <Text style={LOGO.h2txt}>Password</Text>
                        <TextInput
                            style={LOGO.TxtInput}
                            placeholder="Enter Password" />
                    </View>
                    <View style={LOGIN.inputView}>
                        <Text style={LOGO.h2txt}>Phone number</Text>
                        <TextInput
                            style={LOGO.TxtInput}
                            placeholder="Enter Phone number" />
                    </View>
                    
                    <View style={LOGIN.inputView}>
                        <Text style={LOGO.h2txt}>Address</Text>
                        <TextInput
                            style={LOGO.TxtInput}
                            placeholder="Enter Address" />
                    </View>
                    <TouchableOpacity
                        style={[LOGO.btn,]}
                        activeOpacity={0.8}
                        onPress={() => {
                            // this.props.navigation.navigate("BookService");
                        }}
                    >
                        <Text style={LOGO.btntxt}>Continue</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

        );
    }
}

