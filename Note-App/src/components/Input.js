import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

export default function Input({placeholder, onChangeText, secureTextEntry=false}) {
    return (
        <TextInput
            style={styles.textInput}
            placeholder={placeholder}
            onChangeText={onChangeText}
            autoCorrect={false}
            secureTextEntry={secureTextEntry}
        />
    )
}
 
const styles = StyleSheet.create({
    textInput: {
        borderBottomWidth: 1, 
        borderBottomColor: '#ccc', 
        paddingVertical: 10,
        marginBottom: 20
    }
});