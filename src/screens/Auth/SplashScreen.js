import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, images } from '../../constants'

const SplashScreen = () => {
    return (
        <View style={styles.page}>
            <Image source={images.logo} style={{ height: SIZES.h1 * 5, width: SIZES.h1 * 4 }} />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
})