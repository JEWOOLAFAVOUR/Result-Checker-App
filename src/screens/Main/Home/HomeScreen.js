import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons, images } from '../../../constants'
import FormInput from '../../../components/Input/FormInput'
import FormButton from '../../../components/Button/FormButton'

const HomeScreen = () => {
    return (
        <View style={styles.page}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View>
                    <Text style={{ ...FONTS.body2, color: COLORS.black }}>Welcome</Text>
                    <Text style={{ ...FONTS.body4, color: COLORS.black }}>205534</Text>
                </View>
                <Image source={icons.account} style={{ height: SIZES.h1 * 1.4, width: SIZES.h1 * 1.4, borderRadius: 100 }} />
            </View>
            {/* RESULT CHECKER */}
            <View style={{ marginTop: SIZES.h2 }}>
                <Text style={{ ...FONTS.h2, textAlign: 'center', marginBottom: SIZES.h3, color: COLORS.black }}>Result Checker</Text>
                <FormInput iconName={icons.mail} title="Matric Number" placeholder="Enter your matric number" keyboardType="numeric" />
                <FormInput iconName={icons.mail} title="Exam Year" placeholder="Enter your exam year" keyboardType="numeric" />
            </View>
            {/* BUTTON */}
            <View style={{ marginTop: SIZES.h1 * 1.2 }}>
                <View style={styles.semesterCtn}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.circle} />
                        <Text style={{ ...FONTS.body4, color: COLORS.black, marginLeft: SIZES.base * 0.6 }}>1st Semester</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={[styles.circle, { borderWidth: 6 }]} />
                        <Text style={{ ...FONTS.body4, color: COLORS.black, marginLeft: SIZES.base * 0.6 }}>2nd Semester</Text>
                    </TouchableOpacity>
                </View>
                <FormButton title="CHECK RESULT" />
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: SIZES.h4,
        paddingHorizontal: SIZES.width * 0.05,
    },
    semesterCtn: {
        height: SIZES.h1 * 2,
        backgroundColor: COLORS.white,
        elevation: 5,
        borderRadius: SIZES.base,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: SIZES.h1
    },
    circle: {
        height: SIZES.h2,
        width: SIZES.h2,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: COLORS.primary,
    },
})