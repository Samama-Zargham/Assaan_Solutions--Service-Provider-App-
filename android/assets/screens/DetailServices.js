import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import ICON from 'react-native-vector-icons/Ionicons';
import { CommonActions } from '@react-navigation/native';
import { COLORS, SPLASH, HOME, LOGO } from '../styles/Allstyles'
import { MAINHOME } from "../styles/styles"
import Icon, { Icons } from '../components/Icons';
import { REC_Services2 } from '../components/SplashDATA';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onSearch: false
        }
    }
    rec_TouchableBOx = (i, index) => {
        return (
            <TouchableOpacity key={index}
                onPress={() => this.props.navigation.navigate("SelectDetails")}
                activeOpacity={0.8}
                style={{
                    height: 120,
                    width: "100%",
                    backgroundColor: COLORS.WHITE,
                    marginTop: 10,
                    borderRadius: 10,
                    elevation: 5,
                    flexDirection: "row",
                    padding: 10
                }}>
                <Image source={i.image}
                    style={{
                        height: 100,
                        width: "30%",
                        borderRadius: 7
                    }} />
                <View style={{
                    // flexDirection: "row",
                    // justifyContent: "space-between",
                    marginHorizontal: 10,
                }}>
                    <Text style={[HOME.SerIconTxt]}>{i.title}</Text>
                    <Text style={{ color: COLORS.TEXT_COLOR, fontWeight: "bold", fontSize: 12 }}>{i.sale}</Text>

                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Icon name="star" type={Icons.MaterialIcons} size={14} color={COLORS.Rating} />
                        <Icon name="star" type={Icons.MaterialIcons} size={14} color={COLORS.Rating} />
                        <Icon name="star" type={Icons.MaterialIcons} size={14} color={COLORS.Rating} />
                        <Icon name="star" type={Icons.MaterialIcons} size={14} color={COLORS.Rating} />
                        <Text style={{ color: COLORS.TEXT_COLOR, fontWeight: "bold", fontSize: 12 }}>{i.ratings}</Text>
                    </View>

                    <Text style={{ color: "gray", fontSize: 12 }}>Start from <Text style={{ color: COLORS.PRIMARY, fontWeight: "bold" }}>{i.priceStart}</Text></Text>
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={LOGO.container}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={LOGO.headr_1} />
                    <TouchableOpacity
                        onPress={() => (this.props.navigation.dispatch(CommonActions.goBack()))}
                        style={LOGO.backIcon}>
                        <ICON name='chevron-back' size={24} color={COLORS.WHITE} />
                    </TouchableOpacity>
                    <Text style={[LOGO.h1txt, { alignSelf: "center", color: COLORS.WHITE, position: "absolute", top: 20 }]}>Electrical Services</Text>
                    <View style={MAINHOME.searchContainer}>
                        <Icon name="search-sharp" type={Icons.Ionicons} size={17} color={COLORS.BLACK_COLOR} />
                        <TextInput
                            style={{ flexGrow: 1 }}
                            placeholder='Search book'
                            placeholderTextColor={COLORS.BLACK_COLOR}
                            onFocus={() => this.setState({ onSearch: true })}
                        // onChangeText={(text) => this.setState({ bookName: text })}
                        />
                        {this.state.onSearch && <TouchableOpacity activeOpacity={0.7}>
                            <Icon name="backspace" type={Icons.Ionicons} size={25} color={COLORS.BLACK_COLOR} />
                        </TouchableOpacity>}
                    </View>
                    <Image style={LOGO.deta_Img} source={require('../src/imgs/Electrician.jpg')} />
                    <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate("MapEmployee")}
                        style={LOGO.current_serviceProviders}
                        activeOpacity={0.8}
                    >
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Icon name="location-pin" type={Icons.Entypo} size={13} color={COLORS.BLACK} />
                            <Text style={{ color: COLORS.GRAY, fontSize: 12, fontWeight: "bold" }}>Current serviceProviders</Text>
                        </View>
                        <Icon name="md-locate" type={Icons.Ionicons} size={13} color={COLORS.BLACK} />
                    </TouchableOpacity>
                    <View style={{ top: 140, padding: 15 }} >
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ padding: 5, marginBottom: 130 }}>
                            <Text style={[HOME.SerIconTxt, {alignSelf:"center"}]}>Choose a service or swipe for more</Text>
                            {REC_Services2.map((i, index) => this.rec_TouchableBOx(i, index))}
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>

        );
    }
}

