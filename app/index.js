import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Link, useRouter} from "expo-router";
import {StatusBar} from "expo-status-bar";
import * as Haptics from 'expo-haptics';

const Homepage = () => {
    const router = useRouter()
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.Logo} source={require('../assets/src/PixelMem.png')}></Image>
            </View>

            <View style={styles.gameboard}></View>

            <View style={styles.navbar}>
                <TouchableOpacity style={styles.buttonHome} onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy).then(r => {})
                }}>
                    <Text style={styles.buttonText}>APP</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonAbout} onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy).then(r => {} )
                }}>
                    <Link style={styles.linkText} href={"/about"}>REGLES</Link>
                </TouchableOpacity>

            </View>{}
            <StatusBar style="auto"/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        position: 'absolute',
        top: 5,
        zIndex: 1,
    },
    Logo: {
        width: 350,
        height: 200,
        resizeMode: 'contain',
    },
    gameboard: {
        marginTop: 130,
        borderStyle: 'solid',
        borderWidth: 3,
        borderRadius: 30,
        borderColor: '#00bfff',
        width: '95%',
        height: '70%',
    },
    navbar: {
        marginVertical: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',

    },
    buttonHome: {
        width: '30%',
        height: 50,
        borderWidth: 3,
        borderColor: '#fff',
        backgroundColor: '#00bfff',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 25,
    },
    buttonAbout: {
        width: '30%',
        height: 50,
        borderWidth: 3,
        borderColor: '#00bfff',
        backgroundColor: '#fff',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white',
    },
    linkText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#00bfff',
    }
});

export default Homepage;
