import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Bằng việc xác nhận tạo tài khoản, bạn đã đồng ý với các
          <Text style={styles.policy}> điều khoản quy định</Text> của chúng tôi
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  text: {
    color: '#acacac',
  },
  policy: {
    color: '#41b8c1',
  },
});
