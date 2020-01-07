/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView } from 'react-native'
import { Row } from './src/components'

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <Row />
      </SafeAreaView>
    </>
  );
};


export default App;
