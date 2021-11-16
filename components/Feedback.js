import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export function Feedback (props){
    return (
        <View>
            <Text style={(props.error)? styles.errorMessage: styles.successMessage}>{props.message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    errorMessage: {
        color: '#ff0000',
    },
    successMessage: {
        color: '#0000ff',
    },
})
