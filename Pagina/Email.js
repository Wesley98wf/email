import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, Component } from "react";
import { FontAwesome5 } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Email({ route }) {
    const { id } = route.params;

    const [email, setEmail] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch('https://mobile.ect.ufrn.br:3002/emails/ ' + id)
            const email = await response.json();
            setEmail(email);
        }
        getData();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <View style={styles.titulo}>
                <Text style={styles.fonte1}>{email.tittle}</Text>
                <View style={styles.icon}>
                    <FontAwesome5 style={styles.icon} name="trash" size={20} color="black" />
                    <FontAwesome5 name="reply" size={20} color="black" />
                </View>
            </View>
            <View style={styles.sumario}>
                <Image style={styles.imagem} source={{ uri: email.picture }}></Image>
                <View style={styles.texto}>
                    <Text style={styles.fonte2}>{email.from}</Text>
                    <Text style={styles.fonte2}>{email.time}</Text>
                    <Text style={styles.fonte2}>Para mim</Text>
                </View>
            </View>
            <WebView
                style={styles.corpo}
                source={{ html: email.body }}
                textZoom={300}>
            </WebView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e90ff',
    },
    sumario: {
        height: 80,
        backgroundColor: 'gray',
        flexDirection: 'row',
        padding: 5,
        borderColor: 'black',
        borderLeftWidth: 0.9,
        borderLeftWidth: 0.9,
        borderTopWidth: 0.9,
        borderBottomWidth: 0.9,

    },
    fonte1: {
        fontSize: 20,
        margin: 5,
    },

    imagem: {
        height: 70,
        width: 70,
        borderRadius: 35,
        padding: 20,
    },
    titulo: {
        height: 50,
        backgroundColor: '#1e90ff',
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 0.9,
    },
    icon: {
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
        marginRight: 10,
        justifyContent: 'space-between',
    },
    texto: {
        marginLeft: 15,
        justifyContent: 'space-evenly',
    },
    fonte2: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    corpo: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#1e90ff',
        margin: 8,
    }
});