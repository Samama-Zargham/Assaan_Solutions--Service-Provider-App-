import React, { Component } from 'react'
import { Image, View, TextInput, TouchableOpacity, Text, Modal, ScrollView } from 'react-native'
import { CommonActions } from '@react-navigation/native';
import { STYLES_DETAILS, STYLES_MAIN, COLORS, STYLES_CATEGORY } from '../styles/styles1'
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LOGO } from '../styles/Allstyles';
import IN from 'react-native-vector-icons/Ionicons';

export default class RecipeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        };
    }
    goTOMAIN = () => (this.props.navigation.dispatch(CommonActions.goBack()));

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    timeNodel = () => (
        this.setModalVisible(true)
    )
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'black' }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View >
                    <View style={LOGO.headr} />
                    <TouchableOpacity
                        onPress={() => (this.props.navigation.dispatch(CommonActions.goBack()))}
                        style={LOGO.backIcon}>
                        <IN name='chevron-back' size={24} color={COLORS.WHITE_COLOR} />
                    </TouchableOpacity>
                        <Image style={STYLES_DETAILS.img}
                            resizeMode='cover'
                            source={require('../src/imgs/contact3.jpg')}
                        />


                        <View style={STYLES_DETAILS.imgData5}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 25, paddingTop: 35 }}>
                                <View>
                                    <FontAwesome name='phone-square' size={32} color={COLORS.TEXT_COLOR} />
                                </View>
                                <View style={{ paddingHorizontal: 13, }}>
                                    <Text style={STYLES_CATEGORY.imgTitle5}>Contact us</Text>
                                    <Text style={{ color: COLORS.TEXT_COLOR, fontSize: 11 }}>How Can I Help You?</Text>
                                </View>
                            </View>
                            <View style={STYLES_MAIN.InputContainer}>
                                <Icon style={{ paddingHorizontal: 10 }} name='user' size={19} color='black' />
                                <TextInput style={STYLES_MAIN.C1}
                                    placeholder='Name'
                                />
                            </View>
                            <View style={STYLES_MAIN.InputContainer}>
                                <Icon style={{ paddingHorizontal: 10 }} name='mail' size={19} color='black' />
                                <TextInput style={STYLES_MAIN.c2}
                                    placeholder='Email@gmail.com'
                                />
                            </View>
                            <View style={STYLES_MAIN.InputContainer}>
                                <Icon style={{ paddingHorizontal: 10 }} name='message1' size={19} color='black' />
                                <TextInput style={STYLES_MAIN.c3}
                                    placeholder='Message...'
                                />
                            </View>
                            {/* <TouchableOpacity onPress={this.timeNodel}
                                style={{ marginTop: 20, backgroundColor: COLORS.PRIMARY_COLOR, padding: 8, width: 150, alignItems: 'center', borderRadius: 20, justifyContent: 'center', alignSelf: "center" }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.WHITE_COLOR, }}>Send</Text>
                            </TouchableOpacity> */}
                            <TouchableOpacity
                             onPress={this.timeNodel}
                                style={[LOGO.btn, { marginTop: 20 }]}
                                activeOpacity={0.8}
                            >
                                <Text style={LOGO.btntxt}>Send</Text>
                            </TouchableOpacity>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={this.state.modalVisible}
                                onRequestClose={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}
                            >
                                <View style={{ alignContent: 'center', alignItems: "center" }}>
                                    <TouchableOpacity
                                        onPress={this.goTOMAIN}
                                        style={[STYLES_DETAILS.goBAck, { backgroundColor: COLORS.PRIMARY_COLOR }]} >
                                        <Icon name='back' size={17} color='white' />
                                    </TouchableOpacity>
                                    <View style={{
                                        justifyContent: "center",
                                        alignItems: 'center',
                                        backgroundColor: COLORS.WHITE_COLOR,
                                        elevation: 5,
                                        borderTopRightRadius: 100,
                                        marginTop: 190,
                                        width: "100%",
                                        height: 570,
                                        position: 'absolute',
                                    }}>

                                        <Icon style={{ paddingHorizontal: 10 }} name='folderopen' size={50} color='black' />
                                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: COLORS.TEXT_COLOR, alignSelf: 'center' }}>Thank You!</Text>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.TEXT_COLOR, alignSelf: 'center' }}>We will contact you soon</Text>

                                    </View>
                                </View>
                            </Modal>
                        </View >
                    </View>
                </ScrollView>
            </View>
        )
    }
}
