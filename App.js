import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from './src/component/header/Header';
import Body from './src/component/body/Body';
import Footer from './src/component/footer/Footer';

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Header />
          <Body />
          <Footer />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
