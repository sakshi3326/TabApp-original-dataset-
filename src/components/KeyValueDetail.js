// src/components/KeyValueDetail.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const KeyValueDetail = ({ data }) => {
  return (
    <View style={styles.container}>
      {Object.entries(data).map(([key, value], index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.key}>{key}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  key: {
    fontWeight: 'bold',
  },
  value: {},
});

export default KeyValueDetail;
