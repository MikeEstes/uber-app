import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    height: 70,
    width: 80,
    resizeMode: 'contain',
  },
  classContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  class: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  time: {
    color: '#5d5d5d',
  },
  priceContainer: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 5,
  },
});

export default styles;
