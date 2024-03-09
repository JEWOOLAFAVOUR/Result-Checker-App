import { StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthStack from './src/navigator/AuthStack'
import AppStack from './src/navigator/AppStack'
import { COLORS } from './src/constants'
import Toast from 'react-native-toast-message'


const App = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Auth' component={AuthStack} />
                <Stack.Screen name='Main' component={AppStack} />
            </Stack.Navigator>
            <Toast />
        </NavigationContainer>
    )
}

export default App

const styles = StyleSheet.create({})