import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import HomeMap from '../../components/HomeMap';
import Message from '../../components/Message';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = (props) => {
  return (
    <View>
      <HomeMap />
      <Message />
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
