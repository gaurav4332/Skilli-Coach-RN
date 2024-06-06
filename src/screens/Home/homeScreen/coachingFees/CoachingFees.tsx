import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../../components/common/Header';
import style from './coachingFees.style';
import {Dropdown} from 'react-native-element-dropdown';
import {
  dataLanguages,
  dataTypeOfCoaching,
} from '../../../../helper/dataConstants';
import {icons} from '../../../../helper/iconConstants';
import {colors} from '../../../../helper/utils';
import NextButton from '../../../../components/auth/NextButton';
import KeyboardAvoidScrollView from '../../../../components/common/KeyboardAvoidScrollView';
import CustomModal from '../../../../components/common/CustomModal';
import {useNavigation} from '@react-navigation/native';

export default function CoachingFees({navigation}: any) {
  const {goBack} = useNavigation();
  const [valueLanguage, setValueLanguage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const onPressBack = () => {
    setModalVisible(false);
    navigation.navigate('HistoryVideos');
  };
  const onPressRightBtn = () => {
    navigation.openDrawer();
  };
  const backIcon = () => {
    goBack();
  };

  return (
    <View style={style.container}>
      <SafeAreaView />
      <Header
        title={'Coaching Session'}
        rightContainer={style.rightContainer}
        onPressBack={() => backIcon()}
        onPressRightBtn={() => onPressRightBtn()}
      />
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={style.coachingFeeContainer}>
          <Text style={style.coachingFeesTxt}>Coaching Fees</Text>
        </View>

        <View style={style.preferredLanguage}>
          <Dropdown
            style={style.dropdown}
            placeholderStyle={style.placeholderStyle}
            selectedTextStyle={style.selectedTextStyle}
            inputSearchStyle={style.inputSearchStyle}
            iconStyle={style.iconStyle}
            data={dataTypeOfCoaching}
            itemTextStyle={style.itemTextStyle}
            // search
            maxHeight={300}
            //   minHeight={100}
            labelField="label"
            valueField="value"
            placeholder="Type of coaching + Fee"
            // searchPlaceholder="Search..."
            value={valueLanguage}
            onChange={item => {
              setValueLanguage(item.valueLanguage);
            }}
            renderRightIcon={() => (
              <Image
                source={icons.downArrow}
                style={style.downArrowImg}
                resizeMode="contain"
              />
            )}
          />
        </View>
        <KeyboardAvoidScrollView>
          <TextInput
            placeholder={'Your Commitment'}
            style={style.textInputStyle}
            placeholderTextColor={colors.darkBlue}
          />

          <View style={style.creditsAndTopupContainer}>
            <Text style={style.skilliCreditsTxt}>{'Your Skilli Credits'}</Text>
            <TouchableOpacity style={style.topUpContainer}>
              <Text style={style.topUpTxt}>{'Top Up'}</Text>
            </TouchableOpacity>
          </View>
          <View style={style.staticBarContainer}>
            <Image source={icons.staticBar7} style={style.staticBarImg} />
          </View>

          <View style={style.feeContainer}>
            <View style={style.totalContainer}>
              <Text style={style.feeTitleTxt}>{'Total:'}</Text>
            </View>
            <View style={style.feeHomelogoContainer}>
              <Image
                source={icons.home}
                style={style.feeHomelogoImg}
                resizeMode="contain"
              />
              <Text style={style.feeTxt}>{'50'}</Text>
            </View>
          </View>

          <CustomModal
            isVisible={modalVisible}
            onClose={() => onPressBack()}
            titleText="Coaching Request"
            titleText2="Submitted"
            buttonText="Continue"
            onButtonPress={() => onPressBack()}
            modalConetent={style.modalConetent}
            subTitletext={
              'You will get a notification once the Coach accepts your request.'
            }
          />
        </KeyboardAvoidScrollView>
        <View style={style.footerContainer}>
          <View style={style.termAndConContainer}>
            <Text style={style.termAndConTxt}>
              {'I accept Terms and Conditions and Privacy Policy'}
            </Text>
          </View>
          <NextButton
            title="Pay"
            btnContainer={style.btnContainer}
            onPress={() => openModal()}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
