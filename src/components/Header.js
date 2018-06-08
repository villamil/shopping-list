import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { blue, white } from '../utils/colors';

export default function Header(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: blue,
        height: "8%"
    },
    title: {
        color: white,
        fontSize: 20
    }
});

