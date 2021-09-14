// native
import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, Platform, Image} from 'react-native';
//import {Card} from 'react-native-paper';

import {TextInput, Card, TouchableOpacity} from 'react-native';

//import styles, {colors, primaryTheme} from '../../../styles/index.styles';
//import {TouchableOpacity} from 'react-native-gesture-handler';
import {moderateScale, verticalScale, scale} from 'react-native-size-matters';

const Component = ({serviceName, imagePath}) => (
  <View
    style={{
      borderRadius: scale(12),
      height: verticalScale(100),
      width: '30%',
      backgroundColor: 'white',
      marginLeft: scale(5),
      marginRight: scale(5),
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Image
      style={{
        height: verticalScale(50),
        width: scale(50),
      }}
      source={imagePath}
      //source={require('../../../assests/images/MEDICOS_MODULE_ICONS-02.png')}
      //resizeMode="stretch"
    />
    <Text style={{color: 'black', fontSize: 10}}>{serviceName}</Text>
  </View>
);
const screenStyles = StyleSheet.create({
  textfieldContanier: {
    borderWidth: 1,
    borderColor: Platform.OS === 'ios' ? 'gray' : '#FFFFFF',
    borderRadius: 25,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5,
    marginTop: 5,
    height: 50,
    paddingLeft: 20,
    paddingBottom: 10,
    paddingTop: 0,
  },
  serviceCardStyle: {
    width: '90%',
    //height: height,
    borderRadius: 20,

    //backgroundColor : primaryTheme.yellow
    // borderWidth: Platform.OS === 'ios' ? 1 : 0,
    // borderRadius: Platform.OS === 'ios' ? 12 : 12,
    // borderColor: '#ddd',
    // //borderBottomWidth: 0,
    // shadowColor: '#FFFFFF',
    // shadowOffset: {width: 0, height: 2},
    // //shadowOpacity: 0.1,
    // shadowRadius: Platform.OS === 'ios' ? 3 : 0,
    // elevation: Platform.OS === 'ios' ? 5 : 3,
  },
});

Component.defaultProps = {
  height: verticalScale(120),
  backgroundColor: '#FFF',
  isBomba: false,
};

// Component.propTypes = {
//   isPassword: PropTypes.bool,
//   label: PropTypes.string,
//   placeholder: PropTypes.string,
//   keyboardType: PropTypes.string,
//   getContext: PropTypes.func,
// };

export default Component;
