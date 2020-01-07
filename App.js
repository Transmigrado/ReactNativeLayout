/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { SafeAreaView, Button, Text } from 'react-native'
import { Row, Col } from './src/components'

const App: () => React$Node = () => {

  const [padding, setPadding] = useState(10) 
  const [background, setBackground] = useState("#00FF00") 

  return (
    <>
      <SafeAreaView>
        <Row 
          padding={padding} 
          background={background} 
        >
          <Col 
          padding={padding} 
          background={background} >
            <Text>Hola</Text>
          </Col>
          <Col 
          padding={padding} 
          background={background} >
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
          </Col>
        </Row>
        <Button onPress={()=>{
          setPadding(padding == 10 ? 20 : 10)
          setBackground(padding == 10 ? "#00FF00" : "#FF0000")
        }} title="change" />
      </SafeAreaView>
    </>
  );
};


export default App;
