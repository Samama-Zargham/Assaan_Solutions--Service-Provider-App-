import React, { Component } from 'react';
import { Image, View, StatusBar, Text, TouchableOpacity } from 'react-native';
import { COLORS, SPLASH } from '../styles/Allstyles'
import AppIntroSlider from 'react-native-app-intro-slider';
import { PAGES } from '../components/SplashDATA';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const GRADIENT_COLORS = [COLORS.PRIMARY, COLORS.PRIMARY]
export default class SplashScreen extends Component {
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.props.navigation.navigate("LoginScreen")
  //   }, 2000)
  // }
  _renderItem = ({ item }) => {
    return (
      <View style={SPLASH.slide}>
        <Text style={SPLASH.title}>{item.title}</Text>
        <Image style={SPLASH.image} source={item.image} resizeMode="contain" />
        <Text style={SPLASH.text}>{item.text}</Text>
        {item.key === "three" && (
          <TouchableOpacity 
          activeOpacity={0.8}
          onPress={() => {
            this.props.navigation.replace("Welcome");
            // try {
            //   AsyncStorage.setItem("showApp", JSON.stringify(2))
            // } catch (e) {
            //   alert(e)
            // }
          }}  
          >
            <LinearGradient
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
              colors={GRADIENT_COLORS} style={SPLASH.buttonSquare} >
              <Text style={SPLASH.btnText}>Get Started</Text>
              <Icon name="md-arrow-forward" color="rgba(255, 255, 255, .9)" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        )}
      </View>
    );
  }
  render() {
    return (

      <AppIntroSlider
        style={{ flex: 1, backgroundColor: COLORS.WHITE, }}
        renderItem={this._renderItem}
        data={PAGES.slides}
        dotStyle={{ borderColor: COLORS.PRIMARY, borderWidth: 1, }}
        activeDotStyle={{ backgroundColor: COLORS.PRIMARY, }}
      />
    );
  }
}

