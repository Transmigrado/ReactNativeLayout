
import React, { useEffect, useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Animated,
} from 'react-native';

type Props = {
    size: number,
    padding: number
};

const Row = (props:Props) =>{
    
    const [value, setValue] = useState(new Animated.Value(0)) 
    const [initial, setInitial] = useState(props)

    const reset = () => {
        setInitial(props)
        setValue(new Animated.Value(0))
    }

    const interpolate = () => value.interpolate({
            inputRange: [0, 1],
            outputRange: [initial.padding, props.padding],
    })

    const animate = () => {
        Animated.timing(value, {
            toValue: 1,
            duration: 500,
        })
        .start(reset);
    }

    useEffect(animate,[props.padding]);

    return (
        <Animated.View style={{padding: interpolate()}}>
            <Text>Hola</Text>
        </Animated.View>
    );
};

export default Row