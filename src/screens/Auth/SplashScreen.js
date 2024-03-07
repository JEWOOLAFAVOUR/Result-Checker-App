import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS, SIZES, images, FONTS } from '../../constants'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 2000)
    }, [])
    return (
        <View style={styles.page}>
            <Image source={images.logo} style={{ height: SIZES.h1 * 7, width: SIZES.h1 * 6 }} />
            <Text style={{ ...FONTS.h3, color: COLORS.black, marginTop: SIZES.h1 }}>Lautech Result Checker</Text>
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