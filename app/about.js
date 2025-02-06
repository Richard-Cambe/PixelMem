import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Link} from "expo-router";
import {StatusBar} from "expo-status-bar";
import React from "react";
import * as Haptics from 'expo-haptics';

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.Logo} source={require('../assets/src/rules.png')}></Image>
            </View>

            <View style={styles.ruleboard}>
                <Image style ={styles.rule1} source={require('../assets/src/1diff.png')}></Image>
                <Image style ={styles.rule2} source={require('../assets/src/2pho.png')}></Image>
                <Image style ={styles.rule3} source={require('../assets/src/3win.png')}></Image>
            </View>

            <View style={styles.navbar}>
                <TouchableOpacity style={styles.buttonAbout} onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy).then(r => {} )
                }}>
                    <Link style={styles.linkText} href={"/"}>RETOUR</Link>
                </TouchableOpacity>

            </View>
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
    ruleboard: {
        marginTop: 130,
        borderStyle: 'solid',
        borderWidth: 3,
        borderRadius: 30,
        borderColor: '#00bfff',
        width: '95%',
        height: '70%',
        display: 'flex',
        justifyContent: 'space-between',
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
    },
    rule1:{
        width: 350,
        height: 100,
        resizeMode: 'contain',
    },
    rule2:{
        width: 350,
        height: 100,
        resizeMode: 'contain',
    },
    rule3:{
        width: 325,
        height: 100,
        resizeMode: 'contain',
    }
});
