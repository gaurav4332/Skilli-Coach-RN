import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../helper/utils';

export default function Separator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGreen,
    width: '85%',
    alignSelf: 'center',
  },
});
