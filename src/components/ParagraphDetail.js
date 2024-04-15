// src/components/ParagraphDetail.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ParagraphDetail = ({ data }) => {
  return (
    <View style={styles.container}>
      {Array.isArray(data) ? (
        data.map((paragraph, index) => (
          <Text key={index} style={styles.paragraph}>
            {paragraph}
          </Text>
        ))
      ) : (
        <Text style={styles.paragraph}>{data}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  paragraph: {},
});

export default ParagraphDetail;
