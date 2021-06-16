import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import HomeMap from '../../components/HomeMap';
import Message from '../../components/Message';

const HomeScreen = (props) => {
  return (
    <View>
      <HomeMap />
      <Message />
      {/* Where To */}
    </View>
  );
};

export default HomeScreen;
