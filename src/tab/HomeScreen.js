import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {CustomHeader} from '../index';
import DefaultText from '../core/DefaultText';
export class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader
          title="Home"
          isHome={true}
          navigation={this.props.navigation}
        />
        <View style={styles.home}>
          <Text>Home!</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('HomeDetail')}>
            <DefaultText content="Go Home Details" style={{fontSize: 20}} />
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

  button: {
    marginTop: 20,
    backgroundColor: 'white',
    padding: 10,
  },
});
