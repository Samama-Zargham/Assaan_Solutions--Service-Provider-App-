import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { CommonActions } from '@react-navigation/native';
import { COLORS, GRADIENT_COLORS, } from '../styles/styles'
import { LOGO } from '../styles/Allstyles';
import Icon from 'react-native-vector-icons/AntDesign';
import IN from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

export default class RecipeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileD: [
                { id: 'USER NAME', name: 'Samama Zargham' },
                { id: 'EMAIL ADRESS', name: 'ICR.swen@gmail.com' },
                { id: 'Password', name: '03116040604' },
            ]
        }

    }
    goTOMAIN = () => (this.props.navigation.dispatch(CommonActions.goBack()));



    render() {
        return (
            <View style={{ flex: 1, backgroundColor: COLORS.WHITE_COLOR }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={LOGO.headr} />
                    <TouchableOpacity
                        onPress={() => (this.props.navigation.dispatch(CommonActions.goBack()))}
                        style={LOGO.backIcon}>
                        <IN name='chevron-back' size={24} color={COLORS.WHITE_COLOR} />
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, paddingTop: 30, justifyContent: "center" }}>
                        <View>
                            <FontAwesome name='user' size={32} color={COLORS.TEXT_COLOR} />
                        </View>
                        <View style={{ paddingHorizontal: 13 }}>
                            <Text
                                style={{
                                    fontSize: 23,
                                    fontWeight: 'bold',
                                    color: COLORS.TEXT_COLOR,
                                }}
                            >Profile</Text>
                            <Text style={{ color: COLORS.TEXT_COLOR, fontSize: 11 }}>Manage your profile information</Text>
                        </View>
                    </View>
                    {this.state.profileD.map((I, index) => <View
                        key={index}
                        style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                        <Text style={{
                            color: COLORS.TEXT_COLOR,
                            fontSize: 15,
                            paddingHorizontal: 2
                        }}>{I.id}</Text>

                        <View style={{
                            flexDirection: 'row',
                            height: 45,
                            backgroundColor: 'whitesmoke',
                            paddingHorizontal: 25,
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            borderRadius: 5
                        }}>
                            <Text style={{ color: COLORS.TEXT_COLOR, fontSize: 15 }}>{I.name}</Text>
                            {
                                index == 1 && <FontAwesome name='user' size={20} color='silver' />}
                            {
                                index == 0 && <FontAwesome name='user-circle-o' size={20} color='silver' />}
                            {
                                index == 2 && <Ionicons name='mail' size={20} color='silver' />}
                            {
                                index == 3 && <FontAwesome name='phone-square' size={20} color='silver' />
                            }
                        </View>
                    </View>)}
                    <TouchableOpacity
                        style={[LOGO.btn, {marginTop:20}]}
                        activeOpacity={0.8}
                        onPress={() => (this.props.navigation.dispatch(CommonActions.goBack()))}

                    >
                        <Text style={LOGO.btntxt}>Save</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View >

        )
    }
}
