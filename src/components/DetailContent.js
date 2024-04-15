// src/components/DetailContent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailContent = ({ content }) => {
  return (
    <View style={styles.container}>
      <Text>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default DetailContent;
