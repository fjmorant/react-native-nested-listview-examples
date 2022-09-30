import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import NestedListView, { INode } from 'react-native-nested-listview';
import { useSelector } from 'react-redux';

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
  const products = useSelector<any>((state) => state.products.products);

  const renderNode = (node: INode, level?: number) => {
    const paddingLeft = (level || 0 + 1) * 30;
    const backgroundColor = colorLevels[level || 0] || 'white';

    return (
      <View
        key={node._internalId}
        style={[styles.node, { backgroundColor, paddingLeft }]}>
        <Text>{node.name}</Text>
      </View>
    );
  };

  const onNodePressed = (node?: INode) => {
    Alert.alert(node?.name);
  };

  const getChildrenName = () => {
    return 'subProducts';
  };

  return (
    <View style={styles.container}>
      <NestedListView
        data={products}
        getChildrenName={getChildrenName}
        onNodePressed={onNodePressed}
        renderNode={renderNode}
      />
    </View>
  );
};

export default CustomNodeExample;
