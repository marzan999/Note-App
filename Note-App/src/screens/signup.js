import { View, Text } from 'react-native'
import React from 'react'
import Input from '../components/input'
import { SafeAreaView } from 'react-native-safe-area-context'
import RadioInput from '../../src/components/radio-input'
import Button from '../components/button'

const OPTIONS = ['Male', 'Female']

export default function Signup() {
  const [gender, setGender] = React.useState(null)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [name, setName] = React.useState('')
  const [age, setAge] = React.useState('')


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

        <Button title="submit" customStyle={{ marginTop: 25, alignSelf: 'center' }} />

      </View>
    </SafeAreaView>
  )
}