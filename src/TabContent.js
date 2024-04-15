import React from 'react';
import { View, Text } from 'react-native';

const TabContent = ({ data }) => {
  return (
    <View>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};

export default TabContent;
