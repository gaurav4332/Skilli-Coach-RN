import React from 'react';
import {KeyboardAvoidingView, ScrollView, StyleSheet} from 'react-native';

import {isIos, wp} from '../../helper/constants';

const KeyboardAvoidScrollView = ({
  children,
  scrollStyle,
  scrollContainerStyle,
  keyboardAvoidingStyle,
  keyboardAvoidingContainerStyle,
}: any) => (
  <KeyboardAvoidingView
    behavior={isIos ? 'padding' : 'height'}
    contentContainerStyle={[keyboardAvoidingContainerStyle]}
    style={[styles.keyboardAvoidingStyle, keyboardAvoidingStyle]}>
    <ScrollView
      bounces={false}
      style={scrollStyle}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        styles.scrollContainerStyle,
        scrollContainerStyle,
      ]}>
      {children}
    </ScrollView>
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  keyboardAvoidingStyle: {
    flex: 1,
  },
  scrollContainerStyle: {
    flexGrow: 1,
  },
});

export default KeyboardAvoidScrollView;
