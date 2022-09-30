/* @flow */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NestedListView, { INode } from 'react-native-nested-listview';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'rgb(255, 255, 255)', padding: 15 },
  node: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgb(0, 0, 0)',
  },
});

const ErrorMessageExample = () => {
  const renderNode = (node: INode, level?: number) => {
    const paddingLeft = (level ?? 0 + 1) * 30;

    return (
      <View
        style={[
          styles.node,
          { paddingLeft, backgroundColor: node.opened ? 'yellow' : 'white' },
        ]}>
        <Text>{node.name}</Text>
      </View>
    );
  };

  const getChildrenName = (node: INode) => {
    if (node.name === 'Item level 1.2.2') {
      return 'children';
    }

    return 'descendants';
  };

  return (
    <View style={styles.container}>
      {/* @ts-ignore */}
      <NestedListView
        getChildrenName={getChildrenName}
        renderNode={renderNode}
      />
    </View>
  );
};

export default ErrorMessageExample;
