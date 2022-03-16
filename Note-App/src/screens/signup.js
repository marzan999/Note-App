import { View, Text } from 'react-native'
import React from 'react'
import Input from '../components/input'
import { SafeAreaView } from 'react-native-safe-area-context'
import RadioInput from '../../src/components/radio-input'

export default function Signup() {
  return (
    <SafeAreaView>
      <View style={{ margin: 25 }}>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Input placeholder="Full name" />
        <Input placeholder="Age" />

        <View style={{ marginTop: 20 }}>
        <RadioInput lebel="Male" />
        <RadioInput lebel="Female" />
        </View>
      </View>
    </SafeAreaView>
  )
}