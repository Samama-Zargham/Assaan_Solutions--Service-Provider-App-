import React, { Component, useRef, useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import Profile from './Profile';
import Support from './Support';
import Booking from './Booking'
import CustomerMap from './CustomerMap';
import Home from './Home';
import Icon, { Icons } from '../components/Icons';
import { COLORS, SPLASH, LOGIN, LOGO } from '../styles/Allstyles'
import * as Animatable from 'react-native-animatable';

const animate1 = { 0: { scale: 0.7, translateY: 1 }, 1: { scale: 1.2, translateY: -20 } }
const animate2 = { 0: { scale: 1.2, translateY: -20 }, 1: { scale: 1, translateY: 0 } }
const TabBarButton = (props) => {
    const { item, onPress, accessibilityState } = props
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);
    const textRef = useRef(null);
    useEffect(() => {
        if (focused) {
            viewRef.current.animate(animate1);
            textRef.current.transitionTo({ scale: 1 });
        }
        else {
            viewRef.current.animate(animate2);
            textRef.current.transitionTo({ scale: 0 });
        }
    }, [focused])
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"

        }}>

            <TouchableOpacity
                activeOpacity={0.9}
                onPress={onPress}>
                <View style={{
                    justifyContent: "center",
                    alignItems: "center"
                }}>

                    <Animatable.View
                        ref={viewRef}
                        duration={800}
                        style={[focused && styles.tabBtn]} >
                            <Icon type={item.type}
                                name={item.iname}
                                color={focused ? COLORS.TEXT_COLOR : COLORS.WHITE} />
                    </Animatable.View>
                </View>
            </TouchableOpacity>
            <Animatable.Text style={{
                fontWeight: "500",
                fontSize: 12,
                color: COLORS.WHITE,
                textAlign: "center",
                marginTop: -15
            }}
                ref={textRef}>{item.label}
            </Animatable.Text>
        </View>
    )
}


const Tab = createBottomTabNavigator();
const TabArr = [
    { route: 'Home', label: 'Home', type: Icons.Ionicons, icon: 1, iname: "home", component: Home },
    { route: 'Profile', label: 'Profile', type: Icons.FontAwesome, icon: 2, iname: "user", component: Profile },
    { route: 'CustomerMap', label: 'Map', type: Icons.MaterialIcons, icon: 3, iname: "my-location", component: CustomerMap },
    { route: 'Booking', label: 'Booking', type: Icons.Ionicons, icon: 4, iname: "bookmark", component: Booking },
    { route: 'Support', label: 'Support', type: Icons.Entypo, icon: 5, iname: "creative-commons-attribution", component: Support },
];
export default class TabHome extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    borderBottomRightRadius: 20,
                    borderTopLeftRadius: 20,
                    height: 50,
                    backgroundColor: COLORS.PRIMARY,
                    borderRadius:5,
                    bottom: 10,
                    marginHorizontal:5,
                },
            }}>
                {TabArr.map((i, index) => {
                    return (
                        <Tab.Screen key={index} name={i.route} component={i.component}
                            options={{
                                tabBarLabel: i.label,
                                tabBarButton: (props) => <TabBarButton {...props} item={i} />
                            }} />

                    )
                })}
            </Tab.Navigator>
        )
    }
}
const styles = StyleSheet.create({
    tabBtn: {
        width: 35,
        height: 35,
        borderRadius: 100,
        borderWidth: 2,
        backgroundColor: COLORS.PRIMARY,
        borderColor: COLORS.WHITE,
        justifyContent: "center",
        alignItems: "center",
        elevation: 10
    },
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
});