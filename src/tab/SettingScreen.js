import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {CustomHeader} from '../index';

export class SettingScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader
          title="Settings"
          isHome={true}
          navigation={this.props.navigation}
        />
        <View style={styles.setting}>
          <Text>Settings!</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('SettingDetail')}>
            <Text>Go Setting Detail</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  setting: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    backgroundColor: 'white',
    padding: 10,
  },
});
