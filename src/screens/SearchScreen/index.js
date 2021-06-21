import React, { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles from './styles';

const SearchScreen = (props) => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    if (originPlace && destinationPlace) {
      console.log('redirect to result');
    }
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="From"
          onPress={(data, details = null) => {
            setOriginPlace({ data, details });
          }}
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyDTOtsccHRcLaU9kE4jXfYn31k8qrj3Awo',
            language: 'en',
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({ data, details });
          }}
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyDTOtsccHRcLaU9kE4jXfYn31k8qrj3Awo',
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
