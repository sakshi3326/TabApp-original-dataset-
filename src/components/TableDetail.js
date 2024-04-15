// src/components/TableDetail.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TableDetail = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        {Object.keys(data[0]).map((heading, index) => (
          <Text key={index} style={styles.heading}>
            {heading}
          </Text>
        ))}
      </View>
      {data.map((row, index) => (
        <View key={index} style={styles.row}>
          {Object.values(row).map((cell, cellIndex) => (
            <Text key={cellIndex} style={styles.cell}>
              {cell}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  headerRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 5,
  },
  heading: {
    fontWeight: 'bold',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  cell: {
    flex: 1,
  },
});

export default TableDetail;
