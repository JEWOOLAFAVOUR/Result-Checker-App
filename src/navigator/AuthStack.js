import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../screens/Auth/SplashScreen';


const AuthStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='SplashScreen' component={SplashScreen} />

        </Stack.Navigator>
    )
}

export default AuthStack

const styles = StyleSheet.create({})