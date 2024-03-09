import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons, images } from '../../../constants'
import { useNavigation } from '@react-navigation/native'

const ResultScreen = ({ route }) => {
    console.log('route coming', route?.params)

    const data = route?.params?.data;
    const navigation = useNavigation();
    const RenderFooter = () => {
        return (
            <View>
                <View style={styles.cgpaCtn}>
                    <Text style={{ ...FONTS.body3, color: COLORS.black, fontWeight: 'bold' }}>CGPA: 3.00</Text>
                </View>
            </View>
        )
    }
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
                    <Text style={{ ...FONTS.body3, color: COLORS.black, marginBottom: SIZES.base }}>{data?.matricNumber}</Text>
                    <Text style={{ ...FONTS.body3, color: COLORS.black, marginBottom: SIZES.base }}>{data?.studentName}</Text>
                    <Text style={{ ...FONTS.body3, color: COLORS.black, marginBottom: SIZES.base }}>{data?.session}</Text>
                    <Text style={{ ...FONTS.body3, color: COLORS.black, marginBottom: SIZES.base }}>{data?.level || '300 LEVEL'}</Text>
                    <Text style={{ ...FONTS.body3, color: COLORS.black }}>{data?.semester}</Text>
                </View>
            </View>

            {/* COURSE DETAILS  */}
            <View style={styles.bigCtn}>
                <View style={styles.titleCtn}>
                    <Text style={{ color: COLORS.white, ...FONTS.body4, }}>Course Code</Text>
                    {/* <Text style={{ color: COLORS.white, ...FONTS.body4, }}>Units</Text> */}
                    <Text style={{ color: COLORS.white, ...FONTS.body4, }}>Score</Text>
                    <Text style={{ color: COLORS.white, ...FONTS.body4, }}>Grade</Text>
                    {/* <Text style={{ color: COLORS.white, ...FONTS.body4, }}>Points</Text> */}
                </View>

                <FlatList
                    data={data?.courses}
                    ListFooterComponent={RenderFooter}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <View style={styles.container}>
                                    <Text style={{ ...FONTS.body5, color: COLORS.black, maxWidth: '35%', }}>{item?.courseName}</Text>
                                    {/* <Text style={{ ...FONTS.body5, color: COLORS.black }}>2.0</Text> */}
                                    <Text style={{ ...FONTS.body5, color: COLORS.black, }}>{item.courseScore}</Text>
                                    <Text style={{ ...FONTS.body5, color: COLORS.black }}>{item?.grade}</Text>
                                    {/* <Text style={{ ...FONTS.body5, color: COLORS.black }}>7.0</Text> */}
                                </View>
                                <View style={{ height: 1, backgroundColor: COLORS.black, marginBottom: SIZES.base }} />
                            </View>
                        )
                    }}
                />
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
    bigCtn: {
        // height: SIZES.height * 0.5,
        paddingBottom: SIZES.h3,
        borderWidth: 1,
        marginTop: SIZES.h1,
        borderRadius: SIZES.base,
        // paddingTop: SIZES.h5,
    },
    titleCtn: {
        borderTopLeftRadius: SIZES.base,
        borderTopRightRadius: SIZES.base,
        backgroundColor: COLORS.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.base,
        paddingVertical: SIZES.h5,
        marginBottom: SIZES.h4,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.h4,
        marginBottom: SIZES.h5,
    },
    cgpaCtn: {
        height: SIZES.h1 * 1.2,
        width: SIZES.h1 * 4,
        borderRadius: SIZES.h2,
        backgroundColor: COLORS.gray,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: SIZES.h5,
    },
})