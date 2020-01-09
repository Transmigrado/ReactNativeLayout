
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native'
import Base from './Base'


const styles = StyleSheet.create({
    card: {
        width: '100%',
        borderRadius: 6,
        shadowColor: "#000",
        shadowRadius: 4,
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 5 },
        backgroundColor: "white",
        elevation: 5,
        paddingHorizontal: 18,
        paddingVertical: 19,
    }
})


const Card = Base(styles.card)


export default Card