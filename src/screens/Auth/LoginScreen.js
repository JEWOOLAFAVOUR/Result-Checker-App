import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES, images, FONTS, icons } from '../../constants'
import FormInput from '../../components/Input/FormInput'
import FormButton from '../../components/Button/FormButton'
import { useNavigation } from '@react-navigation/native'
import { loginUser } from '../../api/auth'
import { makeSecurity } from '../../components/Template/security'
import { Roller, sendToast } from '../../components/Template/utilis'

const LoginScreen = () => {
    const navigation = useNavigation();

    const [matricNumber, setMatricNumber] = useState('')
    const [password, setPassword] = useState('')
    const [load, setLoad] = useState(false)

    const handleSubmit = async () => {
        console.log('lllllllllllllllllll')
        const body = { matricNumber, password }

        const securityErrors = makeSecurity('login', body);

        if (securityErrors.length > 0) {
            sendToast('error', securityErrors[0]);
            console.log('erroo', securityErrors[0]);
            return;
        }
        try {
            setLoad(true)
            const { data, status } = await loginUser(body)
            setLoad(false)
            console.log('response from login', data)

            if (data.success === true) {
                sendToast('success', data?.message)
                navigation.navigate("Main", { screen: "Home" })
            }
        } catch (error) {
            console.log('error from login', error)
        }

    }

    return (
        <ScrollView style={styles.page}>
            {load && <Roller visible={true} />}

            <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: SIZES.h1 }}>
                <Image source={images.logo} style={{ height: SIZES.h1 * 3, width: SIZES.h1 * 2.3, marginBottom: SIZES.base }} />
                <Text style={{ ...FONTS.body3c, color: COLORS.black, textAlign: 'center', marginHorizontal: SIZES.h1 * 2 }}>Ladoke Akintola University of Technology P.M.B 5028 Ogbomosho Oyo State</Text>
            </View>
            <Text style={{ ...FONTS.body3, color: COLORS.black, textAlign: 'center' }}>Login Account</Text>
            <Text style={{ ...FONTS.body4, color: COLORS.black, textAlign: 'center', marginHorizontal: SIZES.h1 }}>This app will be used for the purpose of checkingonly your result</Text>
            {/* INPUT */}
            <View style={{ marginTop: SIZES.h3 }}>
                <FormInput keyboardType={'numeric'} title="Matric Number" iconName={icons.mail} placeholder="Matric Number" value={matricNumber} setValue={setMatricNumber} />
                <FormInput title="Password" iconName={icons.padlock} placeholder="Password" value={password} setValue={setPassword} />
            </View>
            <FormButton title="LOGIN" onPress={() => handleSubmit()} />


            <View style={{ marginTop: SIZES.h1 * 1.4, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ ...FONTS.body4, color: COLORS.primary }}>School Portal?</Text>
                <TouchableOpacity>
                    <Text style={{ ...FONTS.body4, color: COLORS.primary }}> Click Here</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.width * 0.05,
    },
})