import React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
    children?: React.Node,
};

const Container = (props : Props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
};


const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%'
    }
})

export default Container