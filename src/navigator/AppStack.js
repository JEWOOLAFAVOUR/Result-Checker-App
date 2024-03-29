import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Main/Home/HomeScreen';
import ResultScreen from '../screens/Main/Home/ResultScreen';


const AppStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='ResultScreen' component={ResultScreen} />
        </Stack.Navigator>



    )
}

export default AppStack

const styles = StyleSheet.create({})