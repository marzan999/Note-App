import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Input from '../components/input';
import Button from '../components/button';
import { firebase } from '../config';
import { ActivityIndicator } from 'react-native';
import reactDom from 'react-dom';

export default function Login({ navigation }) {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)


    const navigateToSignUp = () => {
        navigation.navigate('Signup')
    }

    const login = () => {
        setLoading(true)

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(response => {
                console.log("login response ", response)
                setLoading(false)
            }).catch(error => {
                console.log("login error ", error.message)
                setLoading(false)
                setError(error.message)
            })
    }

    return (
        <SafeAreaView>
            <View>
                <Image source={require('../../assets/login_image.png')} style={{ alignSelf: 'center' }} />
                <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>Never forget your notes</Text>
            </View>

            <View style={{ margin: 25 }}>
                <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
                <Input
                    placeholder="Password"
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                />

                {error && <Text style={{color: 'red', marginTop: 10}}>{error}</Text>}

                {loading ?
                    <ActivityIndicator /> :
                    <Button
                        title='Login'
                        customStyle={{ marginTop: 25, alignSelf: 'center' }}
                        onPress={login}
                    />}


            </View>

            <TouchableOpacity onPress={navigateToSignUp} style={{ marginTop: 25 }}>
                <Text style={{ textAlign: 'center' }}>
                    Don't have an account? <Text style={{ color: '#18B18D', fontWeight: 'bold' }}>Sign up</Text>
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