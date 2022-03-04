import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function Button({title, onPress, customStyle}) {
  return (
    <View>
      <TouchableOpacity style={[styles.button, customStyle]} onPress={onPress} >
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 30, 
        width: 165, 
        height: 45, 
        backgroundColor: '#FFE600', 
        justifyContent: 'center', 
        alignItems: 'center',
    }, 
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    }
});