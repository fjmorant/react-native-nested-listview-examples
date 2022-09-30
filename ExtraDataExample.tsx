/* @flow */

import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import NestedListView, { INode } from 'react-native-nested-listview';

const data = [
  {
    name: 'Item level 1.1',
    customId: '1.1',
    selected: false,
  },
  {
    name: 'Item level 1.2',
    selected: false,
    customId: '1.2',
    descendants: [
      {
        name: 'Item level 1.2.1',
        customId: '1.2.1',
        selected: false,
      },
      {
        name: 'Item level 1.2.2',
        customId: '1.2.2',
        selected: false,
      },
    ],
  },
  {
    name: 'Item level 1.3',
    customId: '1.3',
    selected: false,
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

const ExtraDataExample = () => {
  const [selected, setSelected] = useState([]);

  const getChildrenName = (node: INode) => {
    if (node.name === 'Item level 1.2.2') {
      return 'children';
    }

    return 'descendants';
  };

  const toggleChecked = (node: INode) => {
    // @ts-ignore
    if (selected.includes(node.customId)) {
      const newSelected = selected.filter((id: string) => id !== node.customId);
      setSelected(newSelected);
    } else {
      // @ts-ignore
      setSelected([node.customId, ...selected]);
    }
  };

  return (
    <View style={styles.container}>
      <NestedListView
        data={data}
        extraData={selected}
        getChildrenName={getChildrenName}
        renderNode={(node: INode, level?: number) => (
          <>
            <Text>{node.name}</Text>
            <TouchableOpacity onPress={() => toggleChecked(node)}>
              {
                // @ts-ignore
                selected.includes(node.customId) ? (
                  <Text>CHECKED</Text>
                ) : (
                  <Text>NOT CHECKED</Text>
                )
              }
            </TouchableOpacity>
          </>
        )}
      />
    </View>
  );
};

export default ExtraDataExample;
