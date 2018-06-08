import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { getCartItems } from '../utils/api';
import CartItem from './CartItem';
import { white, red } from '../utils/colors';

class CartList extends Component {

    state = {
        shoppingList: {
            data:  {
                items: []
            }
        }
    }

    componentDidMount() {
        getCartItems()
            .then((shoppingList) => {
                this.setState({
                    shoppingList
                })
            })
    }

    calculateTotal = (items) => {
        return items.reduce((prev, curr) => {
            prev += curr.quantity * curr.price;
            return prev;
        }, 0)
    }

    formatList = ({ data }) => data.items.map((item) => {
        return {
            key: item.id,
            info: item
        }
    })

    renderItem = ({ item }) => {
        return (
            <CartItem item={item} increaseQuantity={this.increaseQuantity} decreaseQuantity={this.decreaseQuantity} deleteItem={this.deleteItem} />
        )
    }

    increaseQuantity = (id) => {
        const items = this.state.shoppingList.data.items.map((item) => {
            if (item.id === id && (item.quantity + 1) <= item.availability) {
                item.quantity++;
            }
            return item;
        })
        this.handleCartChange(items);
    }

    decreaseQuantity = (id) => {
        const items = this.state.shoppingList.data.items.map((item) => {
            if (item.id === id && (item.quantity - 1) >= 1) {
                item.quantity--;
            }
            return item;
        })
        this.handleCartChange(items);
    }

    deleteItem = (id) => {
        const items = this.state.shoppingList.data.items.filter((item) => item.id !== id);
        this.handleCartChange(items);
    }

    handleCartChange = (items) => {
        this.setState((state) => ({
            shoppingList: {
                data: {
                    items
                }
            }
        }))
    }

    render() {
        const { shoppingList } = this.state;
        const total = this.calculateTotal(shoppingList.data.items);
        return (
            <View style={styles.container}>
                {shoppingList.data.items.length > 0 ?
                    <FlatList
                        data={this.formatList(shoppingList)}
                        renderItem={this.renderItem}
                    />
                    :
                    <View style={{ alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ fontSize: 20 }}>Your shopping cart is empty :(</Text>
                    </View>}
                <TouchableOpacity style={styles.checkoutBtn}>
                    <Text style={styles.checkoutLabels}>${Number(total).toFixed(2)} + IVA!!</Text>
                    <Text style={styles.checkoutLabels}>Checkout ></Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    checkoutLabels: {
        color: white,
        margin: 8,
        fontSize: 26
    },
    checkoutBtn: {
        height: "10%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: red
    }
})

export default CartList;