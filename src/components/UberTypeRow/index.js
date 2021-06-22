import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

import Ionicons from 'react-native-vector-icons/Ionicons';

const UberTypeRow = (props) => {
  const { rideClass } = props;

  const getImage = (rideClass) => {
    if (rideClass === 'UberX') {
      return require('../../assets/images/UberX.jpeg');
    }
    if (rideClass === 'Comfort') {
      return require('../../assets/images/Comfort.jpeg');
    }
    if (rideClass === 'UberXL') {
      return require('../../assets/images/UberXL.jpeg');
    }
    return '';
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={getImage(rideClass.rideClass)} />
      <View style={styles.classContainer}>
        <Text style={styles.class}>
          {rideClass.rideClass} <Ionicons name={'person'} size={16} />3
        </Text>
        <Text style={styles.time}>8:03 pm drop off</Text>
      </View>
      <View style={styles.priceContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
        <Text style={styles.price}> est. ${rideClass.price}</Text>
      </View>
    </View>
  );
};

export default UberTypeRow;
