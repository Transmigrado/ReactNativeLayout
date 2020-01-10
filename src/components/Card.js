
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native'
import Base from './Base'


const styles = StyleSheet.create({
    card: {
        flex:1,
        borderRadius: 6,
        shadowColor: '#000',
        shadowRadius: 4,
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 5 },
        backgroundColor: 'white',
        elevation: 5,
        paddingHorizontal: 18,
        paddingVertical: 19,
        borderColor: '#F5F5F5',
    }
})


const Card = Base(styles.card)


export default Card