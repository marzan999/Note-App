import { View, Text } from 'react-native'
import React from 'react'
import Input from '../components/input'
import { SafeAreaView } from 'react-native-safe-area-context'
import RadioInput from '../../src/components/radio-input'
import Button from '../components/button'

const OPTIONS = ['Male', 'Female']

export default function Signup() {
  const [gender, setGender] = React.useState(null)
  return (
    <SafeAreaView>
      <View style={{ margin: 25 }}>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Input placeholder="Full name" />
        <Input placeholder="Age" />

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

        <Button title="submit"  customStyle={{marginTop:25, alignSelf: 'center' }}/>

      </View>
    </SafeAreaView>
  )
}