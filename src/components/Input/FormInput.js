import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, icons, SIZES } from '../../constants'

const FormInput = ({ title, placeholder, iconName, value, setValue, keyboardType, eyeoff }) => {
    const [hidden, setHidden] = useState(true)
    return (
        <View style={{ marginBottom: SIZES.h5 }}>
            <Text style={{ ...FONTS.body4, color: COLORS.black, marginBottom: SIZES.base * 0.5, fontFamily: 'Montserrat-Medium' }}>{title}</Text>
            <View style={styles.container}>
                <Image source={iconName || icons.about} style={{ height: SIZES.h2, width: SIZES.h2, tintColor: COLORS.chocolate }} />
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={'#9A9FA3'}
                    value={value}
                    // onChangeText={data => setValue({ ...value, email: data })}
                    onChangeText={setValue}
                    keyboardType={keyboardType}
                    secureTextEntry={eyeoff ? hidden : null}
                    style={{ flex: 1, color: COLORS.black, ...FONTS.body4, marginLeft: SIZES.base }}
                />
                {
                    eyeoff &&
                    <TouchableOpacity onPress={() => setHidden(!hidden)}>
                        <Image source={hidden ? icons.eyeclose : icons.eye} style={{ height: SIZES.h2, width: SIZES.h2 }} />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

export default FormInput

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: SIZES.h1 * 1.6,
        borderWidth: 1,
        paddingHorizontal: SIZES.h5,
        borderRadius: SIZES.base * 0.8,
        borderColor: COLORS.grey2,
        backgroundColor: COLORS.grey2
    },
})