/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { SafeAreaView, Button, Text } from 'react-native'
import { Row, Col, Float, Container, ForEach, Card } from './src/components'

const data = [
  {label:'mundo 1', padding:40},
  {label:'mundo 2', padding:10},
  {label:'mundo 3', padding:40},
  {label:'mundo 4', padding:10},
  {label:'mundo 5', padding:30},
  {label:'mundo 6', padding:10},
  {label:'mundo 7', padding:20},
]

const App: () => React$Node = () => {

  return (
    <>
      <SafeAreaView>
        <Container>
            <ForEach scroll data={data}>
              
                <Row padding={10}>
                  <Card>
                    <Text>:label</Text>
                    <Text>:label</Text>
                  </Card>
                </Row>
              
            </ForEach>
        </Container>
      </SafeAreaView>
    </>
  );
};


export default App;
