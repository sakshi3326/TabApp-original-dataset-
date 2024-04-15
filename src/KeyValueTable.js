import React from 'react';
import { View, Text } from 'react-native';

const KeyValueTable = ({ data }) => {
  return (
    <View>
      <Text>Key-Value Table</Text>
      <View>
        {Object.keys(data).map(key => (
          <View key={key}>
            <Text>{key}: {data[key]}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};


export default KeyValueTable;

