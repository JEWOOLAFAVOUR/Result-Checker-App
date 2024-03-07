import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons, images } from '../../../constants'
import { useNavigation } from '@react-navigation/native'

const ResultScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.page}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={icons.arrowleft} style={{ height: SIZES.h2, width: SIZES.h2 }} />
                </TouchableOpacity>
                <Text style={{ ...FONTS.body3b, color: COLORS.black, marginRight: SIZES.h1 }}>Result</Text>
                <View />
            </View>
        </View>
    )
}

export default ResultScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: SIZES.h3,
        paddingHorizontal: SIZES.width * 0.05,
    },
})