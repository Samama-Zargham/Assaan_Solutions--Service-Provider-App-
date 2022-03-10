import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import ICON from 'react-native-vector-icons/Ionicons';
import { CommonActions } from '@react-navigation/native';
import { COLORS, SPLASH, HOME, LOGO } from '../styles/Allstyles'
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
                    <View style={LOGO.headr_1} />
                    <TouchableOpacity
                        onPress={() => (this.props.navigation.dispatch(CommonActions.goBack()))}
                        style={LOGO.backIcon}>
                        <ICON name='chevron-back' size={24} color={COLORS.WHITE} />
                    </TouchableOpacity>
                    <Text style={[LOGO.h1txt, { alignSelf: "center", color: COLORS.WHITE, position: "absolute", top: 20 }]}>Electrical Services</Text>

                    <Image style={[LOGO.deta_Img, { top: 70 }]} source={require('../src/imgs/plumber1.jpg')} />
                    <View style={{
                        backgroundColor: COLORS.WHITE,
                        width: "80%",
                        padding: 10,
                        borderRadius: 7,
                        marginHorizontal: 10,
                        marginHorizontal: "10%",
                        top: 70,
                        elevation: 10
                    }}>
                        <Text style={[HOME.SerIconTxt]}>Electrical Installation</Text>

                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Icon name="star" type={Icons.MaterialIcons} size={14} color={COLORS.Rating} />
                            <Icon name="star" type={Icons.MaterialIcons} size={14} color={COLORS.Rating} />
                            <Icon name="star" type={Icons.MaterialIcons} size={14} color={COLORS.Rating} />
                            <Icon name="star" type={Icons.MaterialIcons} size={14} color={COLORS.Rating} />
                            <Text style={{ color: COLORS.TEXT_COLOR, fontWeight: "bold", fontSize: 12 }}>4.1</Text>
                        </View>
                        <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>

                            <Text style={{ color: COLORS.TEXT_COLOR, fontWeight: "bold", fontSize: 12 }}>Upto 50% off</Text>
                            <Text style={{ color: COLORS.PRIMARY, fontWeight: "bold" }}>$50.32</Text>
                        </View>

                    </View>
                    <View style={{
                        backgroundColor: COLORS.WHITE,
                        width: "90%",
                        padding: 12,
                        borderRadius: 7,
                        marginHorizontal: 10,
                        marginHorizontal: "5%",
                        top: 90,
                        elevation: 10
                    }}>
                        <Text style={[HOME.SerIconTxt]}>Working Hours</Text>
                        <Text style={{ color: "gray", fontSize: 12 }}>Monday to Saturday</Text>
                        <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>

                            <Text style={{ color: COLORS.TEXT_COLOR, fontWeight: "bold", fontSize: 12 }}>11:00am - 6:00pm</Text>
                            <Text style={{ color: COLORS.WHITE, fontWeight: "bold", fontSize: 12, backgroundColor: COLORS.PRIMARY, padding: 3, borderRadius: 20 }}> Sunday Close </Text>

                        </View>
                    </View>
                    <View style={{
                        backgroundColor: COLORS.WHITE,
                        width: "90%",
                        padding: 12,
                        borderRadius: 7,
                        marginHorizontal: 10,
                        marginHorizontal: "5%",
                        top: 110,
                        elevation: 10
                    }}>
                        <Text style={[HOME.SerIconTxt]}>Assaan Solution Services</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Icon name="location-pin" type={Icons.Entypo} size={12} color={COLORS.BLACK} />
                            <Text style={{ color: COLORS.GRAY, fontSize: 12, }}>Providing this service in Rahim Yar Khan</Text>
                        </View>
                        <Text style={{ color: COLORS.GRAY, fontSize: 12, }}>We are providing the best electrical services in Rahim Yar Khan</Text>
                        <Text style={{ color: COLORS.GRAY, fontSize: 12, }}>We are providing the best electrical services in Rahim Yar Khan. We are providing the best electrical services in Rahim Yar Khan</Text>

                    </View>
                    <TouchableOpacity
                        style={[LOGO.btn,{top:110}]}
                        activeOpacity={0.8}
                        onPress={() => {
                            this.props.navigation.navigate("BookService");
                        }}
                    >
                        <Text style={LOGO.btntxt}>Continue</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

        );
    }
}

