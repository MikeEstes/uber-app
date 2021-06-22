import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  mapContainer: {
    height: Dimensions.get('window').height - 400,
  },
  typesContainer: {
    height: 400,
  },
});

export default styles;
