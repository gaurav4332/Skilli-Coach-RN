import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import {icons} from '../../helper/iconConstants';
import {colors, fontFamily, fontSize} from '../../helper/utils';
import {hp, wp} from '../../helper/constants';

const PasswordInput = ({
  title,
  value,
  placeholder,
  keyboardType,
  onChangeText,
  secureTextEntry,
  containerStyle,
  warnText,
  titleContent,
  textInputStyle,
  editable,
  maxLength,
}: any) => {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        keyboardType={keyboardType}
        secureTextEntry={!isPasswordVisible}
        style={[styles.inputText, textInputStyle]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor={colors.white}
        editable={editable}
        maxLength={maxLength}
      />
      <TouchableOpacity onPress={togglePasswordVisibility}>
        <Image
          source={isPasswordVisible ? icons.hidePassword : icons.unhidePassword}
          style={{
            width: wp(5),
            height: wp(5),
            tintColor: colors.white,
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.inputBackground,
    borderRadius: wp(3.5),
    paddingVertical: Platform.OS === 'ios' ? hp(1.5) : hp(0),
    paddingHorizontal: wp(3.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(1.5),
    alignItems: 'center',
    marginVertical: hp(0.5),
  },
  titleText: {
    fontSize: fontSize(16),
    fontFamily: fontFamily.bold,
    color: colors.white,
    marginLeft: wp(1),
  },
  inputText: {
    width: '80%',
    fontFamily: fontFamily.bold,
    fontSize: fontSize(16),
    color: colors.white,
  },
  warnText: {
    fontSize: fontSize(12),
  },
});

export default PasswordInput;
