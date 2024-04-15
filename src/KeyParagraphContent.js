import React from 'react';
import { View, Text } from 'react-native';

const KeyParagraphContent = ({ data }) => {
  return (
    <View>
      <Text>Key-Paragraph Content</Text>
      {Object.keys(data).map(heading => (
        <View key={heading}>
          <Text>{heading}</Text>
          <Text>{data[heading]}</Text>
        </View>
      ))}
    </View>
  );
};


export default KeyParagraphContent;
