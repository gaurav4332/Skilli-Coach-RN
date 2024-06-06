import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomCheckbox = ({label}) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity onPress={toggleCheckbox}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon
          name={isChecked ? 'check-square' : 'square-o'}
          size={24}
          color={isChecked ? 'green' : 'black'}
        />
        <Text style={{marginLeft: 10}}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomCheckbox;
