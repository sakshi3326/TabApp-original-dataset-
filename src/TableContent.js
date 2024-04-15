import React from 'react';
import { View, Text } from 'react-native';

const TableContent = ({ data }) => {
  return (
    <View>
      <Text>Table Content</Text>
      <View>
        <View style={{ flexDirection: 'row' }}>
          {Object.keys(data[0]).map(heading => (
            <View key={heading} style={{ flex: 1 }}>
              <Text>{heading}</Text>
            </View>
          ))}
        </View>
        {data.map((row, index) => (
          <View key={index} style={{ flexDirection: 'row' }}>
            {Object.keys(row).map(heading => (
              <View key={heading} style={{ flex: 1 }}>
                <Text>{row[heading]}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};


export default TableContent;
