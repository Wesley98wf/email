import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Pagina1({navigation}) {

    const [email, setEmail] = useState([]);

    useEffect(function () {
        async function Dados() {
            const resposta = await fetch('https://mobile.ect.ufrn.br:3002/emails');
            const emailServidor = await resposta.json();
            setEmail(emailServidor)
        }
        Dados();
    }, [])
    function renderItem({ item }) {
        return <View style={styles.home} onTouchStart ={() => navigation.navigate('Email', { id: item.id})} >
            <Image style={styles.image} source={{ uri: item.picture }}></Image>
            <View style={styles.texto}>
                <Text style={styles.fonte}>Para: {item.to}</Text>
                <Text style={styles.fonte}>De: {item.from}</Text>
                <Text style={styles.fonte}>Assunto: {item.tittle}</Text>
                <Text>{item.summary}</Text>
            </View>
            <View style={styles.add}>
                <Text>{item.time}</Text>
                <FontAwesome5 name="star" style={item.star ? styles.iconfav : styles.icon} />
            </View>
        </View>
    }

    return (
        <View style={styles.home}>
            <FlatList
                data={email}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false} />
        </View>
    );
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#778899',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderBottomWidth: 0.8,

    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 35,

    },
    texto: {
        flex: 1,
        padding: 5,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    add: {
        padding: 10,
        justifyContent: 'space-between',
    },
    fonte: {
        fontWeight: 'bold',
    },
    icon: {
        fontSize: 20,
        color: 'black',
    },
    iconfav: {
        fontSize: 20,
        color: 'yellow',
    }
});