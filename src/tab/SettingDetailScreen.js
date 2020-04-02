import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {CustomHeader} from '../index';

export class SettingDetailScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader
          title="Settings Detail"
          navigation={this.props.navigation}
        />
        <View style={styles.setting}>
          <Text>Settings Detail!</Text>
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
