import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {router} from "expo-router";
import React from "react";
import * as Haptics from 'expo-haptics';

const handlePress = (route) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    router.push(route);
};

export default function EasyScreen() {
    return (
        <View style={styles.navbar}>
            <TouchableOpacity style={styles.buttonHome} onPress={() => handlePress('/easy')}>
                <Text style={styles.buttonText}>2x2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonHome} onPress={() => handlePress('/medium')}>
                <Text style={styles.buttonText}>4x4</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonHome} onPress={() => handlePress('/hard')}>
                <Text style={styles.buttonText}>8x8</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonAbout} onPress={() => handlePress('/about')}>
                <Text style={styles.linkText} href={"/about"}>REGLES</Text>
            </TouchableOpacity>
        </View>
    )
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

