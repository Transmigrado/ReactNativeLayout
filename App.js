/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { SafeAreaView, Button, Text } from 'react-native'
import { Row, Col, Float, Container } from './src/components'

const App: () => React$Node = () => {

  const [padding, setPadding] = useState(10) 
  const [top, setTop] = useState(10) 
  const [background, setBackground] = useState("#00FF00") 

  return (
    <>
      <SafeAreaView>
        <Container>
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
          <Float bottom offset={{y:top}} background="#FF0000">
            <Text>Hola</Text>
          </Float>
          <Button onPress={()=>{
            setPadding(padding == 10 ? 20 : 10)
            setTop(padding == 10 ? 200 : 100)
            setBackground(padding == 10 ? "#00FF00" : "#FF0000")
          }} title="change" />
        </Container>
      </SafeAreaView>
    </>
  );
};


export default App;
