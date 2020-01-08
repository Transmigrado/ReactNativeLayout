import React, { useEffect, useState } from 'react';
import { propToStyleSheet } from '../utils/Style';

import {
  StyleSheet,
  View,
  Text,
  Animated,
} from 'react-native';

type Offset = {
    x: number,
    y: number
}

type Padding = {
    paddingLeft: number,
    paddingBottom: number,
    paddingRight: number,
    paddingTop: number,
    paddingVertical: number,
    paddingHorizontal: number,
}

type Props = {
    padding: number | Padding,
    top: boolean,
    bottom: boolean,
    left: boolean,
    right: boolean,
    offset: Offset,
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

    useEffect(animate,[props.padding, props.background, props.offset]);

    return (
        <Animated.View style={[rootStyle, style()]}>
            {props.children}
        </Animated.View>
    );
};

Base.defaultProps = {
    offset: {
        x:0,
        y:0,
    }
}


export default Base