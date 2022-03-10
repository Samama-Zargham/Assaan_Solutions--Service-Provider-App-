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
        <Text style={[LOGO.h1txt, { alignSelf: "center" }]}>Welcome Back</Text>

        <View style={LOGIN.inputView}>
          <Text style={LOGO.h2txt}>Enter PhoneNumber / UserName</Text>
          <TextInput
            style={LOGO.TxtInput}
            placeholder="PhoneNumber / UserName" />
        </View>
        <View style={LOGIN.inputView}>
          <Text style={LOGO.h2txt}>Enter Password</Text>
          <TextInput
            style={LOGO.TxtInput}
            placeholder="Password" />
        </View>
        <TouchableOpacity
          // style={LOGO.btn}
          activeOpacity={0.7}
        // onPress={() => {
        //   this.props.navigation.replace("SignUp");
        // }}
        >
          <Text style={LOGO.forget_resnd}>Forget password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={LOGO.btn}
          activeOpacity={0.8}
          onPress={() => {
            this.props.navigation.navigate("TabHome");
          }}
        >
          <Text style={LOGO.btntxt}>SIGN IN</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

