import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {CustomHeader} from '../index';

export class RegisterScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader title="Register" navigation={this.props.navigation} />
        <View style={styles.setting}>
          <Text>Register Screen!</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  setting: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
