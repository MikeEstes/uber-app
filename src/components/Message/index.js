import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Message = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.messageText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Text style={styles.learnMore}>Learn more</Text>
    </View>
  );
};

export default Message;
