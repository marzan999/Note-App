import { View, Text } from 'react-native'
import React from 'react'
import Input from '../components/Input'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Signup() {
  return (
    <SafeAreaView>
      <View style={{margin: 25}}>
         <Input placeholder="Email" />
         <Input placeholder="Password" />
         <Input placeholder="Full name" />
         <Input placeholder="Age" />
      </View>
    </SafeAreaView>
  )
}