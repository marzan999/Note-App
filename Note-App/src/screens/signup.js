import { View, Text } from 'react-native'
import React from 'react'
import Input from '../components/input'
import { SafeAreaView } from 'react-native-safe-area-context'
import RadioInput from '../../src/components/radio-input'

const OPTIONS = ['Male', 'Female']

export default function Signup() {
  const [gender, setGender] = React.useState('Female')
  return (
    <SafeAreaView>
      <View style={{ margin: 25 }}>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Input placeholder="Full name" />
        <Input placeholder="Age" />

        <View style={{ marginTop: 20 }}>
          {/* <RadioInput lebel="Male" />
        <RadioInput lebel="Female" /> */}
          {OPTIONS.map((option, index) => (
            <RadioInput 
            key={index} 
            lebel={option} 
            value={gender}
            setValue={setGender}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  )
}