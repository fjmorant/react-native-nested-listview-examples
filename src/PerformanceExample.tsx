import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import categories from './categories.json';

import NestedListView, { INode, NestedRow } from 'react-native-nested-listview';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'grey',
  },
  listItemTouchable: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'goldenrod',
  },
  listItemColLeft: {
    width: 50,
    alignItems: 'center',
  },
  listItemColCenter: {
    flex: 1,
    justifyContent: 'center',
  },
  listItemColRight: {
    width: 30,
  },
  listItemText: {
    color: 'black',
  },
});

const PerformanceExample = () => {
  const [data] = useState(categories);
  const {
    listItemTouchable,
    listItemColLeft,
    listItemColCenter,
    listItemColRight,
    listItemText,
  } = styles;

  return (
    <View style={{ flex: 1 }}>
      <NestedListView
        getChildrenName={() => 'items'}
        data={data.side_panel_nested_categories}
        onNodePressed={() => {}}
        renderNode={(node: INode, level?: number) => {
          let iconByType = (
            <IconFeather name="menu" size={22} color={'indigo'} />
          );
          if (level ?? 0 > 1) {
            if (parseInt(node.category_type) === 1) {
              iconByType = (
                <IconFontisto
                  name="shopping-store"
                  size={16}
                  color={'indigo'}
                />
              );
            } else if (parseInt(node.category_type) === 2) {
              iconByType = (
                <IconFontAwesome5
                  name="shopping-cart"
                  size={20}
                  color={'indigo'}
                />
              );
            } else if (parseInt(node.category_type) === 3) {
              iconByType = (
                <IconFeather name="gift" size={20} color={'indigo'} />
              );
            }
          }
          return (
            <NestedRow level={level} style={{ marginLeft: -12 }}>
              <View style={listItemTouchable}>
                <View style={listItemColLeft}>{iconByType}</View>
                <View style={listItemColCenter}>
                  <Text style={listItemText}>{node.title}</Text>
                </View>
                {level ?? 0 < 4 ? (
                  <View style={listItemColRight}>
                    <IconEvilIcons
                      name={node.opened ? 'chevron-down' : 'chevron-right'}
                      size={32}
                      color={'grey'}
                    />
                  </View>
                ) : null}
              </View>
            </NestedRow>
          );
        }}
      />
    </View>
  );
};

export default PerformanceExample;
