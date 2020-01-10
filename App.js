/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { SafeAreaView, Button, Text, TouchableOpacity } from 'react-native'
import { Row, Col, Float, Container, ForEach, Card, Space, Line } from './src/components'


const App: () => React$Node = () => {

  const [expand, setExpand] = useState(false)

  const data = [
    {label:'mundo 2', offset:{y: expand ? 90 : 30, x:30}, size:40},
    {label:'mundo 3', offset:{y: expand ? 140 : 30, x:30}, size:40},
    {label:'mundo 4', offset:{y: expand ? 190 : 30, x:30}, size:40},
    {label:'mundo 5', offset:{y: expand ? 240 : 30, x:30}, size:40},
    {label:'mundo 1', offset:{y: 20, x:20}, size:60},
  ]

  
  return (
    <>
      <SafeAreaView>
        <Container>
            <ForEach data={data}>
                <Float 
                  bottom 
                  right 
                  background="#F5F5F5" 
                  radius={30} 
                  size=":size" 
                  offset=":offset"
                  onPress={()=>setExpand(!expand)}
                  >
                  <Text>Hola</Text>
                </Float>
            </ForEach>
        </Container>
      </SafeAreaView>
    </>
  );
};


export default App;
