import React, { Component } from 'react'
import ICON from 'react-native-vector-icons/Ionicons';
import { COLORS, SPLASH, HOME, LOGO, } from '../styles/Allstyles'
import Icon, { Icons } from '../components/Icons';
import { REC_Services1, ser_Icon } from '../components/SplashDATA';
import { REC_Services } from '../components/SplashDATA';
import { SliderBox } from "react-native-image-slider-box";
import {
    View,
    Text,
    TouchableOpacity,
    Switch,
    ScrollView,
    Animated,
    Image,
    StyleSheet,
} from 'react-native'
import ICN from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offsetValue: new Animated.Value(0),
            scaleValue: new Animated.Value(1),
            closeButtonOffset: new Animated.Value(0),
            currentTab: "",
            switchValue: false,
            showMenu: false,
            searchRecipeName: '',
            icon: [
                { name: 'home', btn: "Home", nav_Scrn: "Home" },
                { name: 'mail', btn: "Contact us", nav_Scrn: "Home" },
                { name: 'user', btn: "Profile", nav_Scrn: "Profile" },
                { name: 'hearto', btn: "Favourite", nav_Scrn: "Home" },

            ],
            onSearch: false,
            images: [
                require('../src/imgs/e1.jpg'),
                require('../src/imgs/p1.jpg'),
                require('../src/imgs/Electrician.jpg'),
                require('../src/imgs/c1.jpg'),
                require('../src/imgs/c2.jpg'),
            ]
        }
    }
    serTouchableBOx = (i, index) => {
        return (
            <TouchableOpacity key={index}
                onPress={() => {
                    this.props.navigation.navigate("DetailServices");
                }}
                activeOpacity={0.8}
                style={HOME.Ser_Box}>
                <Icon type={i.type}
                    style={HOME.serIconDesign}
                    name={i.iname}
                    color={COLORS.WHITE} />
                <Text style={HOME.SerIconTxt}>{i.serName}</Text>
            </TouchableOpacity>
        )
    }
    rec_TouchableBOx = (i, index) => {
        return (
            <TouchableOpacity key={index}
                onPress={() => {
                    this.props.navigation.navigate("DetailServices");
                }}
                activeOpacity={0.8}
                style={HOME.rec_Box}>
                <Image source={i.image}
                    style={{
                        height: 100,
                        width: 180,
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5
                    }} />
                <Text style={[HOME.SerIconTxt, { marginLeft: 10 }]}>{i.title}</Text>
                <View style={LOGO.Ratingsline}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Icon name="star" type={Icons.MaterialIcons} size={14} color={COLORS.Rating} />
                        <Text style={{ color: COLORS.TEXT_COLOR, fontWeight: "bold", fontSize: 12 }}>{i.ratings}</Text>
                    </View>
                    <Text style={{ color: "gray", fontSize: 12 }}>Start from <Text style={{ color: COLORS.PRIMARY, fontWeight: "bold" }}>{i.priceStart}</Text></Text>
                </View>
            </TouchableOpacity>
        )
    }
    renderDrawerTABS = (i, index) => (
        <View key={index}>
            <TouchableOpacity
                style={[STYLE_DRAWER.dbtns,
                this.state.currentTab == i.btn ? { backgroundColor: COLORS.PRIMARY } : { backgroundColor: 'transparent' },
                ]}
                onPress={() => { this.setState({ currentTab: i.btn }), this.props.navigation.navigate(i.nav_Scrn) }}>
                <ICN name={i.name} size={20} />
                <Text style={STYLE_DRAWER.pTitle}> {i.btn} </Text>
            </TouchableOpacity>
            {
                this.state.currentTab === "" ?
                    <View style={{ height: 1, width: 130, backgroundColor: COLORS.TEXT_COLOR, marginLeft: 15 }} /> :
                    <View style={{ height: 1, width: 130, backgroundColor: 'transparent', marginLeft: 15 }} />
            }
        </View>
    )
    render() {

        // const { theme } = this.props
        return (
            <ScrollView
                Vertical
                scrollEnabled={true}
                contentContainerStyle={{ flex: 1 }}>
                <LinearGradient
                    style={{ flex: 1, padding: 20, }}
                    colors={[COLORS.SECONDARY, COLORS.SECONDARY, COLORS.SECONDARY, COLORS.PRIMARY]}>
                    {
                        //Custom Drawer
                    }
                    <ScrollView>
                        <View style={STYLE_DRAWER.dHead}>
                            {/* <Image
                                style={STYLE_DRAWER.dImg}
                                source={require('../images/drawer.jpg')}
                            /> */}
                            <Text style={STYLE_DRAWER.pName}> Hi! Sami </Text>
                        </View>
                        <View style={{ flexGrow: 1, marginTop: 50 }}>
                            {
                                this.state.icon.map((i, index) => this.renderDrawerTABS(i, index))
                            }
                        </View>
                        <View>
                            <View
                                style={{ flexDirection: 'row', marginLeft: -15 }}>
                                <View style={STYLE_DRAWER.dbtns}>
                                    {/* <Image
                                        style={STYLE_DRAWER.dImg1}
                                        source={require("../images/moon.png")} /> */}
                                    <Text style={STYLE_DRAWER.pTitle}>{this.state.switchValue ? "Light" : "Dark"}</Text>
                                </View>
                                <Switch
                                    trackColor={{ false: COLORS.WHITE, true: COLORS.TEXT_COLOR }}
                                    thumbColor={this.state.switchValue ? COLORS.WHITE : 'maroon'}
                                    value={this.state.switchValue}
                                    onValueChange={(switchValue) => this.setState({ switchValue })}
                                // onPress={this.props.DARK_THEMES()}
                                />
                            </View>
                            <View style={{ height: 1, width: 175, backgroundColor: COLORS.TEXT_COLOR }} />
                        </View>
                    </ScrollView>
                </LinearGradient>
                <Animated.View
                    style={[STYLE_DRAWER.nav,
                    {
                        transform: [{ scale: this.state.scaleValue },
                        { translateX: this.state.offsetValue }]
                    },
                    this.state.showMenu ? {
                        borderRadius: 30,
                        paddingHorizontal: 20,
                        paddingBottom: 5,
                        paddingTop: 5,
                        backgroundColor: 'transparent'
                    } : { backgroundColor: COLORS.WHITE },
                    ]}>
                    {
                        // Starting Home Screen...
                    }
                    <View style={LOGO.Pad_Container}>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                        >

                            <SliderBox
                                disableOnPress={true}
                                ImageComponentStyle={this.state.showMenu ? { borderRadius: 20 } : {}}
                                autoplay={true}
                                circleLoop={true}
                                images={this.state.images}
                                sliderBoxHeight={200}
                                dotColor={COLORS.PRIMARY}
                                inactiveDotColor={COLORS.WHITE}
                                dotStyle={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: 15,
                                    padding: 0,
                                    margin: 0,
                                }}
                            />

                            <TouchableOpacity
                                activeOpacity={0.9}
                                style={{ backgroundColor: COLORS.WHITE, position: "absolute", borderRadius: 100, width: 45, height: 45, alignItems: 'center', justifyContent: 'center', elevation: 10, left: 1, margin: 10 }}
                                onPress={() => {
                                    // Do Actions Here....
                                    // Scaling the view...
                                    Animated.timing(this.state.scaleValue, {
                                        toValue: this.state.showMenu ? 1 : 0.8,
                                        duration: 300,
                                        useNativeDriver: true
                                    })
                                        .start()

                                    Animated.timing(this.state.offsetValue, {
                                        // YOur Random Value...
                                        toValue: this.state.showMenu ? 0 : 230,
                                        duration: 300,
                                        useNativeDriver: true
                                    })
                                        .start()

                                    Animated.timing(this.state.closeButtonOffset, {
                                        // YOur Random Value...
                                        toValue: !this.state.showMenu ? -30 : 0,
                                        duration: 300,
                                        useNativeDriver: true
                                    })
                                        .start()

                                    this.setState({ showMenu: !this.state.showMenu });
                                }}
                            >
                                <ICN
                                    name={
                                        this.state.showMenu ? 'close' : 'windowso'
                                    }
                                    size={30} color={COLORS.PRIMARY} />
                            </TouchableOpacity>
                            <View style={{ position: "absolute", marginLeft: 10, top: 130, elevation: 100 }}>
                                <Text style={[{ position: "absolute", color: COLORS.WHITE, fontSize: 20, fontWeight: "bold" }]}>Welcome!</Text>
                                <Text style={[{ fontSize: 20, fontWeight: "bold", position: "absolute", top: 20, color: COLORS.WHITE }]}>Which service do you want?</Text>
                            </View>

                            <View style={{ paddingLeft: 10 }}>
                                <View style={HOME.re_Row}>
                                    <Text style={[HOME.SerIconTxt, { marginTop: 15 }]}>Services we provide</Text>
                                    <TouchableOpacity activeOpacity={0.7}
                                    >
                                        <Text style={HOME.seeAll}>See All</Text>
                                    </TouchableOpacity>
                                </View>
                                <ScrollView
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    contentContainerStyle={HOME.S_outerBOX}>
                                    {ser_Icon.map((i, index) => this.serTouchableBOx(i, index))}
                                </ScrollView>
                            </View>

                            <View style={HOME.Recomnd} >
                                <View style={HOME.re_Row}>
                                    <Text style={[HOME.SerIconTxt, { marginTop: 15 }]}>Recommend for you</Text>
                                    <TouchableOpacity activeOpacity={0.7}
                                    >
                                        <Text style={HOME.seeAll}>See All</Text>
                                    </TouchableOpacity>
                                </View>
                                <ScrollView
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    contentContainerStyle={HOME.R_outerBOX}>
                                    {REC_Services.map((i, index) => this.rec_TouchableBOx(i, index))}
                                </ScrollView>
                            </View>

                            <View style={HOME.Recomnd} >
                                <View style={HOME.re_Row}>
                                    <Text style={[HOME.SerIconTxt, { marginTop: 15 }]}>Cleaning Services</Text>
                                    <TouchableOpacity activeOpacity={0.7}
                                    >
                                        <Text style={HOME.seeAll}>See All</Text>
                                    </TouchableOpacity>
                                </View>
                                <ScrollView
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    contentContainerStyle={HOME.R_outerBOX}>
                                    {REC_Services1.map((i, index) => this.rec_TouchableBOx(i, index))}
                                </ScrollView>
                            </View>
                        </ScrollView>
                    </View>
                </Animated.View>
            </ScrollView>

        )
    }
}
const STYLE_DRAWER = StyleSheet.create({
    container: {
        // backgroundColor: COLORS.PRIMARY_COLOR,
    },
    dHead: {
        justifyContent: "flex-start",
        marginHorizontal: 30
    },
    dImg: {
        height: 100,
        width: 100,
        borderRadius: 100,
    },
    dImg1: {
        height: 26,
        width: 26,
        borderRadius: 100,
    },
    pName: {
        fontSize: 22,
        color: COLORS.TEXT_COLOR,
        fontWeight: 'bold'
    },
    pTitle: {
        fontSize: 15,
        color: COLORS.TEXT_COLOR,
        fontWeight: 'bold',
        paddingHorizontal: 5,
    },
    dbtns: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 10,
        paddingHorizontal: 15,
        width: 150,
    },
    nav: {
        flexGrow: 1,
        position: 'absolute',
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        elevation: 7,
    }
})

