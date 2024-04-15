import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Tab from '../components/Tab';
import KeyValueDetail from '../components/KeyValueDetail';
import ParagraphDetail from '../components/ParagraphDetail';
import KeyParagraphDetail from '../components/KeyParagraphDetail';
import TableDetail from '../components/TableDetail';

const MainScreen = () => {
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://harpreetcd.github.io/reactnative.json');
      const jsonData = await response.json();
      console.log('Fetched data:', jsonData); // Log the fetched data
      setData(jsonData);
      setActiveTab(Object.keys(jsonData)[0]); // Set the first tab as active initially
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const renderTabs = () => {
    if (!data) return null;

    return Object.keys(data).map((tabName, index) => (
      <Tab key={index} title={tabName} onPress={() => setActiveTab(tabName)} />
    ));
  };

  const renderDetailContent = () => {
  console.log('Active Tab:', activeTab); // Add this line to check activeTab value
  if (!activeTab || !data || !data[activeTab]) {
    console.log('No active tab or data found');
    return null;
  }

  const tabContent = data[activeTab];

  if (Array.isArray(tabContent)) {
    console.log('Rendering tab content as array:', tabContent);
    return tabContent.map((content, index) => renderContent(content, index));
  } else {
    console.log('Rendering tab content as object:', tabContent);
    return Object.values(tabContent).map((content, index) => renderContent(content, index));
  }
};

  
  
  const renderContent = (content, index) => {
    switch (content.type) {
      case 'KEY_VALUE':
        return <KeyValueDetail key={index} data={content.data} />;
      case 'PARAGRAPH':
        return <ParagraphDetail key={index} data={content.data} />;
      case 'KEY_PARAGRAPH':
        return <KeyParagraphDetail key={index} data={content.data} />;
      case 'TABLE':
        return <TableDetail key={index} data={content.data} />;
      default:
        return null;
    }
  };
  

  return (
    <ScrollView>
      <ScrollView horizontal style={styles.tabContainer}>
        {renderTabs()}
      </ScrollView>
      {renderDetailContent()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
  },
});

export default MainScreen;
