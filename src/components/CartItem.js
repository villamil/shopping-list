import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { gray } from '../utils/colors';

export default function CartItem(props) {
    const { item } =  props
    return (
        <View style={styles.itemContainer}>
            <Image source={{ uri: item.info.img }} style={styles.image} />
            <View style={styles.itemDescription}>
                <Text style={styles.nameText}>{item.info.name}</Text>
                <Text style={styles.priceText}>${item.info.price}</Text>
            </View>
            <View style={styles.controlsContainer}>
                <TouchableOpacity 
                    onPress={() => props.increaseQuantity(item.key)}>
                    <Text style={styles.plusBtn}>+</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.info.quantity}</Text>
                <TouchableOpacity
                    onPress={() => props.decreaseQuantity(item.key)}
                    >
                    <Text style={styles.lessBtn}>-</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.deleteContainer}>
                <TouchableOpacity
                        onPress={() => props.deleteItem(item.key)}
                    >
                    <Text>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100
    },
    plusBtn: {
        fontSize: 36
    },
    lessBtn: {
        fontSize: 36
    },
    quantityText: {
        fontSize: 26
    },
    controlsContainer: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    deleteContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    itemDescription: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginLeft: 5
    },
    nameText: {
        fontSize: 20,
    },
    priceText: {
        marginTop: 50,
        fontSize: 16,
        color: gray
    },

});