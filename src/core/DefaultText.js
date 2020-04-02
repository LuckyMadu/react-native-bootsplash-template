import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const DefaultText = props => {
  return (
    <Text {...props} style={[styles.text, props.style]}>
      {props.content}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default DefaultText;
