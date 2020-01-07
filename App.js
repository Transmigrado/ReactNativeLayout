/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { SafeAreaView, Button } from 'react-native'
import { Row } from './src/components'

const App: () => React$Node = () => {

  const [padding, setPadding] = useState(10) 

  return (
    <>
      <SafeAreaView>
        <Row padding={padding} />
        <Button onPress={()=>{
          setPadding(padding == 10 ? 20 : 10)
        }} title="change" />
      </SafeAreaView>
    </>
  );
};


export default App;
