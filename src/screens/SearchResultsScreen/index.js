import React from 'react';
import { View } from 'react-native';
import styles from './styles';

import RouteMap from '../../components/RouteMap';
import UberTypes from '../../components/UberTypes';

const SearchResultsScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <RouteMap />
      </View>
      <View style={styles.typesContainer}>
        <UberTypes />
      </View>
    </View>
  );
};

export default SearchResultsScreen;
