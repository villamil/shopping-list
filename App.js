import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import { white } from './src/utils/colors';
import CartList from './src/components/CartList';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Cart"/>
        <CartList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
