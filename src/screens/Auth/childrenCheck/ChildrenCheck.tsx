import React, {useState} from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import style from './childrenCheck.style';
import {icons} from '../../../helper/iconConstants';
import {useNavigation} from '@react-navigation/native';
import {colors, fontFamily, fontSize} from '../../../helper/utils';
import Separator from '../../../components/common/Separator';
import NextButton from '../../../components/auth/NextButton';
import {useDispatch, useSelector} from 'react-redux';
import {SIGNUP} from '../../../action/types';
import {launchImageLibrary} from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';
import {hp, wp} from '../../../helper/constants';
import DatePicker from 'react-native-date-picker';
import {isEmpty} from 'lodash';

export default function ChildrenCheck({navigation}: any) {
  const {goBack} = useNavigation();
  const dispatch = useDispatch();

  const signUpData = useSelector(state => state.data.signUp);

  const [certificateNumber, setCertificatesNumber] = useState('');
  const [insuranceNumber, setInsuranceNumber] = useState('');
  const [pickedDocument, setPickedDocument] = useState<any>('');
  const [insuranceDocument, setInsuranceDocument] = useState<any>('');
  const [certificates, setCertificates] = useState([]);
  const [insuranceCertificates, setInsuranceCertificates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const [insuranceSelectedDate, setInsuranceSelectedDate] = useState(null);
  const [dateWarnText, setDateWarnText] = useState('');
  const [showDOB, setShowDOB] = useState(true);
  const [showInsuranceDOB, setShowInsuranceDOB] = useState(true);
  const [open, setOpen] = useState(false);
  const [insuranceDateOpen, setInsuranceDateOpen] = useState(false);
  const [isNoSelected, setIsNoSelected] = useState(false);
  const [isYesSelected, setIsYesSelected] = useState(true);
  const [isInsuranceYesSelected, setIsInsuranceYesSelected] = useState(true);
  const [isInsuranceNoSelected, setIsInsuranceNoSelected] = useState(false);
  const [childrenSelectedValue, setChildrenSelectedValue] = useState('yes');
  const [insuranceSelectedValue, setInsuranceSelectedValue] = useState('yes');

  const formatDate = date => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDay = day < 10 ? `0${day}` : `${day}`;
    const formattedMonth = month < 10 ? `0${month}` : `${month}`;
    return `${formattedDay}-${formattedMonth}-${year}`;
  };

  const toggleDatePicker = () => {
    setOpen(!open);
  };

  const toggleInsuranceDatePicker = () => {
    setInsuranceDateOpen(!insuranceDateOpen);
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  console.log(tomorrow);

  const handleDateChange = newDate => {
    setSelectedDate(newDate);
    setShowDOB(false);
    setOpen(false);
  };
  const insuranceDateChange = newDate => {
    setInsuranceSelectedDate(newDate);
    setShowInsuranceDOB(false);
    setInsuranceDateOpen(false);
  };

  const openDocumentPicker = async () => {
    try {
      const result = await DocumentPicker.pick({
        // allowMultiSelection: true,
        type: [DocumentPicker.types.pdf, DocumentPicker.types.images],
      });

      let updatedCertificates = result.map(
        (result: {uri: any; type: any; name: any}) => {
          return {
            uri: result.uri,
            type: result.type,
            fileName: result.name,
          };
        },
      );

      setCertificates(updatedCertificates);
      const yourCertificates = {
        certificates: updatedCertificates,
      };
      // dispatch({type: SIGNUP, payload: yourCertificates});
      Alert.alert('Success', 'Card was uploaded successfully');
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log(err);
      } else {
        console.log(err);
      }
    }
  };
  const openInsuranceDocumentPicker = async () => {
    try {
      const result = await DocumentPicker.pick({
        // allowMultiSelection: true,
        type: [DocumentPicker.types.pdf, DocumentPicker.types.images],
      });

      let insuranceUpdatedCertificates = result.map(
        (result: {uri: any; type: any; name: any}) => {
          return {
            uri: result.uri,
            type: result.type,
            fileName: result.name,
          };
        },
      );

      setInsuranceCertificates(insuranceUpdatedCertificates);
      const insuranceCertificates = {
        insuranceCertificates: insuranceUpdatedCertificates,
      };
      // dispatch({type: SIGNUP, payload: insuranceCertificates});
      Alert.alert('Success', 'Card was uploaded successfully');
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log(err);
      } else {
        console.log(err);
      }
    }
  };

  const onPressOption = option => {
    if (option === 'yes') {
      setIsYesSelected(true);
      setIsNoSelected(false);
      setChildrenSelectedValue('yes');
    } else if (option === 'no') {
      setIsYesSelected(false);
      setIsNoSelected(true);
      setChildrenSelectedValue('no');
    }
  };

  const onPressInsuranceOption = option => {
    if (option === 'yes') {
      setIsInsuranceYesSelected(true);
      setIsInsuranceNoSelected(false);
      setInsuranceSelectedValue('yes');
    } else if (option === 'no') {
      setIsInsuranceNoSelected(true);
      setIsInsuranceYesSelected(false);
      setInsuranceSelectedValue('no');
    }
  };

  const onPressNext = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time part to 0 for comparison

    const minimumDOB = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate(),
    );

    if (isYesSelected) {
      if (
        isEmpty(certificateNumber) ||
        !selectedDate ||
        isEmpty(certificates)
      ) {
        Alert.alert(
          'Alert',
          'Please fill in all fields for Working With Children Card.',
        );
        return;
      } else {
        const selectedDateObj = new Date(selectedDate);
        selectedDateObj.setHours(0, 0, 0, 0);

        if (selectedDateObj <= today) {
          Alert.alert(
            'Alert',
            "Please select a future date for the children's card.",
          );
          return;
        }

        const allData = {
          checkChildrenCard: childrenSelectedValue,
          childrenCardNumber: certificateNumber.trim(),
          childrenCardExpiryDate: formatDate(selectedDate),
          childrenCardCertificates: certificates,
        };
        dispatch({type: SIGNUP, payload: allData});
      }
    }

    if (isInsuranceYesSelected) {
      if (
        isEmpty(insuranceNumber) ||
        !insuranceSelectedDate ||
        isEmpty(insuranceCertificates)
      ) {
        Alert.alert('Alert', 'Please fill in all fields for Insurance.');
        return;
      } else {
        const insuranceSelectedDateObj = new Date(insuranceSelectedDate);
        insuranceSelectedDateObj.setHours(0, 0, 0, 0); // Set time part to 0 for comparison

        if (insuranceSelectedDateObj <= today) {
          Alert.alert('Alert', 'Please select a future date for insurance.');
          return;
        }

        const allData = {
          checkInsuranceCertificate: insuranceSelectedValue,
          insuranceNumber: insuranceNumber.trim(),
          insuranceDate: formatDate(insuranceSelectedDate),
          insuranceCertificates: insuranceCertificates,
        };
        dispatch({type: SIGNUP, payload: allData});
        navigation.navigate('CoachGuidelines');
      }
    } else {
      const allData = {
        checkInsuranceCertificate: insuranceSelectedValue,
        checkChildrenCard: childrenSelectedValue,
      };
      dispatch({type: SIGNUP, payload: allData});
      navigation.navigate('CoachGuidelines');
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
        style={style.container}>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <TouchableOpacity
            style={style.backContainer}
            onPress={() => goBack()}>
            <Image
              source={icons.backArrow}
              style={style.backImg}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={style.logoContainer}>
            <Image
              source={icons.logo3x}
              style={style.logo}
              resizeMode="contain"
            />
          </View>
          <View style={style.staticBarContainer}>
            <Image
              source={icons.SetYourSkilliRatesBar}
              style={style.staticBar1}
              resizeMode="contain"
            />
          </View>
          <View style={style.titleContainer}>
            <Text style={style.titleTxt}>{'Working With Children Card'}</Text>
            <View style={style.innerTitleContainer}>
              <Text style={style.innerTitleTxt} numberOfLines={3}>
                {'Do you have a current Working With Children Card?'}
              </Text>
            </View>
          </View>
          <View style={style.uprBtnContainer}>
            <TouchableOpacity
              style={[
                style.yesContainer,
                isYesSelected ? style.selectedButton : null,
              ]}
              onPress={() => onPressOption('yes')}>
              <Text
                style={[
                  style.btnTxtContainer,
                  isYesSelected ? style.selectedButtonText : null,
                ]}>
                {'Yes'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                style.noContainer,
                isNoSelected ? style.selectedButton : null,
              ]}
              onPress={() => onPressOption('no')}>
              <Text
                style={[
                  style.noBtnTxtContainer,
                  isNoSelected ? style.selectedButtonText : null,
                ]}>
                {'No'}
              </Text>
            </TouchableOpacity>
          </View>
          {isNoSelected && (
            <View style={{marginHorizontal: wp(5)}}>
              <View style={style.innerTitleContainer}>
                <Text style={style.innerTitleTxt}>
                  {
                    'Please note that your account will remain inactive until you upload a current working with children card'
                  }
                </Text>
              </View>
            </View>
          )}

          {isYesSelected && (
            <View style={style.cardContainer}>
              <View style={style.rowContainer}>
                <TextInput
                  style={style.input}
                  placeholder="Card Number"
                  placeholderTextColor={colors.white}
                  keyboardType="numeric"
                  value={certificateNumber}
                  onChangeText={(text: any) => setCertificatesNumber(text)}
                />
              </View>
              <TouchableOpacity
                style={style.dropDownContainer}
                onPress={toggleDatePicker}>
                <View style={style.genderContainer}>
                  <Text style={style.dropDownTitltTxt}>
                    {showDOB ? 'Expiry Date' : formatDate(selectedDate)}
                  </Text>
                </View>
              </TouchableOpacity>
              <DatePicker
                mode="date"
                modal
                open={open}
                date={selectedDate || new Date()}
                onConfirm={handleDateChange}
                onCancel={() => setOpen(false)}
                // maximumDate={new Date()}
                minimumDate={tomorrow}
              />
              {/* 
              <View style={style.childrenCardTitleView}>
                <Text style={style.titleTxt}>{'Children Card'}</Text>
              </View> */}

              {pickedDocument ? (
                <TouchableOpacity
                  style={style.childrenCardContainer}
                  onPress={() => openDocumentPicker()}>
                  <Text style={style.explainerVideoTxt}>
                    {'Successfully Uploaded'}
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={style.childrenCardContainer}
                  onPress={() => openDocumentPicker()}>
                  <Image
                    source={icons.addIcon}
                    style={style.addIcon}
                    resizeMode="contain"
                  />
                  <Text style={style.explainerVideoTxt}>{'Upload Card'}</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
          <View style={style.separator}>
            <View style={style.separatorLine} />
          </View>

          <View>
            <View style={style.uprBtnContainer}>
              <Text style={style.titleTxt}>{'Insurance'}</Text>
            </View>

            <View style={style.insuranceTitleContainer}>
              <Text style={style.innerTitleTxt} numberOfLines={3}>
                {'Do you have a current insurance certificate?'}
              </Text>
            </View>

            <View style={style.uprBtnContainer}>
              <TouchableOpacity
                style={[
                  style.yesContainer,
                  isInsuranceYesSelected ? style.selectedButton : null,
                ]}
                onPress={() => onPressInsuranceOption('yes')}>
                <Text
                  style={[
                    style.btnTxtContainer,
                    isInsuranceYesSelected ? style.selectedButtonText : null,
                  ]}>
                  {'Yes'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  style.noContainer,
                  isInsuranceNoSelected ? style.selectedButton : null,
                ]}
                onPress={() => onPressInsuranceOption('no')}>
                <Text
                  style={[
                    style.noBtnTxtContainer,
                    isInsuranceNoSelected ? style.selectedButtonText : null,
                  ]}>
                  {'No'}
                </Text>
              </TouchableOpacity>
            </View>

            {isInsuranceNoSelected && (
              <View style={{marginHorizontal: wp(5)}}>
                <View style={style.innerTitleContainer}>
                  <Text style={style.innerTitleTxt}>
                    {
                      'Please acquire the required insurance coverage before coaching sessions begin. Details and specific requirements have been emailed for your convenience.'
                    }
                  </Text>
                </View>
              </View>
            )}

            {isInsuranceYesSelected && (
              <View style={style.cardContainer}>
                <View style={style.rowContainer}>
                  <TextInput
                    style={style.input}
                    placeholder="Insurance Number"
                    placeholderTextColor={colors.white}
                    keyboardType="numeric"
                    value={insuranceNumber}
                    onChangeText={(text: any) => setInsuranceNumber(text)}
                  />
                </View>
                <TouchableOpacity
                  style={style.dropDownContainer}
                  onPress={toggleInsuranceDatePicker}>
                  <View style={style.genderContainer}>
                    <Text style={style.dropDownTitltTxt}>
                      {showInsuranceDOB
                        ? 'Expiry Date'
                        : formatDate(insuranceSelectedDate)}
                    </Text>
                  </View>
                </TouchableOpacity>
                <DatePicker
                  mode="date"
                  modal
                  open={insuranceDateOpen}
                  date={insuranceSelectedDate || new Date()}
                  onConfirm={insuranceDateChange}
                  onCancel={() => setInsuranceDateOpen(false)}
                  // maximumDate={new Date()}
                  minimumDate={tomorrow}
                />

                {pickedDocument ? (
                  <TouchableOpacity
                    style={style.childrenCardContainer}
                    onPress={() => openInsuranceDocumentPicker()}>
                    <Text style={style.explainerVideoTxt}>
                      {'Successfully Uploaded'}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={style.childrenCardContainer}
                    onPress={() => openInsuranceDocumentPicker()}>
                    <Image
                      source={icons.addIcon}
                      style={style.addIcon}
                      resizeMode="contain"
                    />
                    <Text style={style.explainerVideoTxt}>
                      {'Upload Files'}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            )}
          </View>
          <NextButton
            title={'Next'}
            btnContainer={style.btnContainer}
            onPress={() => onPressNext()}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
