import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {icons} from '../../helper/iconConstants';
import {hp, wp} from '../../helper/constants';
import {colors, fontFamily, fontSize} from '../../helper/utils';

const CollapsibleView = ({title, content}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <TouchableOpacity
        onPress={toggleCollapse}
        style={{marginVertical: hp(1)}}>
        <View
          style={[
            styles.header,
            isCollapsed ? {borderRadius: 0} : {borderRadius: 20},
          ]}>
          <View style={styles.headerContent}>
            <View style={styles.textAndImgContent}>
              <Text style={[styles.title, !isCollapsed && styles.activeTitle]}>
                {title}
              </Text>
              <Image
                source={isCollapsed ? icons.downArrow : icons.downArrow}
                style={styles.downImg}
                resizeMode="contain"
                tintColor={'red'}
              />
            </View>
            {!isCollapsed && (
              <View style={[styles.content]}>
                <Text style={styles.contentTxt}>{content}</Text>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomColor: 'lightgray',
  },
  headerWithMargin: {},
  headerContent: {
    backgroundColor: colors.lightGrey,
    paddingHorizontal: wp(3),
    paddingVertical: hp(2),
    borderRadius: wp(5),
  },
  textAndImgContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: fontSize(17),
    fontFamily: fontFamily.bold,
    width: '80%',
    color: colors.darkBlue,
  },
  activeTitle: {
    color: 'red',
  },
  content: {
    backgroundColor: colors.lightGrey,
    paddingVertical: hp(1),
  },
  contentTxt: {
    fontSize: fontSize(13),
    fontFamily: fontFamily.bold,
    color: colors.darkBlue,
  },
  downImg: {
    height: wp(5),
    width: wp(5),
  },
});

export default CollapsibleView;
