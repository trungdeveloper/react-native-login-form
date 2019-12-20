import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
export default class Buttons extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.props.onButtonClick}
          style={[styles.buttonSignIn, styles.button]}>
          <Text style={styles.textSignIn}>Đăng Nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.props.onButtonClick}
          style={[styles.buttonSignUp, styles.button]}>
          <Text style={styles.textSignUp}>Đăng Ký</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  button: {
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonSignIn: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#41b8c1',
    height: 50,
    width: 120,
  },
  buttonSignUp: {
    backgroundColor: '#41b8c1',
    height: 50,
    width: 120,
  },
  textSignIn: {
    color: '#7f7f7f',
  },
  textSignUp: {
    color: '#FFFFFF',
  },
});
