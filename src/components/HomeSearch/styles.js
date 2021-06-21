import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: '#eee',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 20,
    fontWeight: '600',
  },
  timeContainer: {
    backgroundColor: '#fff',
    padding: 10,
    width: 100,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#d9d9d9',
  },
  iconContainer: {
    backgroundColor: '#b3b3b3',
    padding: 10,
    borderRadius: 25,
  },
  destinationText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default styles;
