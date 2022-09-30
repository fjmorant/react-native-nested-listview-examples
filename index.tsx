import {
  AppRegistry,
  Button,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as React from 'react';
import { name as appName } from './app.json';
import CustomNodeExample from './src/CustomNodeExample';
import StateChangeNodeExample from './src/StateChangeNodeExample';
import ErrorMessageExample from './src/ErrorMessageExample';
import NestedRowExample from './src/NestedRowExample';
import DynamicContentExample from './src/DynamicContentExample';
import ChildrenAsObjectExample from './src/ChildrenAsObjectExample';
import ExtraDataExample from './src/ExtraDataExample';
import PerformanceExample from './src/PerformanceExample';

import { Provider } from 'react-redux';
import store from './src/store';
import ReduxExample from './src/ReduxExample';
import { useState } from 'react';

const mapScreenComp: any = {
  CustomNodeExample: () => <CustomNodeExample />,
  StateChangeNodeExample: () => <StateChangeNodeExample />,
  ErrorMessageExample: () => <ErrorMessageExample />,
  NestedRowExample: () => <NestedRowExample />,
  ExtraDataExample: () => <ExtraDataExample />,
  DynamicContentExample: () => <DynamicContentExample />,
  ChildrenAsObjectExample: () => <ChildrenAsObjectExample />,
  PerformanceExample: () => <PerformanceExample />,
  ReduxExample: () => <ReduxExample />,
};

const App = () => {
  const [selectedScreen, setSelectedScreen] = useState<string>('');

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        {selectedScreen ? (
          <Button
            onPress={() => {
              setSelectedScreen('');
            }}
            title={'Clear selection'}
          />
        ) : null}
        {selectedScreen ? (
          <View style={{ flex: 1 }}>{mapScreenComp[selectedScreen]()}</View>
        ) : (
          <>
            {Object.keys(mapScreenComp).map((key, index) => {
              return (
                <Button
                  key={index}
                  onPress={() => {
                    setSelectedScreen(key);
                  }}
                  title={key}
                />
              );
            })}
          </>
        )}
      </SafeAreaView>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => App);
