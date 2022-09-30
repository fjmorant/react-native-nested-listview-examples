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
import CustomNodeExample from './CustomNodeExample';
import StateChangeNodeExample from './StateChangeNodeExample';
import ErrorMessageExample from './ErrorMessageExample';
import NestedRowExample from './NestedRowExample';
import DynamicContentExample from './DynamicContentExample';
import ChildrenAsObjectExample from './ChildrenAsObjectExample';
import ExtraDataExample from './ExtraDataExample';
import PerformanceExample from './PerformanceExample';

import { Provider } from 'react-redux';
import store from './store';
import ReduxExample from './ReduxExample';
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
            {Object.keys(mapScreenComp).map((key) => {
              return (
                <Button
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
