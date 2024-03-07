import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons, images } from '../../../constants'
import { useNavigation } from '@react-navigation/native'

const ResultScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.page}>
            {/* TOP */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={icons.arrowleft} style={{ height: SIZES.h2, width: SIZES.h2 }} />
                </TouchableOpacity>
                <Text style={{ ...FONTS.body2, color: COLORS.black, marginRight: SIZES.h1 }}>Result</Text>
                <View />
            </View>

            <View style={styles.firstCtn}>
                <View style={{ width: SIZES.width * 0.42, }}>
                    <Text style={{ ...FONTS.body3, color: COLORS.black, marginBottom: SIZES.base }}>Matric Number:</Text>
                    <Text style={{ ...FONTS.body3, color: COLORS.black, marginBottom: SIZES.base }}>Name:</Text>
                    <Text style={{ ...FONTS.body3, color: COLORS.black, marginBottom: SIZES.base }}>Session</Text>
                    <Text style={{ ...FONTS.body3, color: COLORS.black, marginBottom: SIZES.base }}>Level</Text>
                    <Text style={{ ...FONTS.body3, color: COLORS.black }}>Semester</Text>
                </View>
                <View style={{ width: SIZES.width * 0.42, }}>
                    <Text style={{ ...FONTS.body3, color: COLORS.black, marginBottom: SIZES.base }}>205534</Text>
                    <Text style={{ ...FONTS.body3, color: COLORS.black, marginBottom: SIZES.base }}>JEWOOLA FAVOUR</Text>
                    <Text style={{ ...FONTS.body3, color: COLORS.black, marginBottom: SIZES.base }}>2023/2024</Text>
                    <Text style={{ ...FONTS.body3, color: COLORS.black, marginBottom: SIZES.base }}>300 LEVEL</Text>
                    <Text style={{ ...FONTS.body3, color: COLORS.black }}>FIRST</Text>
                </View>
            </View>
        </View>
    )
}

export default ResultScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: SIZES.h4,
        paddingHorizontal: SIZES.width * 0.05,
    },
    firstCtn: {
        paddingHorizontal: SIZES.h5,
        paddingVertical: SIZES.h5,
        borderWidth: 1.5,
        marginTop: SIZES.h1,
        borderRadius: SIZES.base,
        flexDirection: 'row',
        borderColor: COLORS.chocolateBackground,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})