// src/components/Tab.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Tab = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.tab} onPress={onPress}>
      <Text style={styles.tabText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20, // Add border radius for curved shape
    marginRight: 10,
    backgroundColor: '#6495ED', // Set background color
  },
  tabText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Tab;
