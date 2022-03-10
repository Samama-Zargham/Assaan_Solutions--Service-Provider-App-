import React, { Component } from 'react';
import { Image, TextInput, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SPLASH, LOGIN, LOGO } from '../styles/Allstyles'
import Icon from 'react-native-vector-icons/Ionicons';
import OTPTextView from 'react-native-otp-textinput';
import { CommonActions } from '@react-navigation/native';


export default class SplashScreen extends Component {
  state = {
    otpInput: '',
    inputText: '',
  };

  alertText = () => {
    const { otpInput = '' } = this.state;
    if (otpInput) {
      Alert.alert(otpInput);
    }
  };

  clear = () => {
    this.input1.clear();
  };

  updateOtpText = () => {
    // will automatically trigger handleOnTextChange callback passed
    this.input1.setValue(this.state.inputText);
  };
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
        <Text style={[LOGO.h1txt, { alignSelf: "center" }]}>Enter 4-digit code you have {"\n"}   recieved on your phone</Text>
        <View style={LOGIN.inputView}>
          <Text style={LOGO.h2txt}>Enter OTP code</Text>
          <OTPTextView
            ref={(e) => (this.input1 = e)}
            containerStyle={{marginTop:-15}}
            handleTextChange={(text) => this.setState({ otpInput: text })}
            inputCount={4}
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity
          // style={LOGO.btn}
          activeOpacity={0.7}
          // onPress={() => {
          //   this.props.navigation.replace("SignUp");
          // }}
        >
        <Text style={LOGO.forget_resnd}>Resend OTP?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={LOGO.btn}
          activeOpacity={0.8}
          onPress={() => {
            this.props.navigation.replace("DetailsSignUp");
          }}
        >
          <Text style={LOGO.btntxt}>Verify</Text>
        </TouchableOpacity>

      </View>

    );
  }
}
