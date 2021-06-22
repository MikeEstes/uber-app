import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';

import UberTypeRow from '../UberTypeRow';

import classData from './classData';

const UberTypes = (props) => {
  const confirm = () => {
    console.log('Uber confirmed.');
  };

  return (
    <View>
      {classData.map((rideClass) => (
        <UberTypeRow rideClass={rideClass} />
      ))}

      <Pressable onPress={confirm} style={styles.confirmButton}>
        <Text style={styles.confirmText}>Confirm Uber</Text>
      </Pressable>
    </View>
  );
};

export default UberTypes;
