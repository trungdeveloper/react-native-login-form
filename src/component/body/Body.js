import React, {Component} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import InputSection from './InputSection';
import Buttons from './Button';

export default class Body extends Component {
  state = {
    line: [
      {label: 'Tên người dùng*'},
      {label: 'Email*'},
      {label: 'Số điện thoại*'},
      {label: 'Tên tài khoản*'},
      {label: 'Mật khẩu*', type: 'password', secureTextEntry: true},
      {label: 'Xác nhận mật khẩu*', type: 'password', secureTextEntry: true},
    ],
    name: '',
    email: '',
    phone: '',
    userName: '',
    password: '',
    confirmPassword: '',
  };

  onChangeText = (value, key) => {
    this.setState({
      [key]: value,
    });
  };

  clearData = () => {
    this.setState({
      name: '',
      email: '',
      phone: '',
      userName: '',
      password: '',
      confirmPassword: '',
    });
  };

  onButtonClick = () => {
    if (
      this.state.name === '' ||
      this.state.email === '' ||
      this.state.phone === '' ||
      this.state.userName === '' ||
      this.state.password === '' ||
      this.state.confirmPassword === ''
    ) {
      Alert.alert('Validate Data', 'Please enter all required fields', [
        {text: 'OK'},
      ]);
    } else if (this.state.confirmPassword !== this.state.password) {
      Alert.alert('Validate Data', 'Password does not match confirm password', [
        {text: 'OK'},
      ]);
    } else {
      Alert.alert(
        'Information of Your Account',
        `Name: ${this.state.name}
          email: ${this.state.email}
          phone: ${this.state.phone}
          userName: ${this.state.userName}
          password: ${this.state.password}`,
        [
          {
            text: 'Clear',
            onPress: () => this.clearData(),
            style: 'cancel',
          },
          {text: 'OK'},
        ],
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <InputSection
          ref={ref => {
            this.name = ref;
          }}
          onSubmitEditing={() => {
            this.email.onFocus();
          }}
          id="name"
          onChangeText={this.onChangeText}
          value={this.state.name}
          label={this.state.line[0].label}
        />
        <InputSection
          ref={ref => {
            this.email = ref;
          }}
          id="email"
          onChangeText={this.onChangeText}
          value={this.state.email}
          label={this.state.line[1].label}
        />
        <InputSection
          id="phone"
          onChangeText={this.onChangeText}
          value={this.state.phone}
          label={this.state.line[2].label}
        />
        <InputSection
          id="userName"
          onChangeText={this.onChangeText}
          value={this.state.userName}
          label={this.state.line[3].label}
        />
        <InputSection
          id="password"
          onChangeText={this.onChangeText}
          value={this.state.password}
          label={this.state.line[4].label}
          type={this.state.line[4].type}
          secureTextEntry={this.state.line[4].secureTextEntry}
        />
        <InputSection
          id="confirmPassword"
          onChangeText={this.onChangeText}
          value={this.state.confirmPassword}
          label={this.state.line[5].label}
          type={this.state.line[5].type}
          secureTextEntry={this.state.line[5].secureTextEntry}
        />
        <Buttons onButtonClick={this.onButtonClick} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
