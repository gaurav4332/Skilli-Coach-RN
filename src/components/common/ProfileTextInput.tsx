import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {colors, fontFamily, fontSize} from '../../helper/utils';

export default function ProfileTextInput({
  placeholder,
  textInputStyle,
  numberOfLines,
  onChangeText,
  keyboardType,
  defaultValue,
  value,
}: any) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0}>
      <TextInput
        placeholder={placeholder}
        style={[styles.textInputStyle, textInputStyle]}
        numberOfLines={numberOfLines}
        onChangeText={onChangeText}
        placeholderTextColor={colors.darkBlue}
        keyboardType={keyboardType}
        defaultValue={defaultValue}
        value={value}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  textInputStyle: {
    color: colors.white,
    backgroundColor: colors.lightGrey,
    fontFamily: fontFamily.openSansBold,
  },
});
