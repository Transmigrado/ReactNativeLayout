
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native'
import Base from './Base'


const styles = StyleSheet.create({
    container: {
        flex:1,
        height: StyleSheet.hairlineWidth,
         backgroundColor:'red'
    }
})

const Space = Base(styles.container)

export default Space