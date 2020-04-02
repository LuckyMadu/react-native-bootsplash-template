import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {IMAGE} from '../constants/images';

export class CustomHeader extends Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.col1}>
          {this.props.isHome ? (
            <TouchableOpacity
              onPress={() => this.props.navigation.openDrawer()}>
              <Image
                style={styles.image}
                source={IMAGE.ICON_MENU}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.back}
              onPress={() => this.props.navigation.goBack()}>
              <Image
                style={styles.imageBack}
                source={IMAGE.ICON_BACK}
                resizeMode="contain"
              />
              <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.col2}>
          <Text> {this.props.title}</Text>
        </View>
        <View style={styles.col3} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 50,
  },
  image: {
    height: 25,
    width: 25,
    marginLeft: 10,
  },
  imageBack: {
    height: 30,
    width: 30,
    marginLeft: 10,
  },
  col1: {
    flex: 1,
    justifyContent: 'center',
  },
  col2: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  col3: {
    flex: 1,
    justifyContent: 'center',
  },
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
  back: {
    flexDirection: 'row',
    //justifyContent: 'center',
  },
  backText: {
    textAlign: 'center',
    alignItems: 'center',
    padding: 5,
  },
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
