/* @flow */

import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import NestedListView, { INode } from 'react-native-nested-listview';

const data = [
  {
    name: 'Books Genders',
    descendants: [
      {
        name: 'Adventure',
      },
      {
        name: 'Romance',
      },
    ],
  },
  {
    name: 'Movies',
    descendants: [
      {
        name: 'Drama',
      },
      {
        name: 'Action',
      },
    ],
  },
  {
    name: 'Technology',
    descendants: [
      {
        name: 'Phones',
        descendants: [{ name: 'Samsung' }, { name: 'iPhone' }],
      },
    ],
  },
];

const data2 = [
  {
    name: 'Music',
    descendants: [
      {
        name: 'Rock',
      },
      {
        name: 'Heavy Metal',
      },
      {
        name: 'Pop',
      },
    ],
  },
  {
    name: 'Food',
    descendants: [
      {
        name: 'Dairy',
      },
      {
        name: 'Sweet',
        descendants: [
          {
            name: 'Chocolat',
          },
          {
            name: 'Sugar',
          },
          {
            name: 'Biscuits',
          },
        ],
      },
    ],
  },
  {
    name: 'Technology',
    descendants: [
      { name: 'Laptop', descendants: [{ name: 'Pc' }, { name: 'Mac' }] },
    ],
  },
];

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'rgb(255, 255, 255)', padding: 15 },
  node: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgb(0, 0, 0)',
  },
});

const DynamicContentExample = () => {
  const [dataSource, setDataSource] = useState('data');

  const renderNode = (node: INode, level?: number) => {
    const paddingLeft = (level ?? 0 + 1) * 30;

    return (
      <View style={[styles.node, { backgroundColor: 'white', paddingLeft }]}>
        <Text>{node.name}</Text>
      </View>
    );
  };

  const getChildrenName = (_: INode) => {
    return 'descendants';
  };

  const onPressUpdate = () => {
    if (dataSource === 'data') {
      setDataSource('data2');
    } else {
      setDataSource('data');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ margin: 10 }}>
        <Button onPress={onPressUpdate} title="Update Content" />
      </View>
      <NestedListView
        keepOpenedState
        data={dataSource === 'data' ? data : data2}
        getChildrenName={getChildrenName}
        renderNode={renderNode}
      />
    </View>
  );
};

export default DynamicContentExample;
