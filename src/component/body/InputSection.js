import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
export default class InputSection extends Component {
  state = {
    secureTextEntry: this.props.secureTextEntry,
  };

  handlePress = () => {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
    });
  };

  onChangeText = text => {
    this.props.onChangeText(text, this.props.id);
  };
  onFocus = () => {
    this.input.focus();
  };

  render() {
    return (
      <View style={styles.line}>
        <Text>{this.props.label}</Text>
        <View style={styles.searchSection}>
          <TextInput
            {...this.props}
            ref={ref => {
              this.input = ref;
            }}
            style={styles.input}
            secureTextEntry={this.state.secureTextEntry}
            onChangeText={text => {
              this.onChangeText(text);
            }}
            value={this.props.value}
          />
          <TouchableOpacity onPress={this.handlePress}>
            <Image
              style={styles.icon}
              source={
                this.props.type
                  ? {
                      uri:
                        'https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png',
                    }
                  : null
              }
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  line: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#03a9f4',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    height: 40,
  },
  input: {
    flex: 1,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
    alignItems: 'center',
  },
});
