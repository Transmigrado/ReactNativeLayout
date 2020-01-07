
import React, { useEffect, useState } from 'react';
import { propToStyleSheet } from '../utils/Style';

import {
  StyleSheet,
  View,
  Text,
  Animated,
} from 'react-native';


type Props = {
    padding: number,
    background: string,
    children?: React.Node,
};

const Base = (rootStyle:{}) => (props : Props) => {
    
    const [value, setValue] = useState(new Animated.Value(0)) 
    const [initial, setInitial] = useState(propToStyleSheet(props))

    const reset = () => {
        setInitial(propToStyleSheet(props))
        setValue(new Animated.Value(0))
    }

    const interpolate = prop => value.interpolate({
            inputRange: [0, 1],
            outputRange: [initial[prop], propToStyleSheet(props)[prop]],
    })

    const animate = () => {
        Animated.timing(value, {
            toValue: 1,
            duration: 500,
        })
        .start(reset);
    }

    const style = () => Object.keys(propToStyleSheet(props))
                        .reduce((acc,cur) => ({...acc,[cur]:interpolate(cur)}),{})

    useEffect(animate,[props.padding, props.background]);

    return (
        <Animated.View style={[rootStyle,style()]}>
            {props.children}
        </Animated.View>
    );
};

export default Base