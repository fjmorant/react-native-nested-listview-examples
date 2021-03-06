import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const options = [
  {
    screen: 'CustomNodeExample',
    title: 'Custom Node Example',
  },
  {
    screen: 'StateChangeNodeExample',
    title: 'Opened Nodes Change',
  },
  {
    screen: 'ErrorMessageExample',
    title: 'Error Messages',
  },
  {
    screen: 'NestedRowExample',
    title: 'NestedRow',
  },
  {
    screen: 'ExtraDataExample',
    title: 'ExtraDataExample',
  },
  {
    screen: 'DynamicContentExample',
    title: 'Dynamic Content',
  },
  {
    screen: 'ChildrenAsObjectExample',
    title: 'Children as Object',
  },
  {
    screen: 'PerformanceExample',
    title: 'Performance test',
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start' }}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={{
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: 'rgb(0, 0, 0)',
          }}
          onPress={() => navigation.navigate(option.screen)}>
          <Text style={{ color: 'rgb(0, 0, 0)' }}>{option.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default HomeScreen;
