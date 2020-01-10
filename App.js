/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { SafeAreaView, Button, Text } from 'react-native'
import { Row, Col, Float, Container, ForEach, Card, Space, Line } from './src/components'

const data = [
  {label:'mundo 1', padding:40},
  {label:'mundo 2', padding:10},
  {label:'mundo 3', padding:40},
  {label:'mundo 4', padding:10},
  {label:'mundo 5', padding:30},
  {label:'mundo 6', padding:10},
  {label:'mundo 7', padding:20},
  {label:'mundo 8', padding:40},
  {label:'mundo 9', padding:10},
]

const App: () => React$Node = () => {

  return (
    <>
      <SafeAreaView>
        <Container>
            <ForEach scroll data={data}>
              <Col padding={10}>
                <Text>FIRST</Text>
                <Row padding={{v:10}}>
                  <Text>LAST</Text>
                </Row>  
                <Text>:label</Text>
                <Line />
              </Col>
            </ForEach>
        </Container>
      </SafeAreaView>
    </>
  );
};


export default App;
