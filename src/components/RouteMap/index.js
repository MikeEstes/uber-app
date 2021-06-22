import React from 'react';
import styles from './styles';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyDTOtsccHRcLaU9kE4jXfYn31k8qrj3Awo';

const RouteMap = (props) => {
  const origin = {
    latitude: 28.450627,
    longitude: -16.263045,
  };

  const destination = {
    latitude: 28.450127,
    longitude: -16.269045,
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
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="black"
      />
      <Marker coordinate={origin} title={'Start'} />
      <Marker coordinate={destination} title={'Destination'} />
    </MapView>
  );
};

export default RouteMap;
