import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Input from '../components/input';

export default function Login() {
  return (
    <SafeAreaView>
        <View>
        <Image source={require('../../assets/login_image.png')} style={{alignSelf: 'center'}} />
        <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>Never forget your notes</Text>
        </View>

        <View style={{margin: 25}}>
           <Input
               placeholder = 'Email'
           />
           <Input
               placeholder = 'Password'
           />
        </View>
    </SafeAreaView>
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