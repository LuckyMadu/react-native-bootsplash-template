import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {IMAGE} from '../constants/images';

export class CustomDrawer extends Component {
  render() {
    return (
      <SafeAreaView style={styles.drawerWrapper}>
        <View style={styles.profile}>
          <Image source={IMAGE.ICON_PROFILE} style={styles.profileImage} />
        </View>
        <ScrollView>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('MenuTab')}>
            <Text>Menu Tab</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Notifications')}>
            <Text>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text>LogOut</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  drawerWrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  profile: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 60,
  },
});
