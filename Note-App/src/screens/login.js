import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Input from '../components/input';
import Button from '../components/button';

export default function Login({navigation}) {

    const navigateToSignUp = () => {
        navigation.navigate('Signup')
    }
    return (
        <SafeAreaView>
            <View>
                <Image source={require('../../assets/login_image.png')} style={{ alignSelf: 'center' }} />
                <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>Never forget your notes</Text>
            </View>

            <View style={{ margin: 25 }}>
                <Input
                    placeholder='Email'
                />
                <Input
                    placeholder='Password'
                />

                <Button title='Login' customStyle={{marginTop:25, alignSelf: 'center' }} />

            </View>

            <TouchableOpacity onPress={navigateToSignUp} style={{marginTop: 25}}>
                <Text style={{textAlign: 'center'}}>
                    Don't have an account? <Text style={{color: '#18B18D', fontWeight: 'bold'}}>Sign up</Text>
                </Text>
            </TouchableOpacity>

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