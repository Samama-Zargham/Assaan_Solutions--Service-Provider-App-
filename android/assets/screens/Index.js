import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from './LoginScreen';
import SendOTP from './SendOTP';
import SignUp from './SignUp';
import Welcome from './Welcome';
import DetailsSignUp from './DetailsSignUp';
import TabHome from './TabHome'
import DetailServices from './DetailServices';
import SelectDetails from "./SelectDetails"
import BookService from "./BookService";
import MapEmployee from "./MapEmployee"
import {
    StatusBar 
} from 'react-native'
import { COLORS, } from '../styles/Allstyles'

const Stack = createNativeStackNavigator();
export default class Index extends Component {

    render() {
        return (
            <NavigationContainer >
                <StatusBar backgroundColor={COLORS.PRIMARY} />
                <Stack.Navigator screenOptions={{ headerShown: false }} >
                    <Stack.Screen name="SplashScreen" component={SplashScreen} />
                    <Stack.Screen name="LoginScreen" component={LoginScreen}/>
                    <Stack.Screen name="SendOTP" component={SendOTP}/>
                    <Stack.Screen name="SignUp" component={SignUp}/>
                    <Stack.Screen name="Welcome" component={Welcome}/>
                    <Stack.Screen name="DetailsSignUp" component={DetailsSignUp}/>
                    <Stack.Screen name="TabHome" component={TabHome} />
                    <Stack.Screen name="DetailServices" component={DetailServices} />
                    <Stack.Screen name="SelectDetails" component={SelectDetails} />
                    <Stack.Screen name="BookService" component={BookService} />
                    <Stack.Screen name="MapEmployee" component={MapEmployee} />

                </Stack.Navigator>
            </NavigationContainer>
        );
    }

}