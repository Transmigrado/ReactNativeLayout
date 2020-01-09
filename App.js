/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { SafeAreaView, Button, Text } from 'react-native'
import { Row, Col, Float, Container, ForEach } from './src/components'

const data = [
  {label:'mundo 1', background:`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`},
  {label:'mundo 1', background:`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`},
  {label:'mundo 1', background:`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`},
  {label:'mundo 1', background:`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`},
  {label:'mundo 1', background:`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`},
  {label:'mundo 1', background:`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`},
  {label:'mundo 1', background:`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`},
]

const App: () => React$Node = () => {

  return (
    <>
      <SafeAreaView>
        <Container>
            <ForEach data={data}>
              <Row padding={10} background=":background">
                <Text>:label</Text>
              </Row>
            </ForEach>
           
        </Container>
      </SafeAreaView>
    </>
  );
};


export default App;
