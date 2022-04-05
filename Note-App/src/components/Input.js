import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

export default function Input({placeholder, onChangeText}) {
    return (
        <TextInput
            style={styles.textInput}
            placeholder={placeholder}
        />
    )
}

const styles = StyleSheet.create({
    textInput: {
        borderBottomWidth: 1, 
        borderBottomColor: '#ccc', 
        padding: 10, 
        marginBottom: 16
    }
});