import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

export class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    RNBootSplash.hide({duration: 250});
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.setting}>
          <Text>Login Screen!</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('HomeApp')}>
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text>Register</Text>
          </TouchableOpacity>
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
  button: {
    marginTop: 20,
    backgroundColor: 'white',
    padding: 10,
  },
});
