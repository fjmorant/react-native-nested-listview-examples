import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import NestedListView, { INode } from 'react-native-nested-listview';

const generateXNumItems = (numItems: number, prefix: string) => {
  const items = [];

  let i;

  for (i = 0; i < numItems; i++) {
    items.push({
      name: `${prefix}.${i}`,
    });
  }

  return items;
};

const data = [
  {
    name: 'Item level 1.1',
    descendants: generateXNumItems(100, 'Item level 1.1'),
  },
  {
    name: 'Item level 1.2',
    descendants: [
      {
        name: 'Item level 1.2.1',
      },
      {
        name: 'Item level 1.2.2',
        children: generateXNumItems(250, 'Item level 1.2.2'),
      },
    ],
  },
  {
    name: 'Item level 1.3',
    descendants: generateXNumItems(500, 'Item level 1.3'),
  },
];

const colorLevels: { [key: string]: any } = {
  0: 'white',
  1: 'blue',
  2: 'green',
  3: 'red',
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'rgb(255, 255, 255)', padding: 15 },
  node: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgb(0, 0, 0)',
  },
});

const CustomNodeExample = () => {
  const renderNode = (node: INode, level?: number) => {
    const paddingLeft = (level || 0 + 1) * 30;
    const backgroundColor = colorLevels[level || 0] || 'white';

    return (
      <View style={[styles.node, { backgroundColor, paddingLeft }]}>
        <Text>{node.name}</Text>
      </View>
    );
  };

  const onNodePressed = (node?: INode) => {
    Alert.alert(node?.name);
  };

  const getChildrenName = (node: INode) => {
    if (node.name === 'Item level 1.2.2') {
      return 'children';
    }

    return 'descendants';
  };

  return (
    <View style={styles.container}>
      <NestedListView
        data={data}
        getChildrenName={getChildrenName}
        onNodePressed={onNodePressed}
        renderNode={renderNode}
      />
    </View>
  );
};

export default CustomNodeExample;
