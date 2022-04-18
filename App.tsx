import * as React from 'react';
import CustomNodeExample from './CustomNodeExample';
import StateChangeNodeExample from './StateChangeNodeExample';
import ErrorMessageExample from './ErrorMessageExample';
import NestedRowExample from './NestedRowExample';
import DynamicContentExample from './DynamicContentExample';
import ChildrenAsObjectExample from './ChildrenAsObjectExample';
import ExtraDataExample from './ExtraDataExample';
import PerformanceExample from './PerformanceExample';

import HomeScreen from './HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import store from './store';
import ReduxExample from './ReduxExample';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="CustomNodeExample"
            component={CustomNodeExample}
          />
          <Stack.Screen
            name="StateChangeNodeExample"
            component={StateChangeNodeExample}
          />
          <Stack.Screen
            name="ErrorMessageExample"
            component={ErrorMessageExample}
          />
          <Stack.Screen name="NestedRowExample" component={NestedRowExample} />
          <Stack.Screen name="ExtraDataExample" component={ExtraDataExample} />

          <Stack.Screen
            name="DynamicContentExample"
            component={DynamicContentExample}
          />
          <Stack.Screen
            name="ChildrenAsObjectExample"
            component={ChildrenAsObjectExample}
          />
          <Stack.Screen
            name="PerformanceExample"
            component={PerformanceExample}
          />
          <Stack.Screen name="ReduxExample" component={ReduxExample} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
