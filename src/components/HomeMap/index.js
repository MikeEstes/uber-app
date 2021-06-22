import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

import cars from './cars';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const HomeMap = (props) => {
  const getImage = (rideClass) => {
    if (rideClass === 'UberX') {
      return require('../../assets/images/top-UberX.png');
    }
    if (rideClass === 'Comfort') {
      return require('../../assets/images/top-Comfort.png');
    }
    if (rideClass === 'UberXL') {
      return require('../../assets/images/top-UberXL.png');
    }
    return '';
  };

  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      region={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}>
      {cars.map((car) => {
        return (
          <Marker
            key={car.id}
            coordinate={{ latitude: car.latitude, longitude: car.longitude }}>
            <Image style={styles.marker} source={getImage(car.rideClass)} />
          </Marker>
        );
      })}
    </MapView>
  );
};

export default HomeMap;
