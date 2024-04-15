import React from 'react';
import { View, Text } from 'react-native';

const ParagraphContent = ({ data }) => {
  return (
    <View>
      <Text>Paragraph Content</Text>
      {Array.isArray(data) ? data.map((paragraph, index) => (
        <Text key={index}>{paragraph}</Text>
      )) : <Text>{data}</Text>}
    </View>
  );
};


export default ParagraphContent;
