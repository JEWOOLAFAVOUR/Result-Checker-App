import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants'

const SplashScreen = () => {
    return (
        <View style={styles.page}>
            <Text>SplashScreen</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
})