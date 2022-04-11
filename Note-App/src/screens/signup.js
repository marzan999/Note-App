import { View, Text } from 'react-native'
import React from 'react'
import Input from '../components/input'
import { SafeAreaView } from 'react-native-safe-area-context'
import RadioInput from '../../src/components/radio-input'
import Button from '../components/button'
import { firebase } from '../config'
import { ActivityIndicator } from 'react-native'

const OPTIONS = ['Male', 'Female']

export default function Signup() {
  const [gender, setGender] = React.useState(null)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [name, setName] = React.useState('')
  const [age, setAge] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const signup = () => {

    setLoading(true)

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log('response --- ', response)

        const uid = response.user.uid


        const userProfileData = {
          id: uid,
          name: name,
          age: age,
          email: email,
          gender: gender,
        }

        const userRef = firebase.firestore().collection("users");

        userRef.doc(uid).set(userProfileData);

        setLoading(false)
      }).catch((error) => {
        setLoading(false)
        console.log('error ', error)
      }
      );

  }


  return (
    <SafeAreaView>
      <View style={{ margin: 25 }}>
        <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
        <Input
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <Input placeholder="Full name" onChangeText={(text) => setName(text)} />
        <Input placeholder="Age" onChangeText={(text) => setAge(text)} />

        <View style={{ marginTop: 20 }}>
          <Text style={{ marginBottom: 20 }}>Select your gender</Text>
          {OPTIONS.map((option, index) => (
            <RadioInput
              key={index}
              lebel={option}
              value={gender}
              setValue={setGender}
            />
          ))}
        </View>
        {loading ?
          <ActivityIndicator /> :
          <Button
            title="submit"
            customStyle={{ marginTop: 25, alignSelf: 'center' }}
            onPress={signup}
          />
        }



      </View>
    </SafeAreaView>
  )
}
